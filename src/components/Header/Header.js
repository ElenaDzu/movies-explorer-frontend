import { React } from "react";
import logoPath from "../../images/header-logom.svg";
import ProfilePath from "../../images/profile.svg";
function Header({ userInfo }) {

  return (
    <header className="header">
      <a href="/">
        <img
          className="header header__logo"
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
        <nav>
          <a className="header__link" src={ProfilePath} href="/profile">Аккаунт</a>
        </nav>
      )}
    </header>
  );
}

export default Header;