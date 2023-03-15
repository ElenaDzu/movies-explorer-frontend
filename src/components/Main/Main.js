import { React } from "react";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Tehcs";

function Landing() {
    
    return (
        <div className="landing">
            <Promo></Promo>
            <AboutProject></AboutProject>
            <NavTab></NavTab>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </div>
    );
}

export default Landing;