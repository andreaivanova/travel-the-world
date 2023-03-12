import { useParams, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";

import * as destinationService from "../../services/destinationService";

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
    event.preventDefault();
    destinationService.deleteDestination(id, user.accessToken);
    navigate("/my-posts");
  };

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
      <button className="like-button like-button2" onClick={deleteHandler}>
        Delete
      </button>
    </>
  );

  const userButtons = (
    <button className="like-button like-button2">Like</button>
  );

  return (
    <>
      {/* how the details and edit buttons should look like:
<Route path="/details/:id" element={<Details />} />
            <Route path="/details/:id/edit" element={<Edit />} />
            
            
            
            */}

      <div id="post__single-page">
        <div className="container_wrapper">
          <section id="post-featured-image">
            {/* <div className="post__featured-image"> */}
            <div className="post__title-container">
              <h2>Title of the destination must be includedd here</h2>
              {/* <p>OCTOBER 11, 2018  — by John Doe  — Views: 100</p> */}
              {/* <div className="post__avatar-container"> */}
              {/* <div className="post__avatar"><a href="#">avatar</a></div> */}
              <div className="post__avatar-name">
                {/* <br />
                    <br /> */}

                {/* <button className="like-button like-button2">Edit</button>
                <button
                  className="like-button like-button2"
                  onClick={deleteHandler}
                >
                  Delete
                </button> */}
                {/* {user._id &&
                  (user._id && user._id === destination._ownerId
                    ? ownerButtons
                    : userButtons)} */}

                <div className="flexbox-view">
                  {/* <p className="post-title-details">Written by Name Surname  */}

                  <br />

                  {/* </p> */}
                </div>

                {/* <p className="post-title-details">Like this post </p> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </section>
          <section id="post-content">
            <div className="post__content">
              {/* destination's photo */}
              <img
                className="destination-image post__media_photo"
                src="https://static.javatpoint.com/computer/images/what-is-the-url.png"
              />

              {/* details */}
              <p>
                DESCRIPTION OF THE LOCATION MUST BE WRITTEN HERE Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It{" "}
              </p>

              <h2>Why do you recommend this particular destination?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web pag
              </p>
              <div className="post__media_container">
                <div className="post__media_caption">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </p>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not changed. It{" "}
              </p>
              <h2>
                Have you been there and if yes, could you share some of your
                experience and memories?
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-owill
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
            </div>
          </section>
          <section id="post-author-bio">
            <div className="author-bio__container">
              {/* <div className="author-bio__avatar"><a href="#">avatar </a></div> */}
              <div className="author-bio__description">
                {/* <h2>Written by Name Surname</h2> */}
                <h2>N people like this destination</h2>
                {user._id &&
                  (user._id && user._id === destination._ownerId
                    ? ownerButtons
                    : userButtons)}

                {/* <button className="like-button like-button2">Like</button> */}
                {/* <p>An aspiring cinematographer and front-end developer. Founder of cityescape.ph. Help me build a community where everyone's experience can make a difference. Join us now.</p> */}
              </div>
              <div className="author-bio__social-media"></div>
              {/* <div className="comment__action"><a href="#">reply</a></div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Details;
