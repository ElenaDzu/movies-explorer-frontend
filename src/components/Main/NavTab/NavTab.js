import { React } from "react";
//import { Route, Switch } from "react-router-dom";

function NavTab() {
    return (
        <nav className="navtab">
            <a className="navtab navtab-link" href="/опроекте">О проекте</a>
            <a className="navtab navtab-link" href="/технологии">Технологии</a>
            <a className="navtab navtab-link" href="/технологии">Студент</a>
        </nav>
    );
}

export default NavTab;