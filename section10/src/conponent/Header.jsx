import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘의 📅</h3>
      <h1>{new Date().toLocaleString()}</h1>
    </div>
  );
};

// const memoizedHeader = memo(Header);

// export default memoizedHeader;

export default memo(Header);
