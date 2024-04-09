import { pricingCardData } from "../../Data";

const PricingPage = () => {
  return <CardsSection data={pricingCardData} />;
};

const CardsSection = ({ data }) => {
  return (
    <section className="cards__section">
      {data.map((obj) => {
        return <PricingCard obj={obj} key={obj.id} />;
      })}
    </section>
  );
};

const PricingCard = ({ obj }) => {
  const { title, text, priceYear, priceMonth } = obj;
  return (
    <div className="pricing__card">
      <h4 className="card__heading">{title}</h4>
      <p>{text}</p>
      <div className="">{priceMonth}</div>
      {/* <div className="">{priceYear}</div> */}
    </div>
  );
};

export default PricingPage;
