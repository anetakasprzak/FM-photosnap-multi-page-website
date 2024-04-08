import "./FeaturesPage.css";
import { featuresData, heroFeatures } from "../../Data";
import FeatureComponent from "../FeatureComponent/FeatureComponent";
import NavBar from "../NavBar/NavBar";

const FeaturesPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection data={heroFeatures} />
      <FeaturesSection data={featuresData} />
    </>
  );
};

const HeroSection = ({ data }) => {
  const { image } = data;

  return (
    <div className="features__hero-section">
      <div className="text__box">
        <h1 className="features__heading">Features</h1>
        <p className="features__text">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
      <picture className="features__hero--img">
        <source srcSet={image.mobile} media="(max-width: 23.4em)" />
        <source srcSet={image.tablet} media="(max-width: 47.8em)" />
        <source srcSet={image.desktop} media="(max-width: 90em)" />
        <img src={image.desktop} alt="image" />
      </picture>
    </div>
  );
};

const FeaturesSection = ({ data }) => {
  return (
    <section className="features__section--box">
      {data.map((obj) => {
        return <FeatureComponent obj={obj} key={obj.id} />;
      })}
    </section>
  );
};

export default FeaturesPage;
