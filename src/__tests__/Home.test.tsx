import { render, screen } from "@testing-library/react";
import { mockTrips } from "../mocks/mockTrips";
import { mockStations } from "../mocks/mockStations";
import { vi } from "vitest";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { mockPopularStations } from "../mocks/mockPopularStations";

describe("Home", () => {
  it("renders Home and Navbar component", async () => {
    const setTrips = vi.fn();
    const setPage = vi.fn();
    const setSelected = vi.fn();
    const handlePageLimitChange = vi.fn();

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
          mostPopularStations={mockPopularStations}
          selectedPageLimit={"10"}
          handlePageLimitChange={handlePageLimitChange}
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId("most-popular-stations")).toBeInTheDocument();
    expect(screen.getByTestId("journeys-table")).toBeInTheDocument();
    expect(await screen.findByTestId("active-station")).toBeInTheDocument();
  });
});
