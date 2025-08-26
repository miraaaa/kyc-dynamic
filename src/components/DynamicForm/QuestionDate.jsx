import FieldWrapper from "./FieldWrapper";

export default function QuestionDate({ schema, value, onChange, error }) {
  return (
    <FieldWrapper label={schema.label} required={schema.required} error={error}>
      <input
        type="date"
        className="input-text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
}

