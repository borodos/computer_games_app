import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Input } from "@chakra-ui/react";
import { NavMenu } from "./NavMenu";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/NavBar.scss";
import videoProj1 from "../../assets/videoProj.mp4";
import videoProj2 from "../../assets/videoProj.webm";

export const NavBar = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authUserSlice.user);

    const showHeader = () => {
        if (!user?.isAuth) {
            return "hidden";
        } else {
            return "header";
        }
    };

    return (
        <header className={showHeader()}>
            <video className="header__video" autoPlay muted loop>
                <source src={videoProj1} type="video/mp4" />
                <source src={videoProj2} type="video/webm" />
            </video>
            <div className="header__wrapper">
                <h1 className="header__title" onClick={() => navigate("/")}>
                    MySoft
                </h1>

                <div className="header__seacrh-form">{/* <Input placeholder="Search..." disabled /> */}</div>
                <div className="header__menu-container">
                    <Button
                        type="button"
                        className="header__cart header__button"
                        badge={2}
                        onClick={() => navigate(`/users/${user.id}/cart`)}
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Button>

                    <div className="header__user">
                        <Link className="header__user-text" to={`/users/${user.id}`}>
                            {user?.firstName} {user?.secondName}
                        </Link>
                        <Avatar name={`${user?.firstName} ${user?.secondName}`} />
                    </div>
                    <NavMenu />
                </div>
            </div>
        </header>
    );
};
