import "./App.css";
import { Navbar } from "react-bootstrap";
import RedBusNavbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
     <RedBusNavbar/>
     <Search/>
    </div>
  );
}

export default App;
