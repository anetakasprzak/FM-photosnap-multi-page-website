import "./PricingPage.css";
import { links, pricingCardData, socialLinksData } from "../../Data";
import NavBar from "../NavBar/NavBar";
import { ctaImg } from "../../Data";

import CtaComponent from "../CtaComponent/CtaComponent";
import FooterSection from "../Footer/Footer";
import { useState } from "react";

const PricingPage = () => {
  return (
    <>
      <NavBar />
      <CardsSection data={pricingCardData} />
      <CtaComponent data={ctaImg} />
      <FooterSection data={socialLinksData} navLinks={links} />
    </>
  );
};

const CardsSection = ({ data }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="pricing__box">
      <div className="toggle__box">
        <span
          className={`text ${
            isMonthly ? "toggle__text--black" : "toggle__text--grey"
          } `}
        >
          Monthly
        </span>
        <label className="switch">
          <input type="checkbox" onChange={() => setIsMonthly(!isMonthly)} />
          <span className="slider round"></span>
        </label>
        <span
          className={`text ${
            !isMonthly ? "toggle__text--black" : "toggle__text--grey"
          } `}
        >
          Yearly
        </span>
      </div>

      <section className="cards__section">
        {data.map((obj) => {
          return <PricingCard isMonthly={isMonthly} obj={obj} key={obj.id} />;
        })}
      </section>
    </div>
  );
};

const PricingCard = ({ obj, isMonthly }) => {
  const { title, text, priceYear, priceMonth, id } = obj;
  return (
    <div className={`pricing__card pricing__card--${id}`}>
      <div className="card__text--box">
        <h4 className="card__heading">{title}</h4>
        <p className="text card__text">{text}</p>
      </div>
      <div className="card__price--box">
        {isMonthly && (
          <>
            <div className="card__price">{priceMonth}</div>
            <span className="text card__text">per month</span>{" "}
          </>
        )}

        {!isMonthly && (
          <>
            <div className="card__price">{priceYear}</div>
            <span className="text card__text">per year</span>
          </>
        )}
      </div>
      <button className={`card__btn card__btn--${id}`}>Pick plan</button>
    </div>
  );
};

export default PricingPage;
