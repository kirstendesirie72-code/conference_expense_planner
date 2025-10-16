import NavBar from "./components/NavBar"; 
import { AppProvider } from "./context"; 
// You can add styles (CSS) to the App.tsx 
function App(){ 
return ( 
<AppProvider> 
<NavBar /> 
</AppProvider> 
); 
} 
export default App;