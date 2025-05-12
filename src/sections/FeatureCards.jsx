import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg section-padding">
    <div className="mx-auto grid-3-cols section-padding">
      {abilities.map(({ imgPath, title, desc }) => (
        <div key={title} className="feature-card">
          <img src={imgPath} alt={title} className="feature-card-img" />
          <h3 className="feature-card-title">{title}</h3>
          <p className="feature-card-desc">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;