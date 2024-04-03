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
      </div>
    </div>
  );
};

export default StoriesPage;
