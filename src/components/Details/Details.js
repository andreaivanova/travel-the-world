import { useParams, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import * as destinationService from "../../services/destinationService";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import * as  authService from "../../services/authService";


const Details = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState({});

  useEffect(() => {
    destinationService.getOne(params.id).then((data) => setDestination(data));
  }, []);

  const deleteHandler = function onDelete(event) {
    // event.preventDefault();
    destinationService.deleteDestination(id, user.accessToken);
    navigate(`/catalog`);
    
  };






  const submit = () => {

    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteHandler()
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    });
  }



  const onLikeHandler =()=>{
    
      destinationService
        .likeAPost(params.id, user.accessToken)
        .then((data) => {
          navigate(`/details/${params.id}`);
        });
   }



  const totalLikes =  null

  const ownerButtons = (
    <>
      <Link
        to={`/details/${id}/edit`}
        className="like-button like-button2"
        state={{
          city: destination.city,
          country: destination.country,
          description: destination.description,
          imageUrl: destination.imageUrl,
          recommendation: destination.recommendation,
          beenThere: destination.beenThere,
        }}
      >
        Edit
      </Link>
      <button className="like-button like-button2" onClick={submit}>
        Delete
      </button>
    </>
  );

  const userButtons = (
    <button className="like-button like-button2" onClick={onLikeHandler}>Like</button>
  );

  return (
    <>
      <div id="post__single-page">
        <div className="container_wrapper">
          <section id="post-featured-image">
            <div className="post__title-container">
              <h2>
                {destination.city}, {destination.country}
              </h2>

              <div className="post__avatar-name">
                <div className="flexbox-view">
                  <br />
                </div>
              </div>
            </div>
          </section>
          <section id="post-content">
            <div className="post__content">
              <img
                className="destination-image post__media_photo"
                src={destination.imageUrl}
              />

              <p>{destination.description}</p>

              <h2>Why do you recommend this particular destination?</h2>
              <p>{destination.recommendation}</p>

              <h2>
                Have you been there and if yes, could you share some of your
                experience and memories?
              </h2>
              <p>{destination.beenThere}</p>
            </div>
          </section>
          <section id="post-author-bio">
            <div className="author-bio__container">
              <div className="author-bio__description">
                <h2>N people like this destination</h2>
                {user._id &&
                  (user._id && user._id === destination._ownerId
                    ? ownerButtons
                    : userButtons)}
              </div>
              <div className="author-bio__social-media"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Details;
