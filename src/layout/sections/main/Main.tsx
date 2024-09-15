import React from 'react';
import styled from "styled-components";
import mainAva from "../../../assets/images/main-ava.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";

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
    background-color: #98b2f4;
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