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
      <CompareSection />
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

const CompareSection = () => {
  return (
    <div className="compare__section">
      <h1 className="compare__heading">COMPARE</h1>

      <table>
        <tr>
          <th>The features</th>
          <th>Basic</th>
          <th>Pro</th>
          <th>Business</th>
        </tr>
        <tr>
          <td>Unlimited story posting</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Unlimited photo upload</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Embedding custom content</td>
          <td> </td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Customize metadata</td>
          <td> </td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Advanced metrics</td>
          <td> </td>
          <td> </td>
          <td>X</td>
        </tr>
        <tr>
          <td>Photo downloads</td>
          <td> </td>
          <td> </td>
          <td>X</td>
        </tr>
        <tr>
          <td>Search engine indexing</td>
          <td> </td>
          <td> </td>
          <td>X</td>
        </tr>
        <tr>
          <td>Custom analytics</td>
          <td> </td>
          <td> </td>
          <td>X</td>
        </tr>
      </table>
    </div>
  );
};

export default PricingPage;
