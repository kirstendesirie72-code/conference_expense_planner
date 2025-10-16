import { useContext } from "react"; 
import { AppContext } from "../context"; 
import "./summary.css"; 
 
function ExpenseSummary() { 
  const { items } = useContext(AppContext); 
 
  // Calculate the Total Price 
  const totalCost = items.reduce( 
    (sum, item) => sum + item.item_cost * item.item_quantity, 
    0 
  ); 
 
  // Retreive and Display an item 
  const displayItemRow = () => { 
    return items.map((item) => ( 
      <tr key={item.item_name}> 
        <td className="item-name">{item.item_name}</td> 
        <td className="item-cost">${item.item_cost.toFixed(2)}</td> 
        <td className="item-qty">{item.item_quantity}</td> 
        <td className="item-subtotal">${(item.item_cost * item.item_quantity).toFixed(2)}</td> 
      </tr> 
    )); 
  }; 
 
  return ( 
    <div id="summary-overlay"> 
      <div id="summary-container"> 
        <h3 id="summary-title">TOTAL COST FOR THE EVENT</h3> 
        <h2 id="summary-total">${totalCost.toFixed(2)}</h2> 
 
        <div id="table-container"> 
          <table id="summary-table"> 
            <thead id="table-header"> 
              <tr> 
                <th className="item-name">Name</th> 
                <th className="item-cost">Unit Cost</th> 
                <th className="item-qty">Quantity</th> 
                <th className="item-subtotal">Sub Total</th> 
              </tr> 
            </thead> 
 
            <tbody id="table-body">{displayItemRow()}</tbody> 
          </table> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default ExpenseSummary;