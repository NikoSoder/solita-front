import { render, screen } from "@testing-library/react";
import Table from "./Table";
import { mockTrips } from "../mocks/mockTrips";
import { convertSecondsToMinutes } from "../utils/secondsToMinutes";

describe("Table", () => {
  it("renders Table component", async () => {
    render(<Table trips={mockTrips} />);
    expect(await screen.findAllByRole("row")).toHaveLength(3);
    /* renders kilometers correctly */
    expect(await screen.findByText("0.01")).toBeInTheDocument();
    expect(await screen.findByText("0.4")).toBeInTheDocument();
    /* renders minutes correctly */
    expect(await screen.findByText("00:11")).toBeInTheDocument();
    expect(await screen.findByText("05:44")).toBeInTheDocument();

    /* convertSecondsToMinutes() works correctly */
    expect(convertSecondsToMinutes(10)).toBe("00:10");
    expect(convertSecondsToMinutes(100)).toBe("01:40");
    expect(convertSecondsToMinutes(1000)).toBe("16:40");
    expect(convertSecondsToMinutes(10000)).toBe("166:40");
  });
});
