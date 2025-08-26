export default function FieldWrapper({ children, label, required, error }) {
  return (
    <div className={`field-card ${error ? "field-error" : ""}`}>
      <label className="field-label">
        {label} {required && <span className="required-star">*</span>}
      </label>
      <div className="field-control">{children}</div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
}
