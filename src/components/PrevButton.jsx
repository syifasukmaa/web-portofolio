function PrevButton(props) {
  const { icon, title } = props;
  return (
    <>
      <div className="flex items-center">
        <span>{icon}</span>
        <a
          href={title}
          target="_blank"
          className=" hover:text-blue text-sm inline-block ml-2 underline 2xl:text-lg dark:text-dark700 dark:hover:text-light300"
          rel="noreferrer"
        >
          Live Preview
        </a>
      </div>
    </>
  );
}

export default PrevButton;
