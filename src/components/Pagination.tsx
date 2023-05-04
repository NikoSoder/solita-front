import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface ChildPropsPagination {
  onNextPage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPreviousPage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onGoFirstPage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onGoLastPage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  page: number;
}

const Pagination = ({
  onNextPage,
  onPreviousPage,
  onGoFirstPage,
  onGoLastPage,
  page,
}: ChildPropsPagination) => {
  return (
    <>
      <button
        onClick={onGoFirstPage}
        disabled={page === 1 ? true : false}
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
        onClick={onPreviousPage}
        disabled={page === 1 ? true : false}
        className="group border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <ChevronLeftIcon className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500" />
      </button>
      {/* page count */}
      <div className="w-32 border border-sky-600 px-4 py-1 text-center dark:border-sky-500 dark:text-slate-200">
        {page} of 354
      </div>

      <button
        onClick={onNextPage}
        disabled={page === 354 ? true : false}
        className="group border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
      >
        <ChevronRightIcon className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500" />
      </button>
      <button
        onClick={onGoLastPage}
        disabled={page === 354 ? true : false}
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
