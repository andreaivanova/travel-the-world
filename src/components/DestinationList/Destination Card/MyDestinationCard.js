import { Link } from "react-router-dom";


const MyDestinationCard = ({ destination }) => {


 

  
  return (
    <>
      <div className="post-card">
        <img className="destination-image" src={destination.imageUrl} />
        <div className="post-card__details">
          <h2>
            <Link to={`/details/${destination._id}`}>
              {destination.city}, {destination.country}
            </Link>
          </h2>
          <p>{destination.description}</p>

          {/* <Link
            className="like-button like-button2"
            to={`/details/${destination._id}/edit` }         
            >
            Edit
          </Link>

          <Link className="like-button like-button2" onClick={deleteHandler}>Delete</Link> */}
          <div className="avatar__muted-line"></div>
        </div>
      </div>
    </>
  );
};
export default MyDestinationCard;
