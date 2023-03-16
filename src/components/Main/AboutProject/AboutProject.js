import { React } from "react";
//import { Route, Switch } from "react-router-dom";

function AboutProject() {
    return (
        <div className="aboutproject">
           <h1 className="aboutproject aboutproject__title">О проекте</h1>
            <div className="aboutproject aboutproject__subtitle">
                <h2 className="aboutproject subtitle__text">Дипломный проект включал 5 этапов</h2>
                <h2 className="aboutproject subtitle__text">На выполнение диплома ушло 5 недель</h2>
            </div>
            <div className="aboutproject aboutproject__plan">
                <p className="aboutproject plan__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="aboutproject plan__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
           </div>
           <div className="aboutproject aboutproject__period">
                <p className="aboutproject period__text">1 неделя</p>
                <p className="aboutproject period__text">4 недели</p>
            </div>
            <div className="aboutproject aboutproject__part">
                <p className="aboutproject part__text">Back-end</p>
                <p className="aboutproject part__text">Front-end</p>
            </div>
        </div>
    );
}

export default AboutProject;