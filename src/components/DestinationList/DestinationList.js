import { useState, useEffect } from "react";
import DestinationCard from "./Destination Card/DestinationCard";
import * as destinationService from "../../services/destinationService";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    destinationService.getAll().then((data) => setDestinations(data));
  });

  return (
    <>
      {/* // of all of the destination cards must be loaded here via the Map method is JS */}
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
