import "./PricingPage.css";
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
  const { title, text, priceYear, priceMonth, id } = obj;
  return (
    <div className={`pricing__card pricing__card--${id}`}>
      <div className="card__text--box">
        <h4 className="card__heading">{title}</h4>
        <p className="text card__text">{text}</p>
      </div>
      <div className="card__price--box">
        <div className="card__price">{priceMonth}</div>
        <span className="text card__text">per month</span>
      </div>
      {/* <div className="">{priceYear}</div> */}
      <button className={`card__btn card__btn--${id}`}>Pick plan</button>
    </div>
  );
};

export default PricingPage;
