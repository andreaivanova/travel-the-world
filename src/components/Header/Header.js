const Header = () => {

    return (
        <>
              <section className="container_wrapper above-the-fold--navigation" id="navigation_container">
              <div id="branding">
                <a href="#">
                  <h1 className="logo-container __center color-city">
                    <div className="city">travel</div>
                    <div className="es">the</div>
                    <div className="cape">world</div>
                  </h1>
                </a>
              </div>
              <label htmlFor="menu_icon">
                {" "}
                <i className="fa fa-bars"></i>
              </label>
              <input id="menu_icon" type="checkbox" />
              <menu className="color-cape"> 
                <a href="#"> destinations</a>
                <a href="#"> login</a>
                <a href="#"> register</a>
                <a href="#"> create</a>
                <a href="#"> edit</a>
                <a href="#"> my posts</a>
                <a href="#">logout</a>
              </menu>
            </section></>
    )
}

export default Header;