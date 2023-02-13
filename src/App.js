import "./App.css";
import { Navbar } from "react-bootstrap";
import RedBusNavbar from "./components/Navbar";
import Search from "./components/Search";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <RedBusNavbar />
        <Search />
        {/* Show these three things everywhere but after this the content should be shown according to the routes */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
