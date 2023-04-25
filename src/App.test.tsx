import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders Hello World", () => {
    render(<App />);
    const element = screen.getByText("Hello World");
    expect(element).toBeDefined();
  });
});
