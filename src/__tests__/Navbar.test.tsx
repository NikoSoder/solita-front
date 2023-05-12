import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("theme is toggled when sunIcon button is clicked", () => {
    render(<Navbar />);

    const sunIconBtn = screen.getByTestId("sunIcon");

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(screen.queryByTestId("moonIcon")).toBeNull();
    expect(sunIconBtn).toBeInTheDocument();

    fireEvent.click(sunIconBtn);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(screen.getByTestId("moonIcon")).toBeInTheDocument();
  });
});
