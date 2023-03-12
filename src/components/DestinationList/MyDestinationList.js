import MyDestinationCard from "./Destination Card/MyDestinationCard";
import { useState, useEffect } from "react";
import * as destinationService from "../../services/destinationService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyDestinationList = () => {

    const [destinations, setDestinations] = useState([]);

  const { user } = useContext(AuthContext);

  
    useEffect(() => {
      destinationService.getMy(user._id).then((data) => {
        
        setDestinations(data);
      });
    }, []);

    return(

<>
      {destinations.length > 0 ? (
        <>
          {destinations.map((x) => (
            <MyDestinationCard key={x._id} destination={x} />
          ))}
        </>
      ) : (
        <div className="post-card post-card-none">
          <p>No destinations have been added yet!</p>
        </div>
      )}
    </>
    );
}
export default MyDestinationList;