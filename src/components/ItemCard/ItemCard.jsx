import { useState, useEffect } from "react";
import "./ItemCard.scss";
import axios from "axios";

export default function ItemCard() {
  const [todoItems, setTodoItems] = useState([]);
  //   const [itemClicked, setItemClicked] = useState(false);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACK_END_URL}/items`
      );

      const items = response.data;

      if (!items.length) {
        console.warn("No items found");
        return;
      }

      setTodoItems(items);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  useEffect(() => {
    fetchItems(todoItems);
  }, []);

  return (
    <>
      {todoItems.map((items) => (
        <article className="card">
          <div key={items.id} className="card__container">
            <h3 className="card__title">{items.name}</h3>
            <div className="card__wrapper">
              <p className="card__info">{items.length}</p>
              <p className="card__info">min</p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
