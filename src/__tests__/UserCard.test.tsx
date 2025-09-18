import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "../components/UserCard";

const mockUser = {
  login: "hugo",
  id: 1,
  node_id: "node1",
  avatar_url: "avatar1.jpg",
  gravatar_id: "",
  url: "",
  html_url: "https://github.com/hugo",
};

describe("UserCard component", () => {
  it("renders user information", () => {
    render(<UserCard user={mockUser} checked={false} onToggle={() => {}} editMode={false} />);

    expect(screen.getByText(mockUser.id.toString())).toBeInTheDocument();
    expect(screen.getByText(mockUser.login)).toBeInTheDocument();
    const img = screen.getByAltText(mockUser.login) as HTMLImageElement;
    expect(img.src).toContain(mockUser.avatar_url);
    expect(screen.getByText(/view profile/i)).toHaveAttribute("href", mockUser.html_url);
  });

  it("does not render checkbox when editMode is false", () => {
    render(<UserCard user={mockUser} checked={false} onToggle={() => {}} editMode={false} />);
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });

  it("renders checkbox when editMode is true", () => {
    render(<UserCard user={mockUser} checked={false} onToggle={() => {}} editMode={true} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("calls onToggle when checkbox is clicked", () => {
    const onToggleMock = jest.fn();
    render(<UserCard user={mockUser} checked={false} onToggle={onToggleMock} editMode={true} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it("renders checkbox as checked when prop checked is true", () => {
    render(<UserCard user={mockUser} checked={true} onToggle={() => {}} editMode={true} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});
