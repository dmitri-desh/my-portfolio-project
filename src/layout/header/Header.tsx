import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu, MenuItemPropsType} from "../../components/menu/Menu";

const items: Array<MenuItemPropsType> = [
    {
        name: "Skills",
        isProjects: false
    },
    {
        name: "Projects",
        isProjects: true
    },
    {
        name: "Contact me",
        isProjects: false
    }
];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #acf497;
    display: flex;
    justify-content: space-between;
`;