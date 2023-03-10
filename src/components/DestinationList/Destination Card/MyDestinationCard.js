import { Link } from "react-router-dom";

const MyDestinationCard = () => {
    return(
        <>

           


           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
           <div className="post-card__details">
             <h2><Link to={`/details/the-id-of-the-current-dest`}>Lorem ipsum dolor sit amet, consectetur, adipiscing </Link></h2>
             <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
               
               <Link className="like-button like-button2" to="/details/the-of-the-current-desy/edit">Edit</Link>
          
               <div className="avatar__muted-line"></div></a>
                      </div> 
                    </div>

                    </>

    );
}
export default MyDestinationCard;