import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const Pagination = () => {
  return (
    <>
      <div className="group border border-sky-600 p-1 hover:bg-sky-600 hover:text-white dark:border-sky-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 cursor-pointer text-sky-600 group-hover:text-white dark:text-sky-600"
        >
          <path
            fillRule="evenodd"
            d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="group border border-sky-600 p-1 hover:bg-sky-600 dark:border-sky-600">
        <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-sky-600 group-hover:text-white dark:text-sky-600" />
      </div>
      <div className="border border-sky-600 px-4 py-1 dark:border-sky-600 dark:text-slate-200">
        1 of 354
      </div>
      <div className="group border border-sky-600 p-1 hover:bg-sky-600 dark:border-sky-600">
        <ChevronRightIcon className="h-6 w-6 cursor-pointer text-sky-600 group-hover:text-white dark:text-sky-600" />
      </div>
      <div className="group border border-sky-600 p-1 hover:bg-sky-600 dark:border-sky-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 cursor-pointer text-sky-600 group-hover:text-white dark:text-sky-600"
        >
          <path
            fillRule="evenodd"
            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};

export default Pagination;
