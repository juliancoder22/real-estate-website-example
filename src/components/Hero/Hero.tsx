import "./Hero.scss";
import heroSvg from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Find Your <br /> Dream Home
        </h1>
        <p className="hero__text">
          Explore our curated selection of exquisite <br /> properties
          meticulously tailored to your <br /> unique dream home vision
        </p>
        <button className="hero__button">sign up</button>
      </div>
      <img src={heroSvg} alt="" />
    </div>
  );
};

export default Hero;
