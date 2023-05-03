import { render, screen } from "@testing-library/react";
import { mockTrips } from "../mocks/mockTrips";
import { mockStations } from "../mocks/mockStations";
import { vi } from "vitest";
import Home from "./Home";

describe("Home", () => {
  it("renders Home component", () => {
    const setTrips = vi.fn();
    const setStations = vi.fn();
    render(
      <Home
        trips={mockTrips}
        setTrips={setTrips}
        stations={mockStations}
        setStations={setStations}
      />
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
    // table rows should be 3 because mock trips has lenght of 2 and then you plus table head row
    expect(screen.getAllByRole("row")).toHaveLength(3);
    // first [0] station objects Name should show in Station component in h2 tag
    expect(
      screen.getByRole("heading", { name: /test station/i })
    ).toBeInTheDocument();
  });
});
