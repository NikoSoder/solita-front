import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

interface ChildPropsPagination {
  goToPage: (pageNumber: number) => void;
  page: number;
  totalPageCount: number;
}

const Pagination = ({
  goToPage,
  page,
  totalPageCount,
}: ChildPropsPagination) => {
  return (
    <>
      <button
        data-testid="first-button"
        onClick={() => goToPage(0)}
        disabled={page === 0 ? true : false}
        className="group border border-sky-600 p-1 hover:text-white enabled:cursor-pointer
       enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500
       dark:disabled:border-slate-500"
      >
        <ChevronDoubleLeftIcon
          className="h-6 w-6 text-sky-600 group-hover:text-white
       group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500"
        />
      </button>

      <button
        data-testid="previous-button"
        onClick={() => goToPage(page - 1)}
        disabled={page === 0 ? true : false}
        className="group border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600
       disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <ChevronLeftIcon
          className="h-6 w-6 text-sky-600 group-hover:text-white
       group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500"
        />
      </button>

      {/* page count */}
      <div
        className="w-52 border border-sky-600 px-4 py-1 text-center dark:border-sky-500
     dark:text-slate-200"
      >
        <p>
          {page + 1} of {totalPageCount + 1}
        </p>
      </div>

      <button
        onClick={() => goToPage(page + 1)}
        data-testid="next-button"
        disabled={page === totalPageCount ? true : false}
        className="group border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600
       disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <ChevronRightIcon
          className="h-6 w-6 text-sky-600 group-hover:text-white
       group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500"
        />
      </button>

      <button
        onClick={() => goToPage(totalPageCount)}
        data-testid="last-button"
        disabled={page === totalPageCount ? true : false}
        className="group border border-sky-600 p-1 hover:text-white enabled:cursor-pointer
       enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500
       dark:disabled:border-slate-500"
      >
        <ChevronDoubleRightIcon
          className="h-6 w-6 text-sky-600 group-hover:text-white
       group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500"
        />
      </button>
    </>
  );
};

export default Pagination;
