
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
        <div className="container_wrapper">
          <div id="footer__site_description">
            <h1 className="logo-container __center">
              <div className="city">travel</div>
              <div className="es">the</div>
              <div className="cape">world</div>
            </h1>
            <h3>Destinations to Inspire Adventure</h3>

            <p className="footer_paragraph">
              The place where you can explore new destinations and share your
              own ideas for a new adventure. This website is created thanks to
              <br />
              <a href="https://www.sourcecodester.com/">Sourcecodester.com</a>
            </p>
          </div>

          <div id="footer__pages">
            <h3>pages</h3>
            <ul>
              <li>
                <Link to="/catalog">destinations</Link>
                {/* <a href="blog.html">destinations</a> */}
              </li>
              <li>
              <Link to="/login">login</Link>

            
              </li>
              <li>
              <Link to="/register">join us</Link>

                {/* <a href="create.html">create</a> */}
              </li>
              {/* <li>
                <a href="register.html">join us</a>
              </li>
              <li>
                <a href="myPosts.html">my posts</a>
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer;