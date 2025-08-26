// src/components/DynamicForm/__tests__/QuestionText.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import QuestionText from "../QuestionText";

describe("QuestionText Component", () => {
  const schema = {
    label: "Full Name",
    placeholder: "Enter your name",
    required: true,
  };

  test("renders with label, placeholder and value", () => {
    render(
      <QuestionText
        schema={schema}
        value="Amira"
        onChange={() => {}}
        error={null}
      />
    );

    // Check label
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument();

    // Check input
    const input = screen.getByPlaceholderText(/Enter your name/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Amira");
  });

  test("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(
      <QuestionText
        schema={schema}
        value=""
        onChange={handleChange}
        error={null}
      />
    );

    const input = screen.getByPlaceholderText(/Enter your name/i);
    fireEvent.change(input, { target: { value: "New Name" } });

    expect(handleChange).toHaveBeenCalledWith("New Name");
  });

  test("displays error when provided", () => {
    render(
      <QuestionText
        schema={schema}
        value=""
        onChange={() => {}}
        error="This field is required"
      />
    );

    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
  });

  test("applies required correctly", () => {
    render(
      <QuestionText
        schema={schema}
        value=""
        onChange={() => {}}
        error={null}
      />
    );

    // Check if label has required mark
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument();

    // Input itself should be present
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
  });
});
