import "./App.css";
// import my component 
import Navbar from './main component/Navbar';
import Catgoery from "./main component/Catgoery";
import Cards from "./main component/Cards"
function App() {
  return <div className="App">
     <Navbar/>
     <Catgoery/>
     <Cards/>
   </div>;
}

export default App;
