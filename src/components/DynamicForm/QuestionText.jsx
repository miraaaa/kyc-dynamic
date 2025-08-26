import FieldWrapper from "./FieldWrapper";

export default function QuestionText({ schema, value, onChange, error }) {
  return (
    <FieldWrapper label={schema.label} required={schema.required} error={error}>
      <input
        className="input-text"
        placeholder={schema.placeholder || ""}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
}
