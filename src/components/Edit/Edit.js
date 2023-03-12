import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as destinationService from "../../services/destinationService";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Edit = () => {
  const nav = useNavigate();
  const [state, setState] = useState({});
  const location = useLocation();
  const { city, country, description, imageUrl, recommendation, beenThere } =
    location.state;

  const { user } = useContext(AuthContext);
  // const params = useParams();
  const { id } = useParams();

  // setState(
  //   city,
  //   country,
  //   description,
  //   imageUrl,
  //   recommendation,
  //   beenThere,
  // );
  const onDestinationEdit = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));

    try {
      if (
        formData.city === "" ||
        formData.country === "" ||
        formData.description === "" ||
        formData.imageUrl === "" ||
        formData.recommendation === "" ||
        formData.beenThere === ""
      ) {
        throw new Error("Please fill out all of the required fields!");
      }
      destinationService
        .update({ ...formData }, user.accessToken, id)
        .then((data) => {
          nav(`/details/${id}`);
        });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div id="post__single-page">
        <section className="above-the-fold above_the_fold_create_and_edit">
          <div
            className="container_wrapper container_wrapper--loginView 
             container_wrapper--editandCreateView"
          >
            <section id="comment-form">
              <h1 id="above-the-fold__description">Edit your post</h1>
              <form
                className="comment-form__container form--login form--style--edit--create"
                onSubmit={onDestinationEdit}
              >
                <input
                  className="comment__name"
                  type="text"
                  placeholder="city"
                  name="city"
                  defaultValue={city}
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="country"
                  name="country"
                  defaultValue={country}
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="description"
                  name="description"
                  defaultValue={description}
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="image url"
                  name="imageUrl"
                  defaultValue={imageUrl}
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="why do you recommend it?"
                  name="recommendation"
                  defaultValue={recommendation}
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="have you ever been there? share some of your experience"
                  name="beenThere"
                  defaultValue={beenThere}
                />

                <button className="comment__action">Edit</button>
              </form>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Edit;
