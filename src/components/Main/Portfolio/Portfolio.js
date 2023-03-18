import { React } from "react";
//import { Route, Switch } from "react-router-dom";

function Portfolio() {
    return (
        <div className="portfolio">
            <h5 className="portfolio__name">Портфолио</h5>
            <nav className="portfolio__item">Статичный сайт<span className="portfolio__span">&#8599;</span></nav>
            <nav className="portfolio__item">Адаптивный сайт<span className="portfolio__span">&#8599;</span></nav>
            <nav className="portfolio__item">Одностраничное приложение<span className="portfolio__span">&#8599;</span></nav>
        </div>
    );
}

export default Portfolio;