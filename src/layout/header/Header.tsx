import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu, MenuItemPropsType} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

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
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #FCFCFC;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
`;