import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [error, setError] = useState({ status: false, message: '' });
  const [passwordErr, setPasswordError] = useState({
    status: false,
    message: '',
  });
  const [repeatPasswordErr, setRepeatPasswordError] = useState({
    status: false,
    message: '',
  });

  const onRegisterHandler = (event) => {
    event.preventDefault();

    let formData = Object.fromEntries(new FormData(event.target));

    //regex for at least a 6 character long password
    let regex = /.{6,}/g;

    if (
      formData.email === '' ||
      formData.password === '' ||
      formData['confirm-pass'] === '' ||
      formData.nameSurname === ''
    ) {
      setError({
        status: true,
        message: 'Please fill out all of the required fields!',
      });
      return;
    } else {
      setError({
        status: false,
        message: '',
      });
    }

    if (!formData.password.match(regex)) {
      setPasswordError({
        status: true,
        message: 'Password must be at least 6 characters long!',
      });
      return;
    } else {
      setPasswordError({
        status: false,
        message: '',
      });
    }

    if (formData.password !== formData['confirm-pass']) {
      setRepeatPasswordError({
        status: true,
        message: 'Passwords do not match!',
      });
      return;
    } else {
      setRepeatPasswordError({
        status: false,
        message: '',
      });
    }

    authService
      .register(formData.email, formData.password, formData.nameSurname)
      .then((data) => {
        register(data);
        navigate('/');
      })
      .catch((err) => {
        setError({ status: true, message: err.message });
      });
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
                {error.status && <p>{error.message}</p>}
                {passwordErr.status && <p>{passwordErr.message}</p>}
                {repeatPasswordErr.status && <p>{repeatPasswordErr.message}</p>}
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
