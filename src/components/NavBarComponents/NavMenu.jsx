import { IconButton, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "../../styles/NavBar.scss";
import { useSelector } from "react-redux";

export const NavMenu = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authUserSlice.user);

    return (
        <Menu>
            <MenuButton
                className="header__menu header__button"
                py="15"
                px="20"
                as={IconButton}
                icon={<FontAwesomeIcon icon={faBars} />}
            />
            <Portal className="header__portal">
                <MenuList className="header__menu-list">
                    <MenuItem onClick={() => navigate(`/users/${user.id}`)}>My Profile</MenuItem>
                    <MenuItem onClick={() => navigate(`/users/${user.id}/cart`)}>My cart</MenuItem>
                </MenuList>
            </Portal>
        </Menu>
    );
};
