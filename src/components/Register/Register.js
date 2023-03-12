import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login, register } = useContext(AuthContext);
  const onRegisterHandler = (event) => {
    event.preventDefault();

    let formData = Object.fromEntries(new FormData(event.target));

    //regex for at least a 6 character long password
    let regex = /.{6,}/g;

    try {
      if (formData.email === "" || formData.password === "" || formData.nameSurname === "") {
        throw new Error("Please fill out all of the required fields!");
      }

      if (!formData.password.match(regex)) {
        throw new Error("Password must be at least 6 characters long!");
      }

      if (formData.password !== formData["confirm-pass"]) {
        throw new Error("Passwords do not match!");
      }
      authService
        .register(formData.email, formData.password, formData.nameSurname)
        .then((data) => {
          register(data);
          navigate("/");
        })
        .catch((err) =>
          //todo- show notification
          alert(err)
        );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div id="post__single-page">
        <section className="above-the-fold">
          <div className="container_wrapper container_wrapper--registerView">
            <section id="comment-form">
              <h1 id="above-the-fold__description">Register</h1>
              <form
                className="comment-form__container form--login"
                onSubmit={onRegisterHandler}
              >
                <input
                  className="comment__name"
                  type="email"
                  placeholder="email"
                  name="email"
                />
                <input
                  className="comment__name"
                  type="text"
                  placeholder="name and surname"
                  name="nameSurname"

                />
                <input
                  className="comment__name"
                  type="password"
                  placeholder="password (min. 6 characters)"
                  name="password"

                />
                <input
                  className="comment__name"
                  type="password"
                  placeholder="repeat password"
                  name="confirm-pass"
                />

                <button className="comment__action">Register</button>

                <Link to="/login">Already have an account?</Link>
              </form>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
