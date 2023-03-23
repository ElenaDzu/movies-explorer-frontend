import { React, useState } from "react";
import logoPath from "../../images/header-logom.svg";
import ProfilePath from "../../images/profile.svg";
import BurgerPath from "../../images/burger.svg";
import CloseMenu from "../../images/close-btn.svg";
function Header({ userInfo }) {

  const [isOpen, setIsOpen] = useState(false);
const showMenu = () => {
  setIsOpen(true)
}


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
        <nav className="header__links" >
          <a className="header__link" href="/sign-up">Регистрация</a>
          <a className="header__link" href="/sign-in">Войти</a>
        </nav>
      ) : (
        <div>
        <button onClick={showMenu} className={`header__burger ${isOpen?"header__burger_opened":""}`}>
          <img alt="Логотип навигации" src={BurgerPath} className="burger-pic"/> 
        </button>
        <nav className={`header__links-in ${isOpen?" header__links-in_opened":""}`}>
        <button className={`close-menu ${isOpen?"close-menu_opened":""}`}>
          <img alt="Иконка закрытия меню" className="header__close-btn" src={CloseMenu}/> 
        </button>
          <a className="header__link-in" href="/">Главная</a>
          <a className="header__link-in" href="/movies">Фильмы</a>
          <a className="header__link-in" href="/saved-movies">Сохраненные фильмы</a>
          <a className="header__profile" href="/profile">
            <img
              src={ProfilePath}
              alt="Логотип профайла"
            />
          </a>
        </nav>
        <div className={`header__overlay ${isOpen?" header__overlay_opened":""}`}></div>
        </div>
      )}
    </header>
  );
}

export default Header;