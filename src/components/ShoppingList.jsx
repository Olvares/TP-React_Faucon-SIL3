import "./../styles/ShoppingList.css";
import { plantList } from "./../datas/plantList";
import PlantItem from "./PlantItem";

function ShoppingList() {
    return (
        <div className="lmj-shopping-list">
            <ul className="lmj-plant-list">
                {plantList.map(({ id, name, price, cover, water, light }) => (
                    <PlantItem
                        id={id}
                        name={name}
                        price={price}
                        cover={cover}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
