import { Link } from "react-router-dom";
import DestinationList from "../DestinationList/DestinationList";

const Catalog = () => {
    return (
    
      <> 

      <div className="my-catalog">

        <section id="blog-featured">
         <div className="post_featured">
           <div className="post_featured__photo"></div>
           <div className="post_featured__details">
             <h2 className="featured-details__title">Destinations to Inspire Adventure</h2><a className="post-card__avatar" href="#">
               <div className="avatar__muted-line"></div>
               <div className="avatar__white-bg">
                 <div className="white-bg-container">
                   
                  
                 </div>
               </div></a>
             <p className="featured-details__desc">
             “Once the Travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.”
             <br />
             <br />
             <br />
             Here you can explore all of the destinations so you can choose more easily your next place to visit.
             </p>
            
           </div>
         </div>
       </section> 
 
 
   
 
 
       <section id="blog-list">
         <div className="grid_post_container">
        <DestinationList />

           {/* <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><Link to={`/details/destination-card`}>Lorem ipsum dolor sit amet, consectetur, adipiscing </Link></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
      <div className="avatar__name">by John Doe</div>
      <div className="avatar__muted-line"></div></a>
             </div>
           </div> */}

{/*            
           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
      <div className="avatar__name">by John Doe</div>
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>
           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
      <div className="avatar__name">by John Doe</div>
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>
           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
      <div className="avatar__name">by John Doe</div>
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>
           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
      <div className="avatar__name">by John Doe</div>
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>
           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
      <div className="avatar__name">by John Doe</div>
      <div className="avatar__muted-line"></div></a>
             </div>
           </div> */}
         </div>
       </section>
  
       </div>
 
 </>
 );
}

export default Catalog;