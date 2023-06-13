import { render } from "@testing-library/react";
import StationList from "../components/StationList";
import { mockStations } from "../mocks/mockStations";
import { vi } from "vitest";

describe("StationList", () => {
  const props = {
    handleStationClick: vi.fn(),
    stations: mockStations,
  };
  it("renders StationList component", () => {
    render(<StationList {...props} />);
  });
});
