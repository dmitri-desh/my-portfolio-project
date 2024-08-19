import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {MoonBtn} from "../../components/moonBtn/MoonBtn";

const menuItems = [ "Home", "Projects", "About", "Content" ];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>
            <MoonBtn/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #aff499;
    display: flex;
    justify-content: space-between;
`;