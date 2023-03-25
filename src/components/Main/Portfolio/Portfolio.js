import { React } from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <h5 className="portfolio__name">Портфолио</h5>
      <nav className="portfolio__item">
        Статичный сайт
        <a
          href="https://github.com/ElenaDzu/russian-travel"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__link"
        >
          &#8599;
        </a>
      </nav>
      <nav className="portfolio__item">
        Адаптивный сайт
        <a
          href="https://github.com/ElenaDzu/mesto-react"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__link"
        >
          &#8599;
        </a>
      </nav>
      <nav className="portfolio__item">
        Одностраничное приложение
        <a
          href="https://github.com/ElenaDzu/how-to-learn"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__link"
        >
          &#8599;
        </a>
      </nav>
    </div>
  );
}

export default Portfolio;
