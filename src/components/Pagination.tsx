import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Dispatch } from "react";

interface ChildPropsPagination {
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  isPlaceholderData: boolean;
}

const Pagination = ({
  page,
  setPage,
  isPlaceholderData,
}: ChildPropsPagination) => {
  return (
    <div className="flex gap-1">
      <button
        className="group rounded border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 0}
      >
        <ChevronLeftIcon className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500" />
      </button>

      {/* page count */}
      <div className="w-52 rounded border border-sky-600 px-4 py-1 text-center dark:border-sky-500 dark:text-slate-200">
        <p>Page: {page + 1}</p>
      </div>

      <button
        className="group rounded border border-sky-600 p-1 enabled:cursor-pointer enabled:hover:bg-sky-600 disabled:border-slate-300 dark:border-sky-500 dark:disabled:border-slate-500"
        onClick={() => {
          if (!isPlaceholderData) {
            setPage((old) => old + 1);
          }
        }}
        // disable the Next Page button until we know a next page is available
        disabled={isPlaceholderData}
      >
        <ChevronRightIcon className="h-6 w-6 text-sky-600 group-hover:text-white group-disabled:text-slate-300 dark:text-sky-500 dark:group-disabled:text-slate-500" />
      </button>
    </div>
  );
};

export default Pagination;
