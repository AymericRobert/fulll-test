import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../components/SearchInput";

describe("SearchInput component", () => {
  it("renders the input with the correct value", () => {
    const handleChange = jest.fn();
    render(<SearchInput query="test" onQueryChange={handleChange} />);
    
    const input = screen.getByPlaceholderText(/search input/i) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("test");
  });

  it("calls onQueryChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchInput query="" onQueryChange={handleChange} />);
    
    const input = screen.getByPlaceholderText(/search input/i) as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: "hello" } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("hello");
  });
});
