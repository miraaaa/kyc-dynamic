import FieldWrapper from "./FieldWrapper";

export default function QuestionMultiChoice({ schema, value, onChange, error }) {
  const selected = Array.isArray(value) ? value : [];
  function toggle(opt) {
    const exists = selected.includes(opt);
    let next;
    if (exists) next = selected.filter((s) => s !== opt);
    else next = [...selected, opt];
    // enforce max locally (prevent adding beyond max)
    if (schema.max && next.length > schema.max) return; // ignore selection
    onChange(next);
  }
  const options = Array.isArray(schema.options) ? schema.options : [];
  return (
    <FieldWrapper label={schema.label} required={schema.required} error={error}>
      <div className="checkbox-grid">
        {options.length === 0 ? (
          <span className="hint-text">No options provided</span>
        ) : options.map((opt) => (
          <label key={opt} className="checkbox-option">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      {schema.min || schema.max ? (
        <div className="hint-text">
          {schema.min ? `Min: ${schema.min}. ` : ""}
          {schema.max ? `Max: ${schema.max}.` : ""}
        </div>
      ) : null}
    </FieldWrapper>
  );
}