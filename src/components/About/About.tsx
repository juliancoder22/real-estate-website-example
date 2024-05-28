import aboutSvg from "../../assets/about.svg";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <img src={aboutSvg} alt="" />
      <div className="about__content">
        <h2 className="about__title">
          We Help You To Find <br /> Your Dream Home
        </h2>
        <p className="about__text">
          From cozy cottages to luxurious estates, our <br /> dedicated team
          guides you through every step of the <br />
          journey, ensuring your dream home becomes a reality
        </p>
        <div className="about__stats">
          <div className="about__stat">
            <h3>5k+</h3>
            <span>Houses Available</span>
          </div>

          <div className="about__stat">
            <h3>2k+</h3>
            <span>Houses Sold</span>
          </div>

          <div className="about__stat">
            <h3>2k+</h3>
            <span>Trusted Agents</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
