import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  let [userInfo, setUserInfo] = useState({
    "email": ""
  });

  function handleUserLogin(userData) {
    setUserInfo(userData);
  };

  return (
    <div className="App">
      <Header userInfo={userInfo}></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/sign-in" element={<Login handleLogin={ handleUserLogin }/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/saved-movies" element={<SavedMovies/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
