import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  it("renders Table component", async () => {
    /* TODO: move mocks to own folder */
    const mockTrips = [
      {
        id: "1",
        departure: "test 1 departure",
        return: "test 1 return",
        departureStationId: "10",
        departureStationName: "test departune name",
        returnStationId: "34",
        returnStationName: "test return name",
        coveredDistance: 1405,
        duration: 676,
      },
      {
        id: "2",
        departure: "test 2 departure",
        return: "test 2 return",
        departureStationId: "33",
        departureStationName: "test departune name",
        returnStationId: "65",
        returnStationName: "test return name",
        coveredDistance: 403,
        duration: 344,
      },
    ];

    render(<Table trips={mockTrips} />);
    /* renders kilometers correctly */
    expect(await screen.findByText("1.41")).toBeInTheDocument();
    expect(await screen.findByText("0.4")).toBeInTheDocument();
    /* renders minutes correctly */
    expect(await screen.findByText("11")).toBeInTheDocument();
    expect(await screen.findByText("6")).toBeInTheDocument();
  });
});
