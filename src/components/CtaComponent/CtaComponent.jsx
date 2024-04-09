import "./CtaComponent.css";

const CtaComponent = ({ data }) => {
  const { image } = data;

  return (
    <picture className="">
      <source srcSet={image.mobile} media="(max-width: 23.4em)" />
      <source srcSet={image.tablet} media="(max-width: 47.8em)" />
      <source srcSet={image.desktop} media="(max-width: 90em)" />
      <img src={image.desktop} alt="image" />
    </picture>
  );
};

export default CtaComponent;
