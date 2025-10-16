import "./meals.css"; 
import ItemCard from "./Card"; 
 
// Import images for each meal 
import Breakfast from "../images/breakfast.jpg"; 
import Lunch from "../images/lunch.webp"; 
import HighTea from "../images/hightea.jpg"; 
import Dinner from "../images/dinner.webp"; 
 
function MealsComp() { 
  return ( 
    <div className="content-container"> 
      <h1 className="title" id="h1_meals"> 
        Meal <br /> Selection 
      </h1>

       <div className="item-container"> 
        <ItemCard 
          image={Breakfast} 
          title="Breakfast" 
          price={50} 
          withCapacity={false} 
        /> 

        <ItemCard 
          image={Lunch} 
          title="Lunch" 
          price={65} 
          withCapacity={false} 
        /> 

        <ItemCard 
          image={HighTea} 
          title="High Tea" 
          price={25} 
          withCapacity={false} 
        /> 

        <ItemCard 
          image={Dinner} 
          title="Dinner" 
          price={70} 
          withCapacity={false} 
        /> 

      </div> 
    </div> 
  ); 
} 
 
export default MealsComp; 