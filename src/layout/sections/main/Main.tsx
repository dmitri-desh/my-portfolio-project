import React from 'react';
import styled from "styled-components";
import mainAva from "../../../assets/images/main-ava.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={"center"} justifyContent={"space-around"} wrap={"wrap"}>
                <div>
                    <span>Hi👋, I’m a</span>
                    <MainTitle>software developer</MainTitle>
                    <Name>I’m Dmitry Deshko, a developer dedicated to making the world a better place one line of code at a time.</Name>
                    <Button
                        buttonText={"Hire me"}
                    />
                </div>

                <Photo src={mainAva} alt={"Dmitry Deshko photo"}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background: radial-gradient(90.6% 78.78% at 93.96% 12.39%, rgba(220, 227, 228, 0.71) 0%, #FCFCFC 100%);
    color: ${theme.colors.secondaryBg};
`;

const MainTitle = styled.h1`
    
`;

const Name= styled.h2`
    max-width: 550px;
`;

const Photo = styled.img`
    width: 345px;
    height: 390px;
    object-fit: cover;
`;