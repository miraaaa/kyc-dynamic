import FieldWrapper from "./FieldWrapper";

export default function QuestionRadio({ schema, value, onChange, error }) {
  const options = Array.isArray(schema.options) ? schema.options : [];
  return (
    <FieldWrapper label={schema.label} required={schema.required} error={error}>
      <div className="radio-group">
        {options.length === 0 ? (
          <span className="hint-text">No options provided</span>
        ) : options.map((opt) => (
          <label key={opt} className="radio-option">
            <input
              type="radio"
              name={schema.id}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </FieldWrapper>
  );
}
