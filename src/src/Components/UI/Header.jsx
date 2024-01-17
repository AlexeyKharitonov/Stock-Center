import { useEffect, useState } from "react";
import { getFormatTime } from "../../Utils/getFormatTime";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="flex justify-between h-20 md:h-32 px-4 md:px-24 items-center mb-10 md:mb-2">
      <span className="font-normal text-custom-black text-lg md:text-xl">
        Stock Center
      </span>
      <span className="font-extrabold text-2xl md:text-3xl text-custom-orange">
        Items in Stock
      </span>
      <span className="hidden md:inline-block">
        The time now is {getFormatTime(now)}
      </span>
      {/* hamburger */}
      <div className="md:hidden z-10 cursor-pointer">
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
