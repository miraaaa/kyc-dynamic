export function validateField(schemaItem, value) {
  if (!schemaItem) return null;
  const { type, required, min, max } = schemaItem;

  if (required) {
    if (type === "multi_choice" && (!value || value.length === 0)) return "This field is required.";
    if ((type === "radio_buttons" || type === "drop_down") && !value) return "This field is required.";
    if (!["multi_choice", "radio_buttons", "drop_down"].includes(type) && (!value || value.trim?.() === "")) {
      return "This field is required.";
    }
  }

  if (type === "multi_choice") {
    const len = Array.isArray(value) ? value.length : 0;
    if (min && len < min) return `Select at least ${min}.`;
    if (max && len > max) return `Select at most ${max}.`;
  }

  return null;
}
