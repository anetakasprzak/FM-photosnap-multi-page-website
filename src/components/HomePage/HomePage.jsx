import "./HomePage.css";

import { infoComponentsData } from "../../Data";
import { storiesData } from "../../Data";
import { featuresData } from "../../Data";
import { links } from "../../Data";
import Logo from "../Logo";
import { socialLinksData } from "../../Data";

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

const NavBar = () => {
  return (
    <div className="navbar">
      <Logo />
      <ul className="nav__links-box">
        {links.slice(1).map((obj) => {
          return (
            <li className="nav__link" key={obj.id}>
              {obj.linkName}
            </li>
          );
        })}
      </ul>
      <button className="nav__btn">
        Get an invite{" "}
        <svg
          className="nav__burger"
          width="20"
          height="6"
          viewBox="0 0 20 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="1" fill="black" />
          <rect y="5" width="20" height="1" fill="black" />
        </svg>
      </button>
    </div>
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

const StoryComponent = ({ obj }) => {
  const { title, author, image } = obj;

  return (
    <div className="story__component">
      <picture className="story__img">
        <source srcSet={image.mobile} media="(max-width: 23.5em)" />
        {/* <source srcSet={image.desktop} media="(max-width: 90em)" /> */}
        <source srcSet={image.desktop} media="(max-width: 90em)" />
        <img src={image.desktop} alt="image" />
      </picture>

      <div className="story__text-box">
        <h4 className="story__title">{title}</h4>
        <p className="story__author">by {author}</p>
        <span className="story--line"></span>
        <div className="link--box">
          <p className="story__read">Read story</p>
          <svg
            width="42"
            height="14"
            viewBox="0 0 42 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 7H41.864" stroke="white" />
            <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
          </svg>
        </div>
      </div>
    </div>
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

const FooterSection = ({ data, navLinks }) => {
  return (
    <section className="footer__section">
      <Logo />
      <ul className="social__links--box">
        {data.map((link) => {
          return (
            <li className="social__link" key={link.id}>
              <img src={link.icon} alt="link icon" />
            </li>
          );
        })}
      </ul>

      <ul className="footer__nav-links--box">
        {navLinks.map((link) => {
          return (
            <li className="nav__link" key={link.id}>
              {link.linkName}
            </li>
          );
        })}
      </ul>

      <div className="link__box">
        <p className="component__link">Get an invite</p>
        <div className="footer__link-arrow">
          <svg
            width="42"
            height="14"
            viewBox="0 0 42 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 7H41.864" stroke="white" />
            <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
          </svg>
        </div>
      </div>

      <p className="copyright">Copyright 2019. All Rights Reserved</p>
    </section>
  );
};

export default HomePage;
