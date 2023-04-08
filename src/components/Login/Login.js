import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { useState } from 'react';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState({ status: false, message: '' });

  const onLoginHandler = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));

    if (formData.email === '' || formData.password === '') {
      setError({
        status: true,
        message: 'Please fill out all of the required fields!',
      });
      return;
    }

    authService
      .login(formData.email, formData.password)
      .then((data) => {
        login(data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setError({ status: true, message: err.message });
      });
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
                {error.status && <p>{error.message}</p>}
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
