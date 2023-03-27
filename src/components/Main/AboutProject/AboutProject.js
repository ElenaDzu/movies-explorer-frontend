import { React } from "react";

function AboutProject() {
  return (
    <section className="aboutproject" id="aboutproject">
      <h1 className="aboutproject__title">О проекте</h1>
      <div className="aboutproject__subtitle">
        <div className="aboutproject__description">
          <h2 className="subtitle__text">Дипломный проект включал 5 этапов</h2>
          <p className="plan__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutproject__description">
          <h2 className="subtitle__text">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="plan__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutproject__period">
        <p className="period__text">1 неделя</p>
        <p className="period__text">4 недели</p>
      </div>
      <div className="aboutproject__part">
        <p className="part__text">Back-end</p>
        <p className="part__text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
