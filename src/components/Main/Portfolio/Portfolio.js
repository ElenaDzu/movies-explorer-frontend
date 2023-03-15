import { React } from "react";
//import { Route, Switch } from "react-router-dom";

function Portfolio() {
    return (
        <div className="portfolio">
            <h5 className="portfolio portfolio-name">Портфолио</h5>
            <nav className="portfolio portfolio-item">Статичный сайт<span className="portfolio portfolio-span">&#8599;</span></nav>
            <nav className="portfolio portfolio-item">Адаптивный сайт<span className="portfolio portfolio-span">&#8599;</span></nav>
            <nav className="portfolio portfolio-item">Одностраничное приложение<span className="portfolio portfolio-span">&#8599;</span></nav>
        </div>
    );
}

export default Portfolio;