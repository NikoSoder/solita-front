import { render } from "@testing-library/react";
import { vi } from "vitest";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const props = {
    onNextPage: vi.fn(),
    onPreviousPage: vi.fn(),
    onGoFirstPage: vi.fn(),
    onGoLastPage: vi.fn(),
    page: 1,
  };
  it("renders the component with the correct page number", () => {
    const { getByText } = render(<Pagination {...props} />);
    expect(getByText("1 of 354")).toBeInTheDocument();
  });
  it("disables the previous and first page buttons when on the first page", () => {
    const { getByTestId } = render(<Pagination {...props} />);
    const previousButton = getByTestId("previous-button");
    const firstPageButton = getByTestId("first-button");
    expect(previousButton).toBeDisabled();
    expect(firstPageButton).toBeDisabled();
  });

  it("disables the next and last page buttons when on the last page", () => {
    const { getByTestId } = render(<Pagination {...props} page={354} />);
    const nextButton = getByTestId("next-button");
    const lastPageButton = getByTestId("last-button");
    expect(nextButton).toBeDisabled();
    expect(lastPageButton).toBeDisabled();
  });

  /* TODO: when pressing next page button text should change from "1 of 354" to "2 of 354" */
  /* same for previous page button */
});