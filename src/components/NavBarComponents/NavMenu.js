import { IconButton, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../styles/NavBar.scss";

export const NavMenu = () => {
    return (
        <Menu>
            <MenuButton
                className="header__menu header__button"
                py="15"
                px="20"
                as={IconButton}
                icon={<FontAwesomeIcon icon={faBars} />}
            />
            <Portal>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Portal>
        </Menu>
    );
};
