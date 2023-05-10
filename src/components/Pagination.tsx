import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
/* import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid"; */
// TODO: replace svgs to these icons

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
        className="group border border-sky-600 p-1 hover:text-white enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500"
        >
          <path
            fillRule="evenodd"
            d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        data-testid="previous-button"
        onClick={() => goToPage(page - 1)}
        disabled={page === 0 ? true : false}
        className="group border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <ChevronLeftIcon className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500" />
      </button>
      {/* page count */}
      <div className="w-52 border border-sky-600 px-4 py-1 text-center dark:border-sky-500 dark:text-slate-200">
        <p>
          {page + 1} of {totalPageCount + 1}
        </p>
      </div>

      <button
        onClick={() => goToPage(page + 1)}
        data-testid="next-button"
        disabled={page === totalPageCount ? true : false}
        className="group border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <ChevronRightIcon className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500" />
      </button>
      <button
        onClick={() => goToPage(totalPageCount)}
        data-testid="last-button"
        disabled={page === totalPageCount ? true : false}
        className="group border border-sky-600 p-1 hover:text-white enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500"
        >
          <path
            fillRule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

export default Pagination;
