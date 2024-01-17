const Button = ({ classes, handleClick = () => null, children }) => {
  const defaultBtnStyles =
    "px-5 py-2.5 text-white hover:bg-[#D64230] hover:text-[#F5F5F5] transition duration-500 ease-in-out";

  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`${defaultBtnStyles} ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
