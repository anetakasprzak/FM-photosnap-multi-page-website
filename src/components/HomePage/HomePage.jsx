import "./HomePage.css";

import { infoComponentsData } from "../../Data";
import { storiesData } from "../../Data";
import { featuresData } from "../../Data";
import { links } from "../../Data";
import { socialLinksData } from "../../Data";
import NavBar from "../NavBar/NavBar";
import FooterSection from "../Footer/Footer";
import StoryComponent from "../StoryComponent/StoryComponent";

const HomePage = () => {
  return (
    <>
      <NavBar data={links} />
      <InfoSection data={infoComponentsData} />
      <StoriesSection data={storiesData} />
      <FeaturesSection data={featuresData} />
      <FooterSection data={socialLinksData} navLinks={links} />
    </>
  );
};

const InfoSection = ({ data }) => {
  return (
    <>
      <section className="info__section">
        {data.map((obj) => {
          return <InfoComponent obj={obj} key={obj.id} />;
        })}
      </section>
    </>
  );
};

const InfoComponent = ({ obj }) => {
  const { id, title, text, image, link } = obj;
  return (
    <div className={`info__component info__component--${id}`}>
      <div className="info__text-box">
        <h2 className="component__heading">{title}</h2>
        <p className="component__text">{text}</p>
        <div className="link__box">
          <p className="component__link">{link.text}</p>
          <div className={`link-arrow--${id}`}>
            <svg
              width="42"
              height="14"
              viewBox="0 0 42 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 7H41.864" stroke="red" />
              <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="red" />
            </svg>
          </div>
        </div>
      </div>

      <picture className="info__img">
        <source srcSet={image.mobile} media="(max-width: 37.5rem)" />
        <source srcSet={image.tablet} media="(max-width: 76.5rem)" />
        <source srcSet={image.desktop} media="(max-width: 144rem)" />
        <img src={image.desktop} alt="image" />
      </picture>
    </div>
  );
};

const StoriesSection = ({ data }) => {
  return (
    <section className="stories__section">
      {data.slice(0, 4).map((obj) => {
        return <StoryComponent obj={obj} key={obj.id} />;
      })}
    </section>
  );
};

const FeaturesSection = ({ data }) => {
  return (
    <section className="features__section">
      {data.slice(0, 3).map((obj) => {
        return <FeatureComponent obj={obj} key={obj.id} />;
      })}
    </section>
  );
};

const FeatureComponent = ({ obj }) => {
  const { title, text, image } = obj;
  return (
    <div className="feature__component">
      <div className="feature__component__image-wrapper">
        <img src={image} alt="feature icon" className="feature__img" />
      </div>

      <h4 className="feature__title">{title}</h4>
      <p className="feature__text">{text}</p>
    </div>
  );
};

export default HomePage;
