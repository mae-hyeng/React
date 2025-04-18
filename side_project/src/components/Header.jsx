import "./Header.css";
import silent from "./../assets/silent.png";
import battery from "./../assets/battery.png";
import fiveG from "./../assets/5g.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="left_div">
        {`${new Date().getHours()}:${new Date().getMinutes()}`}
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
