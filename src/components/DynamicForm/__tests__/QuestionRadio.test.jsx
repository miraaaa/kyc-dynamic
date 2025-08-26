import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import QuestionRadio from "../QuestionRadio";

describe("QuestionRadio Component", () => {
  const schema = {
    id: "gender",
    label: "Gender",
    options: ["Male", "Female"],
    required: true,
  };

  test("renders radio options", () => {
    const mockOnChange = vi.fn();
    render(<QuestionRadio schema={schema} value="" onChange={mockOnChange} />);

    expect(screen.getByLabelText("Male")).toBeInTheDocument();
    expect(screen.getByLabelText("Female")).toBeInTheDocument();
  });

  test("calls onChange when option is clicked", () => {
    const mockOnChange = vi.fn();
    render(<QuestionRadio schema={schema} value="" onChange={mockOnChange} />);

    fireEvent.click(screen.getByLabelText("Male"));
    expect(mockOnChange).toHaveBeenCalledWith("Male");
  });

  test("shows 'No options provided' when no options", () => {
    const mockOnChange = vi.fn();
    render(<QuestionRadio schema={{ ...schema, options: [] }} value="" onChange={mockOnChange} />);

    expect(screen.getByText("No options provided")).toBeInTheDocument();
  });
});
