import "./App.css";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import MyPosts from "./components/My Posts/MyPosts";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div id="container">
    

<Header/>
    <Routes>
    <Route path="/catalog/*" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/details/:id/edit" element={<Edit />} />
</Routes>


      {/* <Header /> 
     <Home /> 
    <Login /> 
    <Register /> 
    <Edit /> 
    <Create /> 
<Catalog />
<Details />
<MyPosts /> */}
     

      <footer>
        <div className="container_wrapper">
          <div id="footer__site_description">
            <h1 className="logo-container __center">
              <div className="city">travel</div>
              <div className="es">the</div>
              <div className="cape">world</div>
            </h1>
            <h3>Destinations to Inspire Adventure</h3>

            <p className="footer_paragraph">
              The place where you can explore new destinations and share your
              own ideas for a new adventure. This website is created thanks to
              <br />
              <a href="https://www.sourcecodester.com/">Sourcecodester.com</a>
            </p>
          </div>

          <div id="footer__pages">
            <h3>pages</h3>
            <ul>
              <li>
                <a href="blog.html">destinations</a>
              </li>
              <li>
                <a href="login.html">login</a>
              </li>
              <li>
                <a href="create.html">create</a>
              </li>
              <li>
                <a href="register.html">join us</a>
              </li>
              <li>
                <a href="myPosts.html">my posts</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
