import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
  let [userInfo, setUserInfo] = useState({
    email: "", //чтобы вoйти из аккаунта напишите любой символ в кавычках
  });

  function handleUserLogin(userData) {
    setUserInfo(userData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/sign-in"
            element={<Login handleLogin={handleUserLogin} />}
          />
          <Route path="/sign-up" element={<Register />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Header userInfo={userInfo} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <>
                <Header userInfo={userInfo} />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <>
                <Header userInfo={userInfo} />
                <Profile />
              </>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <>
                <Header userInfo={userInfo} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
