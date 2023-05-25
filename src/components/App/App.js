import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { getMovies } from "../../utils/MoviesApi";
import {
  register,
  authorize,
  getUserMovies,
  getUser,
} from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import MessagePopup from "../MessagePopup/MessagePopup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("jwt"));
  const [isProcessing, setIsProcessing] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");

  const onError = (msg) => {
    setMessagePopup(msg);
  };

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  let [userInfo, setUserInfo] = useState({
    email: "",
  });

  const navigate = useNavigate();

  let [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        if (err.status === 404) {
          err =
            "«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».";
        }
        setMessagePopup(err);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([getUser(), getUserMovies()])
        .then(([me, apiSavedMovies]) => {
          setCurrentUser(me);
          setSavedMovies(
            apiSavedMovies.filter((film) => film.owner === me._id)
          );
        })
        .catch((err) => {
          if (err.status === 404) {
            err = "Сервер не доступен";
          }
          setMessagePopup(err);
        })
        .finally(() => {});
    }
  }, [loggedIn]);

  const onRegister = (data) => {
    return register(data).then(() => {
      return authorize(data).then(({ token }) => {
        localStorage.setItem("jwt", token);
        setUserInfo(data);
        setLoggedIn(true);
        navigate("/movies");
      });
    });
  };

  function onUserLogin(userData) {
    return authorize(userData)
      .then(({ token }) => {
        localStorage.setItem("jwt", token);
        setUserInfo(userData);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err.status === 404) {
          err =
            "«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».";
        }
        setMessagePopup(err);
      });
  }

  const onLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    setIsProcessing(false);
    navigate("/");
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, savedMovies, setSavedMovies }}
    >
      <div className="app">
        <Routes>
          <Route
            path="/sign-in"
            element={
              loggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Login onLogin={onUserLogin} isProcessing={isProcessing} />
              )
            }
          />
          <Route
            path="/sign-up"
            element={
              loggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Register onRegister={onRegister} isProcessing={isProcessing} />
              )
            }
          />
          <Route
            path="/movies"
            element={
              loggedIn ? (
                <section>
                  <Header loggedIn={loggedIn} />
                  <Movies onError={onError} />
                  <Footer />
                </section>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/saved-movies"
            element={
              loggedIn ? (
                <>
                  <Header loggedIn={loggedIn} />
                  <SavedMovies onError={onError} />
                  <Footer />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Header userInfo={userInfo} loggedIn={loggedIn} />
                <Profile onLogout={onLogout} onError={onError} />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header userInfo={userInfo} loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <MessagePopup
          errorMessage={messagePopup}
          onError={onError}
        ></MessagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
