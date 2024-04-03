import NavBar from "../NavBar/NavBar";
import { heroStories } from "../../Data";
import "./StoriesPage.css";

const StoriesPage = () => {
  return (
    <>
      <NavBar />
      <StoriesHero data={heroStories} />
    </>
  );
};

const StoriesHero = ({ data }) => {
  const { image } = data;
  return (
    <div className="hero__box">
      <picture className="hero__img">
        <source srcSet={image.mobile} media="(max-width: 37.5rem)" />
        <source srcSet={image.tablet} media="(max-width: 76.5rem)" />
        <source srcSet={image.desktop} media="(max-width: 144rem)" />
        <img src={image.desktop} alt="hero" />
      </picture>

      <div className="hero__text-box">
        <h4 className="hero__heading-small">
          Last month&apos;s featured story
        </h4>
        <h1 className="hero__heading-main">Hazy full moon of appalachia</h1>
        <div className="date__box">
          <p className="hero__text">
            March 2nd 202<strong> by John Appleseed</strong>
          </p>
        </div>
        <p className="hero__text">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains&quot; mountains
          especially in eastern Kentucky and West Virginia, and while the ridges
          are not high, the terrain is extremely rugged.
        </p>
        <div className="link--box">
          <p className="hero__read">Read story</p>
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

export default StoriesPage;