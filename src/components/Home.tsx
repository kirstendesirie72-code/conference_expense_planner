import './home.css' 
 
type HomeProps = { 
    goToSection: (section: string) => void; 
} 
 
function HomeComponent({ goToSection }: HomeProps) { 
  return ( 
    <div className="home-container"> 
      <div id="col1"> 
        <h1 id="home-title">Conference Expense Planner</h1> 
        <p id="home-subtitle">Plan your next major event with us!</p> 
        <button id="getStarted-btn" onClick={() => goToSection("Venue")}>Get Started</button> 
      </div> 
      <div id="col2"> 
        <p id="home-message"> 
          Welcome to BudgetEase Solutions, your trusted partner in simplifying 
          budget management and financial solutions. At BudgetEase, we 
          understand the importance of effective budget planning and strive to 
          provide intuitive, user-friendly solutions to meet the diverse needs 
          of our clients. 
          <br /> 
          <br /> 
          With a commitment to efficiency and innovation, we empower individuals 
          and business to take control of their finances and achieve their goals 
          with ease. 
          <br /> 
          <br /> 
          At BudgetEase Solutions, our mission is to make budgeting effortless 
          and accessible for everyone. Whether you're a small owner, a busy 
          professional, or an individual looking to manage your personal 
          finances, we offer tailored solutions to streamline your budgeting 
          process. 
        </p> 
      </div> 
    </div> 
  ); 
} 
 
export default HomeComponent;