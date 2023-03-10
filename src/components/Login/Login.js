const Login = () => {

    return (
        <>
        <div id="post__single-page">
          <section className="above-the-fold">
            <div className="container_wrapper container_wrapper--loginView">
              {/* <section id="navigation_container">
                <div id="branding">
                <a href="index.html">
                <h1 className="logo-container __center">
                <div className="city">travel</div>
                <div className="es">the</div>
                <div className="cape">world</div>
                </h1>
                </a>
                </div>
                <label htmlfor="menu_icon">
                {" "}
                <i className="fa fa-bars"></i>
                </label>
                <input id="menu_icon" type="checkbox" />
                <menu>
                <a href="blog.html"> destinations</a>
                <a href="login.html"> login</a>
                <a href="register.html"> register</a>
                <a href="blog.html"> join us</a>
                <a href="blog.html"> login</a>
                </menu>
            </section> */}

              <section id="comment-form">
                <h1 id="above-the-fold__description">Login</h1>
                <form className="comment-form__container form--login">
                  <input
                    className="comment__name"
                    type="email"
                    placeholder="email"
                    />
                  <input
                    className="comment__name"
                    type="password"
                    placeholder="password"
                    />

                  <button className="comment__action">Login</button>
                  <a href="register.html">Don't have an account?</a>
                </form>
              </section>
            </div>
          </section>
        </div>
      
                    </>
    )
}

export default Login;