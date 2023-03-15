import { React } from "react";
import Image from "../../../images/student.svg"
//import { Route, Switch } from "react-router-dom";

function AboutMe() {
    return (
        <div className="aboutme">
           <h3 className="aboutme aboutme-subtitle">Студент</h3>
           <div className="aboutme aboutme-card">
                <div className="aboutme aboutme-text">
                    <h1 className="aboutme aboutme-title">Виталий</h1>
                    <h3 className="aboutme aboutme-subtitle">Фронтенд-разработчик, 30 лет</h3>
                    <p className="aboutme aboutme-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <p className="aboutme aboutme-place">Github</p>
                </div>
                <img className="aboutme aboutme-image" src={Image} alt="фото студента"></img>
            </div>
        </div>
    );
}

export default AboutMe;