import { React } from "react";

function NavTab() {
    return (
        <nav className="navtab">
            <a className="navtab__link" href="/опроекте">О проекте</a>
            <a className="navtab__link" href="/технологии">Технологии</a>
            <a className="navtab__link" href="/технологии">Студент</a>
        </nav>
    );
}

export default NavTab;