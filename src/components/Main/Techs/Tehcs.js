import { React } from "react";
//import { Route, Switch } from "react-router-dom";

function Techs() {
    return (
        <div className="techs">
            <h3 className="techs techs-subtitle">Технологии</h3>
            <h1 className="techs techs-title">7 технологий</h1>
            <p className="techs techs-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
           <div className="techs techs-items">
                <li className="techs techs-item">HTML</li>
                <li className="techs techs-item">CSS</li>
                <li className="techs techs-item">JS</li>
                <li className="techs techs-item">React</li>
                <li className="techs techs-item">Git</li>
                <li className="techs techs-item">Express.js</li>
                <li className="techs techs-item">mongoDB</li>
            </div>
        </div>
    );
}

export default Techs;