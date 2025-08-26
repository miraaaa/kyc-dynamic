import FieldWrapper from "./FieldWrapper";

export default function QuestionTextarea({ schema, value, onChange, error }) {
  return (
    <FieldWrapper label={schema.label} required={schema.required} error={error}>
      <textarea
        className="input-textarea"
        placeholder={schema.placeholder || ""}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
      />
    </FieldWrapper>
  );
}
