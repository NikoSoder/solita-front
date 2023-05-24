import { render, screen } from "@testing-library/react";
import { mockTrips } from "../mocks/mockTrips";
import { mockStations } from "../mocks/mockStations";
import { vi } from "vitest";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Home", () => {
  it("renders Home and Navbar component", async () => {
    const setTrips = vi.fn();
    const setPage = vi.fn();
    const setSelected = vi.fn();

    render(
      <MemoryRouter>
        <Navbar />
        <Home
          trips={mockTrips}
          setTrips={setTrips}
          stations={mockStations}
          totalPageCount={1}
          page={1}
          setPage={setPage}
          selected={mockStations[0]}
          setSelected={setSelected}
        />
      </MemoryRouter>
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
    // table rows should be 3 because mock trips has lenght of 2 plus table head row
    expect(screen.getAllByRole("row")).toHaveLength(3);
    expect(await screen.findByTestId("active-station")).toBeInTheDocument();
  });
});
