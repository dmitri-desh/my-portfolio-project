import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu, MenuItemPropsType} from "./headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";

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
            <Container>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
`;