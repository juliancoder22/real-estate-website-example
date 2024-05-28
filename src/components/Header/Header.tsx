import searchSvg from "../../assets/search.svg";
import userSvg from "../../assets/user.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <span className="header__branding">Real Estate</span>
      <div className="header__nav">
        <a href="#">Home</a>
        <a href="#">Service</a>
        <a href="#">Agents</a>
        <a href="#">Contact</a>
      </div>
      <div className="header__buttons">
        <img src={searchSvg} />
        <img src={userSvg} />
        <button className="header__button">sign up</button>
      </div>
    </div>
  );
};

export default Header;
