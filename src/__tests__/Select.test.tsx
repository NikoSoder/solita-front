import { render, screen } from "@testing-library/react";
import { mockStations } from "../mocks/mockStations";
import { vi } from "vitest";
import Select from "../components/Select";
import userEvent from "@testing-library/user-event";

describe("Select", () => {
  it("renders Select component", async () => {
    const selectedStation = mockStations[0];
    const setSelected = vi.fn();
    render(
      <Select
        stations={mockStations}
        selected={selectedStation}
        setSelected={setSelected}
      />
    );

    expect(selectedStation.name).toBe("test station");
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const items = await screen.findAllByRole("option");
    expect(items).toHaveLength(4);
    const test = screen.getByText("test station 4");
    expect(test).toBeInTheDocument();

    // TODO: fix data-testid="active-station" TEXT CONTENT should be 'test station 4' after clicking

    /* await user.click(screen.getByRole("option", { name: /test station 4/i })); */
    /* expect(selectedStation.name).toBeInTheDocument(); */
    /*  const activeStation = screen.getByTestId("active-station");
    expect(activeStation).toHaveTextContent("test station 4"); */
  });
});
