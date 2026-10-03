const LinkScroll = ({
  title,
  label,
  targetId,
  styling = "",
  isActive = false,
  onClick,
}) => {
  const displayLabel = label || title;
  const target = targetId || title?.toLowerCase() || "";

  return (
    <a
      href={`#${target}`}
      onClick={onClick}
      className={`${styling} flex items-center py-2 px-3 text-sm lg:text-base font-medium transition-all duration-200 font-dmsans rounded-full capitalize ${
        isActive
          ? "bg-blue/10 text-blue dark:bg-darkBlue/40 dark:text-blue font-semibold"
          : "text-greys hover:text-blue dark:text-dark600 dark:hover:text-primary100"
      }`}
    >
      {displayLabel}
    </a>
  );
};

export default LinkScroll;
