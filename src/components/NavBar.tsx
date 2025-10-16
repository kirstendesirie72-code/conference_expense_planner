import { useState } from "react"; 
import HomeComp from "./Home"; 
import VenueComp from "./Venue"; 
import AddonsComp from "./Addons"; 
import MealsComp from "./Meals"; 
import ExpenseSummary from "./Summary"; 
import "./navbar.css"; 
 
type Sections = { 
  text: string; 
  isSelected: boolean; 
}; 
 
function NavBar() { 
  const [toggleDetails, setToggleDetails] = useState(true); 
  const [sectionList, setSections] = useState<Sections[]>([ 
    { 
      text: "Home", 
      isSelected: true, 
    }, 
    { 
      text: "Venue", 
      isSelected: false, 
    }, 
    { 
      text: "Add-ons", 
      isSelected: false, 
    }, 
    { 
      text: "Meals", 
      isSelected: false, 
    }, 
  ]); 
 
  const displaySections = (list: Sections, index: number) => { 
    return ( 
      <li key={index} className={list.isSelected ? "selected" : ""}> 
        <button id="nav-sectionBTN" onClick={() => toggleSelected(index)}> 
          {list.text} 
        </button> 
      </li> 
    ); 
  }; 
 
  const toggleSelected = (index: number) => { 
    setSections( 
      sectionList.map((section, i) => 
        i === index 
          ? { ...section, isSelected: true } 
          : { ...section, isSelected: false } 
      ) 
    ); 
  }; 
 
   const goToSection = (name: string) => { 
    setSections( 
      sectionList.map((section) => 
        section.text === name 
          ? { ...section, isSelected: true } 
          : { ...section, isSelected: false } 
      ) 
    ); 
  }; 
 
  const displayContents = (section: Sections, index: number) => { 
    if (index === 0 && section.isSelected) { 
      return <HomeComp key="home" goToSection={goToSection}/>; 
    } else if (index === 1 && section.isSelected) { 
      return <VenueComp key="venue" />; 
    } else if (index === 2 && section.isSelected) { 
      return <AddonsComp key="addons" />; 
    } else if (index === 3 && section.isSelected) { 
      return <MealsComp key="meals" />; 
    } 
  }; 
 
  return ( 
    <> 
      <div className="nav-container"> 
        <h2 className="title">C.E.P.</h2> 
 
        <ul className="nav-list"> 
          {sectionList.map((value, i) => displaySections(value, i))} 
        </ul> 
 
        <button 
          id="show-details" 
          onClick={() => setToggleDetails(!toggleDetails ? true : false)} 
        > 
          Show Details 
        </button> 
      </div> 
 
      <div className="main"> 
        {sectionList.map((value, i) => displayContents(value, i))} 
        {!toggleDetails ? <ExpenseSummary /> : <></>} 
      </div> 
</> 
); 
} 
export default NavBar;