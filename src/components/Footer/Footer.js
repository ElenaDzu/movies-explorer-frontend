import { React } from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__project">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__links">
        <p className="footer__date">&copy;2023</p>
        <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">
          Яндекс.Практикум
        </a>
        <a className="footer__link" href="https://github.com/" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
