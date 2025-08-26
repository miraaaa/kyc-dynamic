import FieldWrapper from "./FieldWrapper";

export default function QuestionSelect({ schema, value, onChange, error }) {
  const options = Array.isArray(schema.options) ? schema.options : [];
  return (
    <FieldWrapper label={schema.label} required={schema.required} error={error}>
      <select className="select" value={value || ""} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- Select --</option>
        {options.length === 0 ? (
          <option disabled value="">No options provided</option>
        ) : options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
