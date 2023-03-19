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


            </div>




            <Link className="button border-only muted" to="/catalog">view all</Link>

        
          </div>
        </section>
        </div>
      </div>
    );
}
export default Home;