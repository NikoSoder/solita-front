import { render, screen } from "@testing-library/react";
import { mockTrips } from "../mocks/mockTrips";
import { mockStations } from "../mocks/mockStations";
import { vi } from "vitest";
import Home from "../components/Home";

describe("Home", () => {
  it("renders Home component", async () => {
    const setTrips = vi.fn();
    const setStations = vi.fn();
    render(
      <Home
        trips={mockTrips}
        setTrips={setTrips}
        stations={mockStations}
        setStations={setStations}
        totalPageCount={1}
      />
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
    // table rows should be 3 because mock trips has lenght of 2 and then you plus table head row
    expect(screen.getAllByRole("row")).toHaveLength(3);
    // first [0] station objects Name should show in Station component in h2 tag
    /*  expect(
      await screen.findByRole("heading", { name: /test station/i })
    ).toBeInTheDocument(); */
  });
});
