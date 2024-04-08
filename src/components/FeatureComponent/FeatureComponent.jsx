import "./FeatureComponent.css";

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

export default FeatureComponent;
