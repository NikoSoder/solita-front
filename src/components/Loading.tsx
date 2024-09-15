export const Loading = () => {
  return (
    <div className="flex items-center justify-center text-slate-300">
      <div className="me-2 h-4 w-4 animate-spinY rounded-full"></div>
      Loading...
    </div>
  );
};

export const LoadingSmall = () => {
  return (
    <div className="flex items-center justify-center text-slate-300">
      <div className="me-2 h-4 w-4 animate-spinY rounded-full"></div>
    </div>
  );
};

export const LoadingSkeleton = ({ height }: { height: string }) => {
  return (
    <div
      className="mx-auto w-full rounded-md"
      style={{ height: `${height}px` }}
    >
      <div className="h-full animate-pulse rounded-lg bg-slate-100 p-4 dark:bg-slate-700"></div>
    </div>
  );
};
