import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import JourneyContext from "../context/JourneyContext";
import BusResult from "./BusResult";

const SearchResults = () => {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { from, to } = useContext(JourneyContext);
  const navigate=useNavigate()

  useEffect(()=>{
    if(!from||!to){
        navigate("/")
    }
  },[])

  async function fetchBuses() {
    setIsLoading(true);
    const response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`
    );
    const allBuses = await response.json();
    setIsLoading(false);
    setBuses(allBuses);
  }

  useEffect(() => {
    fetchBuses();
  }, [from,to]);

  function sortResults(criteria){
    if(criteria==="Price"){
        const busesCopy=[...buses]
        const sortedBuses=busesCopy.sort((a,b)=>{
            if(Number(a.ticketPrice)<Number(b.ticketPrice)){
                return -1
            }
           
                return 1
            
        })
        console.log("Sorted Buses are",sortedBuses)
        setBuses(sortedBuses)
    }
  }

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  

  return (
    <div className="bg-danger p-2 d-flex flex-column">
      <div className="bg-white p-2 d-flex w-75 align-self-center">
        <h4 className="w-50">SORT BY:</h4>
        <div className="d-flex justify-content-around w-100">
          {["Departure", "Arrival", "Price"].map((criteria) => {
            return (
              <Button variant="danger" className="rounded-0" onClick={()=>{
                sortResults(criteria)
              }}>
                {criteria}
              </Button>
            );
          })}
        </div>
      </div>
      {buses.map((bus) => {
        return <BusResult bus={bus} />;
      })}
    </div>
  );
};

export default SearchResults;
