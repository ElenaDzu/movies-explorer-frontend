import { React } from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h5 className="portfolio__name">Портфолио</h5>
      <nav className="portfolio__item">
        <a
          className="portfolio__item_link"
          href="https://github.com/ElenaDzu/russian-travel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Статичный сайт
        </a>
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
        <a
          className="portfolio__item_link"
          href="https://github.com/ElenaDzu/mesto-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Адаптивный сайт
        </a>
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
        <a
          className="portfolio__item_link"
          href="https://github.com/ElenaDzu/how-to-learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Одностраничное приложение
        </a>
        <a
          href="https://github.com/ElenaDzu/how-to-learn"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__link"
        >
          &#8599;
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
