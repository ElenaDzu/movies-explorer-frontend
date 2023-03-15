import { React } from "react";
//import { Route, Switch } from "react-router-dom";

function AboutProject() {
    return (
        <div className="aboutproject">
           <h1 className="aboutproject aboutproject-title">О проекте</h1>
            <div className="aboutproject aboutproject-subtitle">
                <h2 className="aboutproject subtitle-text">Дипломный проект включал 5 этапов</h2>
                <h2 className="aboutproject subtitle-text">На выполнение диплома ушло 5 недель</h2>
            </div>
            <div className="aboutproject aboutproject-plan">
                <p className="aboutproject plan-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="aboutproject plan-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
           </div>
           <div className="aboutproject aboutproject-period">
                <p className="aboutproject period-text">1 неделя</p>
                <p className="aboutproject period-text">4 недели</p>
            </div>
            <div className="aboutproject aboutproject-part">
                <p className="aboutproject part-text">Back-end</p>
                <p className="aboutproject part-text">Front-end</p>
            </div>
        </div>
    );
}

export default AboutProject;