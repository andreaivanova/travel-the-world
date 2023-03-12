import { useState, useEffect } from "react";
import DestinationCard from "./Destination Card/DestinationCard";
import * as destinationService from "../../services/destinationService";
import { useLocation } from "react-router-dom";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const location = useLocation();


  useEffect(() => {
    destinationService.getAll().then((data) => {
      if (location.pathname === "/") {
        data = data.slice(0, 3);
      }
      setDestinations(data);
    });
  }, []);


  return (
    <>
      {destinations.length > 0 ? (
        <>
          {destinations.map((x) => (
            <DestinationCard key={x._id} destination={x} />
          ))}
        </>
      ) : (
        <div className="post-card">
          <p>No destinations in data base</p>
        </div>
      )}
    </>
  );
};
export default DestinationList;
