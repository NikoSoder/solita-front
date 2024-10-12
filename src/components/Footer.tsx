const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-5 px-5 py-3 text-sm text-slate-500 dark:text-slate-400">
      <p className="italic text-slate-600 dark:text-slate-300">
        Designed and built by Niko Söder.
      </p>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/NikoSoder/solita-front" target="_blank">
          Github
        </a>
        <a href="mailto:soder.n@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
