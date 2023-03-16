import { React } from "react";
import logoPath from "../../images/header-logom.svg";
import ProfilePath from "../../images/profile.svg";
function Header({ userInfo }) {

  return (
    <header className="header">
      <a href="/">
        <img
          className="header__logo"
          src={logoPath}
          alt="Логотип проекта"
        />
      </a>
      {userInfo && userInfo.email === '' ? (
        <nav className="header header__links" >
          <a className="header__link" href="/sign-up">Регистрация</a>
          <a className="header__link" href="/sign-in">Войти</a>
        </nav>
      ) : (
        <nav className="header header__links">
          <a className="header__link-in" href="/movies">Фильмы</a>
          <a className="header__link-in" href="/saved-movies">Сохраненные фильмы</a>
          <a className="header__profile" href="/profile">
            <img
              src={ProfilePath}
              alt="Логотип профайла"
            />
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;