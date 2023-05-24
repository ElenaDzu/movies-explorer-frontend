import { React, useContext, useState } from "react";
import logoPath from "../../images/header-logom.svg";
import ProfilePath from "../../images/profile.svg";
import BurgerPath from "../../images/burger.svg";
import CloseMenuPath from "../../images/close-btn.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ loggedIn }) {
  const {currentUser} = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logoPath} alt="Логотип проекта" />
      </a>
      {!loggedIn ? (
        <nav className="header__links">
          <a className="header__link" href="/sign-up">
            Регистрация
          </a>
          <a className="header__link" href="/sign-in">
            Войти
          </a>
        </nav>
      ) : (
        <div className="header__content">
          <button
            onClick={showMenu}
            className={`header__burger ${
              isOpen ? "header__burger_opened" : ""
            }`}
          >
            <img
              alt="Логотип навигации"
              src={BurgerPath}
              className="burger__pic"
            />
          </button>
          <nav
            className={`header__links-in ${
              isOpen ? " header__links-in_opened" : ""
            }`}
          >
            <button
              onClick={closeMenu}
              className={`close-menu ${isOpen ? "close-menu_opened" : ""}`}
            >
              <img
                alt="Иконка закрытия меню"
                className="header__close-btn"
                src={CloseMenuPath}
              />
            </button>
            <a className="header__link-in" href="/">
              Главная
            </a>
            <a className="header__link-in" href="/movies">
              Фильмы
            </a>
            <a className="header__link-in" href="/saved-movies">
              Сохраненные фильмы
            </a>
            <a className="header__profile" href="/profile">
              <img
                className="profile__pic"
                src={ProfilePath}
                alt="Логотип профайла"
              />
            </a>
          </nav>
          <div
            className={`header__overlay ${
              isOpen ? " header__overlay_opened" : ""
            }`}
          ></div>
        </div>
      )}
    </header>
  );
}

export default Header;
