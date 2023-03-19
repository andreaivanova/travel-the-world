
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


         </div>
       </section>
  
       </div>
 
 </>
 );
}

export default Catalog;