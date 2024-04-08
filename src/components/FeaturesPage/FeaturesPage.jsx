import { featuresData } from "../../Data";
import FeatureComponent from "../FeatureComponent/FeatureComponent";
import "./FeaturesPage.css";

const FeaturesPage = () => {
  return (
    <>
      <FeaturesSection data={featuresData} />
    </>
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
