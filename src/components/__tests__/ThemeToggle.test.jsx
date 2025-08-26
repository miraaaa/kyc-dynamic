// src/components/__tests__/ThemeToggle.test.jsx
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";  // 👈 import vi instead of jest
import ThemeToggle from "../ThemeToggle";

describe("ThemeToggle Component", () => {
  it("renders with light theme", () => {
    render(<ThemeToggle theme="light" setTheme={() => {}} />);
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle theme")).toBeInTheDocument();
  });

  it("renders with dark theme", () => {
    render(<ThemeToggle theme="dark" setTheme={() => {}} />);
    expect(screen.getByText("Light Mode")).toBeInTheDocument();
  });

  it("toggles theme from light to dark", () => {
    const mockSetTheme = vi.fn();   // 👈 use vi.fn()
    render(<ThemeToggle theme="light" setTheme={mockSetTheme} />);
    fireEvent.click(screen.getByRole("button", { name: /toggle theme/i }));
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles theme from dark to light", () => {
    const mockSetTheme = vi.fn();   // 👈 use vi.fn()
    render(<ThemeToggle theme="dark" setTheme={mockSetTheme} />);
    fireEvent.click(screen.getByRole("button", { name: /toggle theme/i }));
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
