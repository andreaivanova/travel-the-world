import MyDestinationList from "../DestinationList/MyDestinationList";

const MyPosts = () => {
    return (
    
      <> 

      <div className="my-catalog">

        <section id="blog-featured">
         <div className="post_featured">
           <div className="post_featured__photo--myPosts"></div>
           <div className="post_featured__details">
             <h2 className="featured-details__title">Profile of Name Surname</h2><a className="post-card__avatar" href="#">
               <div className="avatar__muted-line"></div>
               <div className="avatar__white-bg">
                 <div className="white-bg-container">
                   
                  
                 </div>
               </div></a>
             <p className="featured-details__desc">
             “I haven't been everywhere, but it's on my list.”
             <br />
             <br />
             <br />
             Here you can explore all of the destinations that you added.
             </p>
            
           </div>
         </div>
       </section> 
 
 
   
 
 
       <section id="blog-list">
         <div className="grid_post_container">

<MyDestinationList />
           {/* <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
 
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>

           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
 
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>

           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
 
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>


           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
 
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>



           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
 
      <div className="avatar__muted-line"></div></a>
             </div>
           </div>



           <div className="post-card"> <img className="destination-image" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />
  <div className="post-card__details">
    <h2><a href="post.html">Lorem ipsum dolor sit amet, consectetur, adipiscing </a></h2>
    <p>Lrem ipsum dolor sit amet, sed do eiusmod consectetur adipiscing elit, sed do eiusmod? — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Sed do eiusmod</p><a className="post-card__avatar" href="post.html">
      
 
      <div className="avatar__muted-line"></div></a>
             </div>
           </div> */}


         </div>
       </section>
  
       </div>
 
 </>
 );
}

export default MyPosts;