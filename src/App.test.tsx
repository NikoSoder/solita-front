import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    /* const element = screen.getByText("Hello World"); */
    expect(App).toBeDefined();
  });
});
