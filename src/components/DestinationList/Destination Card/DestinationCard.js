import { Link } from "react-router-dom";

const DestinationCard = ({destination}) => {
    return(
<div className="post-card"> <img className="destination-image" src={destination.imageUrl} />
  <div className="post-card__details">
    <h2><Link to={`/details/${destination._id}`}>{destination.city}, {destination.country} </Link></h2>
    <p>{destination.description}</p><a className="post-card__avatar">
      
      {/* <div className="avatar__name">by {destination._ownerId}</div> */}
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>


    );
}
export default DestinationCard;