import React, { useEffect, useMemo, useState } from "react";
import { validateField } from "../../utils/validators";
import renderQuestion from "./renderQuestion";

export default function DynamicForm({ schema, onSubmit, persistKey = "kyc_form_values" }) {
  // Restore all field values from localStorage, but only for fields present in the schema
  const initialValues = useMemo(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(persistKey)) || {};
      if (!Array.isArray(schema)) return raw;
      // Only keep keys that are in the schema
      const allowed = {};
      schema.forEach((s) => {
        if (Object.prototype.hasOwnProperty.call(raw, s.id)) allowed[s.id] = raw[s.id];
      });
      return allowed;
    } catch {
      return {};
    }
  }, [persistKey, schema]);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [currentStep, setCurrentStep] = useState(() => parseInt(localStorage.getItem(persistKey + "_step")) || 0);

  const pageSize = 2;
  const pages = [];
  for (let i = 0; i < schema.length; i += pageSize) pages.push(schema.slice(i, i + pageSize));

  // Persist all field values and step to localStorage on every change
  useEffect(() => {
    localStorage.setItem(persistKey, JSON.stringify(values));
    localStorage.setItem(persistKey + "_step", currentStep);
  }, [values, currentStep, persistKey]);

  function setValue(id, val) {
    setValues((prev) => ({ ...prev, [id]: val }));
    setTouched((t) => ({ ...t, [id]: true }));
    const item = schema.find((s) => s.id === id);
    setErrors((prev) => {
      const newErrs = { ...prev, [id]: validateField(item, val) };
      // Optionally, validate all fields on every change for live feedback
      // schema.forEach((s) => { newErrs[s.id] = validateField(s, values[s.id]); });
      return newErrs;
    });
  }

  function handleNext() {
    const errs = {};
    pages[currentStep].forEach((s) => {
      const e = validateField(s, values[s.id]);
      if (e) errs[s.id] = e;
    });
    setErrors((prev) => ({ ...prev, ...errs }));
    if (Object.keys(errs).length === 0) setCurrentStep((s) => s + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = {};
    schema.forEach((s) => {
      const e = validateField(s, values[s.id]);
      if (e) errs[s.id] = e;
    });
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSubmit(values);
      localStorage.removeItem(persistKey);
      localStorage.removeItem(persistKey + "_step");
    }
  }

  const step = Math.min(currentStep, pages.length - 1);

  function handleReset() {
    localStorage.removeItem(persistKey);
    localStorage.removeItem(persistKey + "_step");
    setValues({});
    setErrors({});
    setTouched({});
    setCurrentStep(0);
  }

  // Collect all visible errors for the current page
  const visibleErrors = pages[step]
    .map((s) => errors[s.id])
    .filter(Boolean);

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      {/* Validation summary for current page */}
      {visibleErrors.length > 0 && (
        <div className="validation-summary" style={{color: 'var(--error)', marginBottom: 12}}>
          <ul style={{margin: 0, paddingLeft: 18}}>
            {pages[step].map((s) =>
              errors[s.id] ? (
                <li key={s.id}>{s.label || s.id}: {errors[s.id]}</li>
              ) : null
            )}
          </ul>
        </div>
      )}

      {pages[step].map((s) =>
        renderQuestion(s, {
          value: values[s.id],
          onChange: (v) => setValue(s.id, v),
          error: touched[s.id] ? errors[s.id] : null,
        })
      )}

      <div className="form-actions">
        <button type="button" className="btn btn-danger" style={{marginLeft: 8}} onClick={handleReset}>Reset</button>
        {step > 0 && <button type="button" onClick={() => setCurrentStep((s) => s - 1)} className="btn btn-secondary">Back</button>}
        {step < pages.length - 1 && <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>}
        {step === pages.length - 1 && <button type="submit" className="btn btn-primary">Submit</button>}
      </div>
    </form>
  );
}
