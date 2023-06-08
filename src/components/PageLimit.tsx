interface ChildPropsPageLimit {
  handlePageLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedPageLimit: string;
  loading: boolean;
}

const PageLimit = ({
  handlePageLimitChange,
  selectedPageLimit,
  loading,
}: ChildPropsPageLimit) => {
  return (
    <div className="sm:absolute sm:right-6 sm:top-12">
      <select
        disabled={loading}
        value={selectedPageLimit}
        onChange={(e) => handlePageLimitChange(e)}
        className="rounded border border-slate-300 bg-white p-2 text-gray-900 outline-none enabled:hover:border-sky-600 dark:border-slate-500 dark:bg-slate-700 dark:text-white dark:enabled:hover:border-slate-400"
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default PageLimit;
