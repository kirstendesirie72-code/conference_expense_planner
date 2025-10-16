import "./addons.css"; 
import ItemCard from "./Card"; 
 
 // Import images for each addon 
import Projectors from "../images/projector.jpg"; 
import Speaker from "../images/speaker.jpg"; 
import Microphones from "../images/microphone.jpg"; 
import Whiteboard from "../images/whiteboard.jpg"; 
import Signage from "../images/signage.jpg"; 
 
function AddonsComp() { 
  return ( 
    <div className="content-container"> 
      <h1 className="title" id="h1_addons"> 
        Add-ons <br /> Selection 
      </h1> 
 
      <div className="item-container"> 
        <ItemCard 
          image={Projectors} 
          title="Projectors" 
          price={200} 
          withCapacity={false}
         /> 

        <ItemCard 
          image={Speaker} 
          title="Speakers" 
          price={35} 
          withCapacity={false} 
        /> 

        <ItemCard 
          image={Microphones} 
          title="Microphones" 
          price={45} 
          withCapacity={false} 
        /> 

        <ItemCard 
          image={Whiteboard} 
          title="Whiteboards" 
          price={80} 
          withCapacity={false} 
        /> 

        <ItemCard 
          image={Signage} 
          title="Signages" 
          price={80} 
          withCapacity={false} 
        /> 

      </div> 
    </div> 
  ); 
} 
 
export default AddonsComp; 