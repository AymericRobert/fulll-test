import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import * as githubApi from "../services/githubApi";

// Mock de la fonction getUser
jest.mock("../services/githubApi");

const mockUsers = {
  total_count: 2,
  incomplete_results: false,
  items: [
    {
      login: "hugo",
      id: 1,
      node_id: "node1",
      avatar_url: "avatar1.jpg",
      gravatar_id: "",
      url: "",
      html_url: "",
    },
    {
      login: "hugovk",
      id: 2,
      node_id: "node2",
      avatar_url: "avatar2.jpg",
      gravatar_id: "",
      url: "",
      html_url: "",
    },
  ],
};

describe("Home page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders search input", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it("displays loader when typing and fetches users", async () => {
    (githubApi.getUser as jest.Mock).mockResolvedValue(mockUsers);

    render(<Home />);
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "hugo" } });

    expect(screen.getByRole("status")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("hugo")).toBeInTheDocument();
      expect(screen.getByText("hugovk")).toBeInTheDocument();
    });

    // Loader disparait
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("can toggle edit mode", async () => {
    (githubApi.getUser as jest.Mock).mockResolvedValue(mockUsers);

    render(<Home />);
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "hugo" } });

    await waitFor(() => {
      expect(screen.getByText("hugo")).toBeInTheDocument();
    });

    const editCheckbox = screen.getByRole("checkbox", { name: /edit mode/i });
    expect(editCheckbox).not.toBeChecked();

    fireEvent.click(editCheckbox);
    expect(editCheckbox).toBeChecked();

    fireEvent.click(editCheckbox);
    expect(editCheckbox).not.toBeChecked();
  });

  it("shows error message when api fails", async () => {
    (githubApi.getUser as jest.Mock).mockRejectedValue(new Error("API error"));

    render(<Home />);
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "hugo" } });

    await waitFor(() => {
      expect(screen.getByText(/api error/i)).toBeInTheDocument();
    });
  });
});
