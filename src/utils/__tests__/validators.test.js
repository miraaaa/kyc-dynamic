// src/utils/__tests__/validators.test.js
import { validateField } from "../validators";

describe("validateField", () => {
  it("should return null if schemaItem is null", () => {
    expect(validateField(null, "any")).toBeNull();
  });

  describe("required field validations", () => {
    it("should require text field", () => {
      const schema = { type: "text", required: true };
      expect(validateField(schema, "")).toBe("This field is required.");
      expect(validateField(schema, "   ")).toBe("This field is required.");
      expect(validateField(schema, "hello")).toBeNull();
    });

    it("should require textarea field", () => {
      const schema = { type: "textarea", required: true };
      expect(validateField(schema, "")).toBe("This field is required.");
      expect(validateField(schema, "valid")).toBeNull();
    });

    it("should require radio_buttons", () => {
      const schema = { type: "radio_buttons", required: true };
      expect(validateField(schema, null)).toBe("This field is required.");
      expect(validateField(schema, "option1")).toBeNull();
    });

    it("should require drop_down", () => {
      const schema = { type: "drop_down", required: true };
      expect(validateField(schema, undefined)).toBe("This field is required.");
      expect(validateField(schema, "selected")).toBeNull();
    });

    it("should require multi_choice", () => {
      const schema = { type: "multi_choice", required: true };
      expect(validateField(schema, [])).toBe("This field is required.");
      expect(validateField(schema, ["a"])).toBeNull();
    });
  });

  describe("multi_choice min/max", () => {
    it("should validate minimum selection", () => {
      const schema = { type: "multi_choice", min: 2 };
      expect(validateField(schema, ["a"])).toBe("Select at least 2.");
      expect(validateField(schema, ["a", "b"])).toBeNull();
    });

    it("should validate maximum selection", () => {
      const schema = { type: "multi_choice", max: 2 };
      expect(validateField(schema, ["a", "b", "c"])).toBe("Select at most 2.");
      expect(validateField(schema, ["a", "b"])).toBeNull();
    });
  });

  describe("non-required fields", () => {
    it("should allow empty if not required", () => {
      const schema = { type: "text", required: false };
      expect(validateField(schema, "")).toBeNull();
      expect(validateField(schema, null)).toBeNull();
    });
  });
});
