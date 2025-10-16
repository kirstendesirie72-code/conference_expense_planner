import "./venue.css"; 
import ItemCard from "./Card"; 
 
// Import images for each venue 
import ConferenceRoom from "../images/Conference.png"; 
import AuditoriumHall from "../images/Auditorium Hall.jpg"; 
import PresentationRoom from "../images/presentation room.jpg"; 
import LargeMeetingRoom from "../images/Large meeting room.webp"; 
import SmallMeetingRoom from "../images/small rm.jpg"; 
 
function VenueComp() { 
  return ( 
    <div className="content-container"> 
      <h1 className="title" id="h1_venue"> 
        Venue Room <br /> Selection 
      </h1> 
 
      <div className="item-container"> 
        <ItemCard 
          image={ConferenceRoom} 
          title="Conference Room" 
          capacity={15} 
          price={1500} 
          withCapacity={true} 
        /> 
        <ItemCard 
          image={AuditoriumHall} 
          title="Auditorium Hall" 
          capacity={200} 
          price={5500} 
          withCapacity={true} 
        /> 
        <ItemCard 
          image={PresentationRoom} 
          title="Presentation Room" 
          capacity={50} 
          price={3500} 
          withCapacity={true} 
        /> 
        <ItemCard 
          image={LargeMeetingRoom} 
          title="Large Meeting Room" 
          capacity={10} 
          price={1000} 
          withCapacity={true} 
        /> 
        <ItemCard 
          image={SmallMeetingRoom} 
          title="Small Meeting Room" 
          capacity={5} 
          price={800} 
          withCapacity={true} 
        /> 
      </div> 
    </div> 
  ); 
} 
 
export default VenueComp; 
