import { React } from "react";

//import { Route, Switch } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__links">
                <p className="footer__date">&copy;2023</p>
                <a className="footer__link" href="#">Яндекс.Практикум</a>
                <a className="footer__link" href="#">Github</a>
            </div>
    </footer>
    );
}

export default Footer;