import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import MyDestinationList from "../DestinationList/MyDestinationList";

const MyPosts = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="my-catalog">
        <section id="blog-featured">
          <div className="post_featured">
            <div className="post_featured__photo--myPosts"></div>
            <div className="post_featured__details">
              <h2 className="featured-details__title">
                Profile of {user.nameSurname}
              </h2>
              <a className="post-card__avatar" href="#">
                <div className="avatar__muted-line"></div>
                <div className="avatar__white-bg">
                  <div className="white-bg-container"></div>
                </div>
              </a>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default MyPosts;
