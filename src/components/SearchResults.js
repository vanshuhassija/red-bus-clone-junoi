import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BusResult from "./BusResult";

const SearchResults = () => {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchBuses() {
      setIsLoading(true);
      const response = await fetch(
        "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
      );
      const allBuses = await response.json();
      setIsLoading(false);
      setBuses(allBuses);
    }

    fetchBuses();
  }, []);

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div className="bg-danger">
      {buses.map((bus) => {
        return <BusResult bus={bus} />;
      })}
    </div>
  );
};

export default SearchResults;
