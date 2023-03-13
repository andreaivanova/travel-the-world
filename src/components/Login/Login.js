import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
// import Alert from '@mui/material/Alert';
// import { NotificationManager } from "react-notifications";
// import 'react-notifications/lib/notifications.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLoginHandler = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));
    // let email = formdata.get("email");
    // let password = formdata.get("password");

    try {
      if (formData.email === "" || formData.password === "") {
        throw new Error("Please fill out all of the required fields!");
      }

      authService
        .login(formData.email, formData.password)
        .then((data) => {
          login(data);
          navigate("/");
        })
        .catch(
          (err) =>
            //todo- show notification
            alert(err.message)
          // <Alert severity="warning">{err.message}</Alert>
        );
    } catch (err) {
      // <Alert severity="warning">{err.message}</Alert>
      alert(err.message);
    }
  };

  return (
    <>
      <div id="post__single-page">
        <section className="above-the-fold">
          <div className="container_wrapper container_wrapper--loginView">
            <section id="comment-form">
              <h1 id="above-the-fold__description">Login</h1>
              <form
                className="comment-form__container form--login"
                onSubmit={onLoginHandler}
              >
                <input
                  className="comment__name"
                  type="email"
                  placeholder="email"
                  name="email"
                />
                <input
                  className="comment__name"
                  type="password"
                  placeholder="password"
                  name="password"
                />

                <button className="comment__action">Login</button>
                <Link to="/register">Don't have an account?</Link>
              </form>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
