import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);

  const guestNav = (
    <>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </>
  );
  const userNav = (
    <>
      <Link to="/my-posts">my posts</Link>
      <Link to="/create">create</Link>
      <Link to="/logout">logout </Link>
    </>
  );

  return (
    <>
      <section
        className="container_wrapper above-the-fold--navigation"
        id="navigation_container"
      >
        <div id="branding">
  
          <h1 className="logo-container __center color-city">
            <Link className="city" to="/">
              travel
            </Link>
            <br />
            <Link className="es" to="/">
              the
            </Link>
            <br />
            <Link className="cape" to="/">
              world
            </Link>

        
          </h1>
       
        </div>
        <label htmlFor="menu_icon">
          {" "}
          <i className="fa fa-bars"></i>
        </label>
        <input id="menu_icon" type="checkbox" />

        <menu className="color-cape">
          <Link to="/catalog">destinations</Link>
          {user.email ? userNav : guestNav}

        </menu>
      </section>
    </>
  );
};

export default Header;
