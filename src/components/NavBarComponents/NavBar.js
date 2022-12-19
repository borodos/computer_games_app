import { faBars, faCartPlus, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@chakra-ui/react";
import { NavMenu } from "./NavMenu";

import "../../styles/NavBar.scss";
import videoProj1 from "../../assets/videoProj.mp4";
import videoProj2 from "../../assets/videoProj.webm";

export const NavBar = () => {
    return (
        <header className="header">
            <video className="header__video" autoPlay muted loop>
                <source src={videoProj1} type="video/mp4" />
                <source src={videoProj2} type="video/webm" />
            </video>
            <div className="header__wrapper">
                <h1 className="header__title">MySoft</h1>

                <div className="header__seacrh-form">
                    <Button type="button" className="header__cart header__button">
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                    <Input placeholder="Search..." />
                </div>
                <div className="header__menu-container">
                    <NavMenu />
                </div>
            </div>
        </header>
    );
};
