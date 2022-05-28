import "./../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem({ id, name, price, cover, water, light }) {
    return (
        <li key={id} className="lmj-plant-item">
            <span className="lmj-plant-item-price">{price}€</span>
            <img src={cover} alt={name} className="lmj-plant-item-cover" />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;
