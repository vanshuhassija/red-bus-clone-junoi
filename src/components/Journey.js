import React, { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import JourneyContext from "../context/JourneyContext";
import RedBusNavbar from "./Navbar";
import Search from "./Search";

const Journey = ({ Component }) => {
  const navigate = useNavigate();
  const { from, to } = useContext(JourneyContext);
  useEffect(() => {
    
    if(!localStorage.getItem("token")){
        navigate("/login")
    }
    else if (!from || !to) {
        navigate("/");
      }
  }, []);

  return (
    <div>
      <Toaster />
      <RedBusNavbar />
      <Search />
      <Component />
    </div>
  );
};

export default Journey;
