import { render } from "@testing-library/react";
import { vi } from "vitest";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
  const props = {
    goToPage: vi.fn(),
    page: 0,
    totalPageCount: 100,
    loading: false,
  };
  it("renders the component with the correct page number", () => {
    const { getByText } = render(<Pagination {...props} />);
    expect(getByText("1 of 101")).toBeInTheDocument();
  });
  it("disables the previous and first page buttons when on the first page", () => {
    const { getByTestId } = render(<Pagination {...props} />);
    const previousButton = getByTestId("previous-button");
    const firstPageButton = getByTestId("first-button");
    expect(previousButton).toBeDisabled();
    expect(firstPageButton).toBeDisabled();
  });

  it("disables the next and last page buttons when on the last page", () => {
    const { getByTestId } = render(
      <Pagination {...props} page={props.totalPageCount} />
    );
    const nextButton = getByTestId("next-button");
    const lastPageButton = getByTestId("last-button");
    expect(nextButton).toBeDisabled();
    expect(lastPageButton).toBeDisabled();
  });

  /* it("page count should go up", async () => {
    const user = userEvent.setup();
    render(<Pagination {...props} />);
    const nextButton = screen.getByTestId("next-button");
    expect(screen.getByText("1 of 101")).toBeInTheDocument();

    await user.click(nextButton);
    expect(await screen.findByText("2 of 101")).toBeInTheDocument();
    
  }); */

  /* TODO: when pressing next page button text should change from "1 of 354" to "2 of 354" */
  /* same for previous page button */
});
