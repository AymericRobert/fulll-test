// src/__tests__/ActionsBar.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ActionsBar from "../components/ActionBar";

describe("ActionsBar component", () => {
  const mockToggleAll = jest.fn();
  const mockDelete = jest.fn();
  const mockDuplicate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders total selected and checkbox", () => {
    render(
      <ActionsBar
        totalSelected={3}
        isAllSelected={false}
        onToggleAll={mockToggleAll}
        onDelete={mockDelete}
        onDuplicate={mockDuplicate}
      />
    );

    // Checkbox
    const checkbox = screen.getByLabelText("Select all");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // Total selected
    expect(screen.getByText("3 elements selected")).toBeInTheDocument();
  });

  it("calls onToggleAll when checkbox is clicked", () => {
    render(
      <ActionsBar
        totalSelected={1}
        isAllSelected={false}
        onToggleAll={mockToggleAll}
        onDelete={mockDelete}
        onDuplicate={mockDuplicate}
      />
    );

    const checkbox = screen.getByLabelText("Select all");
    fireEvent.click(checkbox);
    expect(mockToggleAll).toHaveBeenCalled();
  });

  it("calls onDuplicate when duplicate icon is clicked", () => {
    render(
      <ActionsBar
        totalSelected={1}
        isAllSelected={false}
        onToggleAll={mockToggleAll}
        onDelete={mockDelete}
        onDuplicate={mockDuplicate}
      />
    );

    const duplicateIcon = screen.getByLabelText("Duplicate selected");
    fireEvent.click(duplicateIcon);
    expect(mockDuplicate).toHaveBeenCalled();
  });

  it("calls onDelete when delete icon is clicked", () => {
    render(
      <ActionsBar
        totalSelected={1}
        isAllSelected={false}
        onToggleAll={mockToggleAll}
        onDelete={mockDelete}
        onDuplicate={mockDuplicate}
      />
    );

    const deleteIcon = screen.getByLabelText("Delete selected");
    fireEvent.click(deleteIcon);
    expect(mockDelete).toHaveBeenCalled();
  });
});
