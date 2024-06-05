import { Link } from "react-router-dom";
import hostImg from "@/assets/hero-host.jpg";
import "./favoriteItem.css";

const FavoriteItem = ({ housing }) => {
  const bathroomPlural = housing.bathrooms === 1 ? "baño" : "baños";
  const bedroomPlural = housing.bedrooms === 1 ? "persona" : "personas";

  return (
    <li className="housing__profile flex">
      <div className="housing__img">
        <img
          src={hostImg}
          alt="Imagen de sitio"
          className="housing__img-content"
        />
      </div>
      <div className="housing__info flex font-base">
        <h2 className="font-1 fw-3">{housing.name}</h2>
        <span className="housing__location text-gray">
          {housing.address.state}, {housing.address.country}
        </span>
        <div className="housing__cta flex">
          <button className="housing__btn grid">
            <i className="fa-regular fa-heart text-accent font-lg" />
          </button>
          <button className="housing__btn bg-primary text-white fw-4">
            <Link to={`/housedetails/${housing._id}`}>Más información</Link>
          </button>
        </div>
      </div>
      <div className="housing__features flex">
        <ul className="housing__perks grid font-base text-secondary">
          <li className="housing_perk flex">
            {typeIcon}
            <span>{housing.type}</span>
          </li>
          <li className="housing_perk flex">
            {placeIcon}
            <span className="capitalize">{housing.place}</span>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-shower" />
            {housing.bathrooms} {bathroomPlural}
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-bed" />
            <span>
              {housing.bedrooms} {bedroomPlural}
            </span>
          </li>
        </ul>
        <div className="housing__pricing font-sm">
          <span className="fw-3">Calificación:</span>
          <p>
            {housing.rating} <span className="font-lg">/ 5.0</span>
          </p>
          <p>
            <span className="font-2">${housing.price} </span>
            <span className="text-gray">por noche</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default FavoriteItem;
