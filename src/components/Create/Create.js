import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as destinationService from "../../services/destinationService";

const Create = () => {
  const nav = useNavigate();
  const { user } = useContext(AuthContext);
  const onDestinationCreate = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));

    destinationService
      .create({ ...formData }, user.accessToken)
      .then((data) => {
        nav("/catalog");
      });
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
              <h1 id="above-the-fold__description">Add a new destination</h1>
              <form
                className="comment-form__container form--login form--style--edit--create"
                method="POST"
                onSubmit={onDestinationCreate}
              >
                <input
                  className="comment__name"
                  type="text"
                  placeholder="city"
                  name="city"
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="country"
                  name="country"
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="description"
                  name="description"
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="image url"
                  name="imageUrl"
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="why do you recommend it?"
                  name="recommendation"
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="have you ever been there? share some of your experience"
                  name="beenThere"
                />

                <button className="comment__action">Add</button>
              </form>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Create;
