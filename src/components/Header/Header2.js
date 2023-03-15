import { React } from "react";
import logoPath from "../../images/header-logom.svg";
import ProfilePath from "../../images/profile.svg";
//import { Route, Switch } from "react-router-dom";

function Header2() {
    return (
        <header className="header2">
        <a href="#">
        <img
          className="header2 header2__logo"
          src={logoPath}
          alt="Логотип проекта"
          />
        </a>
        <a className="header2__link" href="/фильмы">
        Фильмы
      </a>
      <a className="header2__link" href="/сохранфильмы">
      Сохраненные фильмы
    </a>
    <a href="#">
        <img
          className="header2 header2__profile"
          src={ProfilePath}
          alt="Логотип профайла"
          />
        </a>
        </header>
    );
}

export default Header2;