const SkeletonLoading = () => {
  return (
    <div className="h-[231px] max-w-sm grow rounded-md bg-white p-6 shadow-md dark:border dark:border-slate-500 dark:bg-slate-800 sm:h-[288px] lg:h-[231px]">
      <div className="flex grow animate-pulse">
        <div className="flex-1 space-y-10 py-1">
          <div className="h-3 w-1/2 rounded bg-slate-300 dark:bg-slate-600"></div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-400"></div>
              <div className="h-2 w-1/3 rounded bg-slate-300 dark:bg-slate-700"></div>
              <div className="h-2 w-1/4 rounded bg-slate-300 dark:bg-slate-700"></div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-400"></div>
              <div className="h-2 w-1/3 rounded bg-slate-300 dark:bg-slate-700"></div>
              <div className="h-2 w-1/4 rounded bg-slate-300 dark:bg-slate-700"></div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-400"></div>
              <div className="h-2 w-1/3 rounded bg-slate-300 dark:bg-slate-700"></div>
              <div className="h-2 w-1/4 rounded bg-slate-300 dark:bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
