import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage";

describe("Landing page", () => {
  it("renders LandingPage component", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  });
});
