import { useEffect, useState, type ChangeEvent } from "react"; 
import { useContext } from "react"; 
import { AppContext } from "../context"; 
import "./card.css"; 
 
type Item = { 
  image: string; 
  title: string; 
  price: number; 
  capacity?: number; 
  withCapacity: boolean; 
}; 
 
function ItemCard({ image, title, price, capacity, withCapacity }: Item) { 
  const { items, setItems } = useContext(AppContext); 
  const existingItem = items.find((i) => i.item_name === title); 
  const [quantity, setQuantity] = useState(existingItem?.item_quantity ?? 0); 
 
  useEffect(() => { 
    const updatedItem = items.find((i) => i.item_name === title); 
    if (updatedItem) { 
      setQuantity(updatedItem.item_quantity); 
    } 
  }, [items, title]); 
 
  const handleIncrement = () => { 
    const newQuantity = 
      quantity !== capacity || !withCapacity ? quantity + 1 : capacity; 
    setQuantity(newQuantity); 
 
    setItems((prevItems) => { 
      const existingIndex = prevItems.findIndex((i) => i.item_name === title); 
 
      if (existingIndex >= 0) { 
        const updated = [...prevItems]; 
        updated[existingIndex] = { 
          ...updated[existingIndex], 
          item_quantity: newQuantity, 
        }; 
        return updated; 
      } else { 
        return [ 
          ...prevItems, 
          { item_name: title, item_cost: price, item_quantity: newQuantity }, 
        ]; 
      } 
    }); 
  }; 
 
  const handleDecrement = () => { 
    const newQuantity = quantity !== 0 ? quantity - 1 : 0; 
    setQuantity(newQuantity); 
 
    setItems((prevItems) => { 
      const existingIndex = prevItems.findIndex( 
        (value) => value.item_name === title 
      ); 
      const updated = [...prevItems]; 
 
      if (existingIndex >= 0) { 
        updated[existingIndex] = { 
          ...updated[existingIndex], 
          item_quantity: newQuantity, 
        }; 
 
        if (updated[existingIndex].item_quantity === 0) { 
          return updated.filter((value) => value.item_quantity !== 0); 
        } 
      } 
      return updated; 
    }); 
  }; 
 
  return ( 
    <div className="card-container"> 
      <img src={image} alt="item image" id="item-image" /> 
 
      <div id="item-info"> 
        <h3 id="item-title">{title}</h3> 
        {capacity ?? 0 > 0 ? ( 
          <h6 id="item-capacity">Capacity ({capacity})</h6> 
        ) : ( 
          <></> 
        )} 
      </div> 
 
      <div id="amount-info"> 
        <h3 id="item-price">${price.toFixed(2)}</h3> 
 
        <div id="qty-changer"> 
          <button id="decrement-btn" onClick={() => handleDecrement()}> 
            - 
          </button> 
          <input 
            type="text" 
            id="item-qty" 
            value={quantity} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => 
              setQuantity(Number(e.target.value)) 
            } 
          /> 
          <button id="increment-btn" onClick={() => handleIncrement()}> 
            + 
          </button> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default ItemCard;