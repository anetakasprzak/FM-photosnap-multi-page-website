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
    <picture className="features__hero">
      <source srcSet={image.mobile} media="(max-width: 37.5rem)" />
      <source srcSet={image.tablet} media="(max-width: 76.5rem)" />
      <source srcSet={image.desktop} media="(max-width: 144rem)" />
      <img src={image.desktop} alt="image" />
    </picture>
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
