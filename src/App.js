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
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div id="container">
    

<Header/>
    <Routes>
    <Route path="/" element={<Home />} />

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
     

     <Footer />
    </div>
  );
}

export default App;
