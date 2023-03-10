import { Link } from "react-router-dom";
import DestinationList from "../DestinationList/DestinationList";


const Home = () => {
    return (
        <div id="home">
        <section id="above-the-fold">
          <div className="container_wrapper container_wrapper--welcome">
      

            <h1 id="above-the-fold__description">
              Here you can choose your walking or art vacation
            <br />
               Are you looking
              for a leisurely European walking vacation 
              <br />
              or a travel
              journal-based art vacation?
            </h1>
          </div>
        </section>
        <div className="my-catalog">

        <section id="latest-review">
          <h2 className="section-title">
            <div className="color-city">latest</div>
            <div className="color-cape">added posts</div>
          </h2>
          <div className="container_wrapper">
            <div className="grid_post_container">
<DestinationList />
<DestinationList />

<DestinationList />


                {/* <div className="post-card">
                <img
                  className="destination-image"
                  src="https://static.javatpoint.com/computer/images/what-is-the-url.png"
                />
                <div className="post-card__details">
                  <h2>
                    <a href="post.html">
                      Lorem ipsum dolor sit amet, consectetur, adipiscing
                    </a>
                  </h2>
                  <p>
                    Lrem ipsum dolor sit amet, sed do eiusmod consectetur
                    adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod. Sed do
                    eiusmod
                  </p>
                  <a className="post-card__avatar" href="post.html">
                    <div className="avatar__name">by John Doe</div>
                    <div className="avatar__muted-line"></div>
                  </a>
                </div>
              </div>


              <div className="post-card">
                <img
                  className="destination-image"
                  src="https://static.javatpoint.com/computer/images/what-is-the-url.png"
                />
                <div className="post-card__details">
                  <h2>
                    <a href="post.html">
                      Lorem ipsum dolor sit amet, consectetur, adipiscing
                    </a>
                  </h2>
                  <p>
                    Lrem ipsum dolor sit amet, sed do eiusmod consectetur
                    adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod. Sed do
                    eiusmod
                  </p>
                  <a className="post-card__avatar" href="post.html">
                    <div className="avatar__name">by John Doe</div>
                    <div className="avatar__muted-line"></div>
                  </a>
                </div>
              </div>


              <div className="post-card">
                <img
                  className="destination-image"
                  src="https://static.javatpoint.com/computer/images/what-is-the-url.png"
                />
                <div className="post-card__details">
                  <h2>
                    <a href="post.html">
                      Lorem ipsum dolor sit amet, consectetur, adipiscing
                    </a>
                  </h2>
                  <p>
                    Lrem ipsum dolor sit amet, sed do eiusmod consectetur
                    adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod. Sed do
                    eiusmod
                  </p>
                  <a className="post-card__avatar" href="post.html">
                    <div className="avatar__name">by John Doe</div>
                    <div className="avatar__muted-line"></div>
                  </a>
                </div>
              </div> */}






            </div>




            <Link className="button border-only muted" to="/catalog">view all</Link>

            {/* <a
              className="button border-only muted"
              href="/cityescape/blog.html"
            >
              view all
            </a> */}
          </div>
        </section>
        </div>
      </div>
    );
}
export default Home;