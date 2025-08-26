import FieldWrapper from "./FieldWrapper";

export default function QuestionFile({ schema, value, onChange, error }) {
  return (
    <FieldWrapper label={schema.label} required={schema.required} error={error}>
      <input
        type="file"
        className="input-text"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            // store file name (or base64 if you want)
            onChange({ name: file.name, size: file.size });
          }
        }}
      />
      {value?.name && <p className="hint-text">Selected: {value.name}</p>}
    </FieldWrapper>
  );
}
