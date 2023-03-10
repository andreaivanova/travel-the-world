

const Details = () =>{


    return(
<>

        <div id="post__single-page">
        <div className="container_wrapper">
          
          <section id="post-featured-image">
            {/* <div className="post__featured-image"> */}
              <div className="post__title-container">
                <h2>Title of the destination must be includedd here</h2>
                {/* <p>OCTOBER 11, 2018  — by John Doe  — Views: 100</p> */}
                {/* <div className="post__avatar-container"> */}
                  {/* <div className="post__avatar"><a href="#">avatar</a></div> */}
                  <div className="post__avatar-name">
                    {/* <br />
                    <br /> */}
                    {/* <h5>Written by name</h5> */}
                    <p className="post-title-details">Written by Name Surname 
                
                    </p>
                    {/* <p className="post-title-details">Like this post </p> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </section>
          <section id="post-content">
            <div className="post__content">

                {/* destination's photo */}
                <img className="destination-image post__media_photo" src="https://static.javatpoint.com/computer/images/what-is-the-url.png" />

                {/* details */}
              <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It </p>
           
              <h2>Why do you recommend this particular destination?</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
              <div className="post__media_container">
                {/* <div className="post__media_photo"></div> */}

                <div className="post__media_caption">
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not changed. It </p>
              <h2>Have you been there and if yes, could you share some of your experience and memories?</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-owill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            {/* <div className="post__tags">
              <h6>TAGS</h6>
              <ul>
                <li><a href="#">CEBU,</a></li>
                <li><a href="#">CITYESACPE,</a></li>
                <li><a href="#">ELEGANT BEACH RESORT,</a></li>
                <li><a href="#">NORTH-CEBU,</a></li>
                <li><a href="#">RESORT,</a></li>
                <li><a href="#">REVIEW,</a></li>
                <li><a href="#">TRAVEL-REVIEW</a></li>
              </ul>
            </div> */}
          </section>
          <section id="post-author-bio">
            <div className="author-bio__container">
              {/* <div className="author-bio__avatar"><a href="#">avatar </a></div> */}
              <div className="author-bio__description">
                <h2>Written by Name Surname</h2>
                <h2>N people like this destination</h2>
                <button className="like-button like-button2">Like</button>
                {/* <p>An aspiring cinematographer and front-end developer. Founder of cityescape.ph. Help me build a community where everyone's experience can make a difference. Join us now.</p> */}
              </div>
              <div className="author-bio__social-media">
                {/* <ul>
                  <li><a className="fa fa-facebook" href="#"></a></li>
                  <li><a className="fa fa-instagram" href="#"></a></li>
                  <li><a className="fa fa-envelope" href="#"></a></li>
                  <li><a className="fa fa-youtube" href="#"></a></li>
                  <li><a className="fa fa-link" href="#"></a></li>
                </ul> */}

              </div>
            </div>
          </section>
{/* 
          <section id="post-comment">
            <h5>LIKE THIS POST</h5>
            <Button variant="primary">Primary</Button>
            </section> */}
          {/* <section id="post-comment">
            <h5>LIKE THIS POST</h5>
            <Button variant="primary">Primary</Button>
            <div className="comment__container">
              <div className="comment__avatar"><a href="#">avatar </a></div>
              <div className="comment__description">
                <h2>John Doe</h2><span>16 APR 2018</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
              <div className="comment__action"><a href="#">reply</a></div>
            </div>
          </section>
          <section id="comment-form">
            <h5>Leave Comment</h5>
            <form className="comment-form__container">
              <input className="comment__name" placeholder="name" />
              <input className="comment__email" placeholder="email" />
              <input className="comment__message" placeholder="message" />
              <button className="comment__action">submit</button>
            </form>
          </section> */}
        </div>
    
        
      </div>
      </>
      
    )
}

export default Details;