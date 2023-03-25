import { React } from "react";

function Techs() {
  return (
    <div className="techs" id="techs">
      <h3 className="techs__subtitle">Технологии</h3>
      <h1 className="techs__title">7 технологий</h1>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__items">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </div>
    </div>
  );
}

export default Techs;
