export const Code = ({style}) => {
  return (
    <>
      <svg
      className={style}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path fill="none" d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
        <path fill="none" d="M7 20h4" />
        <path fill="none" d="M9 16v4" />
        <path fill="none" d="M20 21l2 -2l-2 -2" />
        <path fill="none" d="M17 17l-2 2l2 2" />
      </svg>
    </>
  );
};
