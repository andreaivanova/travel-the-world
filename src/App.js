import './App.css';

import Catalog from './components/Catalog/Catalog';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import MyPosts from './components/MyPosts/MyPosts';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';

const initialAuthState = {
  nameSurname: '',
  email: '',
  accessToken: '',
  _id: '',
};

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const register = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/catalog/*" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/details/:id/edit" element={<Edit />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
