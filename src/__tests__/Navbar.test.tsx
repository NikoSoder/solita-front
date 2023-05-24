import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  it("theme is toggled when sunIcon button is clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const sunIconBtn = screen.getByTestId("sunIcon");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(screen.queryByTestId("moonIcon")).toBeNull();
    expect(sunIconBtn).toBeInTheDocument();
    fireEvent.click(sunIconBtn);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(screen.getByTestId("moonIcon")).toBeInTheDocument();
  });

  it("should show moon icon when html has dark class", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    document.documentElement.classList.add("dark");
    expect(screen.getByTestId("moonIcon")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("moonIcon"));
    expect(screen.getByTestId("sunIcon")).toBeInTheDocument();
  });
});
