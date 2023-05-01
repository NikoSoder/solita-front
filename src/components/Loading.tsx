export const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center gap-3 bg-slate-50 dark:bg-gray-900">
      <p className="text-xl dark:text-blue-100">Loading please wait...</p>
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-t-blue-500"></div>
    </div>
  );
};
