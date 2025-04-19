import "./Header.css";
import silent from "./../assets/silent.png";
import battery from "./../assets/battery.png";
import fiveG from "./../assets/5g.png";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState(
    `${new Date().getHours()}:${new Date().getMinutes()}`
  );

  useEffect(() => {
    const inteval = setInterval(() => {
      setTime(nowTime());
    }, 60000);

    return () => clearInterval(inteval);
  }, []);

  const nowTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, "0");
    return `${hour}:${minute}`;
  };

  return (
    <div className="Header">
      <div className="left_div">
        {time}
        <img src={silent} />
      </div>
      <div className="center_div"></div>
      <div className="right_div">
        <img src={fiveG} />
        <img src={battery} />
      </div>
    </div>
  );
};

export default Header;
