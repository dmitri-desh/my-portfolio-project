import React from 'react';
import styled from "styled-components";
import mainAva from "../../../assets/images/main-ava.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alignItems={"center"} justifyContent={"space-between"}>
                    <div>
                        <SmallText>Hi👋, I’m a</SmallText>
                        <MainTitle>software developer</MainTitle>
                        <Name>I’m Dmitry Deshko, a developer dedicated to making the world a better place one line of code at a time.</Name>
                        <StyledButton>
                            Hire me
                        </StyledButton>
                    </div>
                    <PhotoWrapper>
                        <Photo src={mainAva} alt={"Dmitry Deshko photo"}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background: radial-gradient(90.6% 78.78% at 93.96% 12.39%, rgba(220, 227, 228, 0.71) 0%, #FCFCFC 100%);
    
    display: flex;
`;

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0.18px;
    text-transform: capitalize;
    
    color: ${theme.colors.secondaryBg};
`;

const SmallText =styled.span`
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0.18px;
    color: ${theme.colors.secondaryBg};
`;

const StyledButton = styled.button`
    border-radius: 4px;
    padding: 8px 16px;
    width: 100px;
    height: 40px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    background: #e84949;
   
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.fontWhite};
    
    &:hover {
        cursor: pointer;
    }
`;

const Name= styled.h2`
    max-width: 550px;
    color: ${theme.colors.fontBlack};
    margin: 30px 0;
`;

const PhotoWrapper = styled.div`
    position: relative;
    
    &::before {
        content: "";
        width: 40px;
        height: 100px;
        position: absolute;
        top: -20px;
        left: -45px;
        background: repeating-linear-gradient(
                45deg,
                #000,
                ${theme.colors.zigzag} 2px,
                #fff 3px,
                #fff 15px
        );
        z-index: 5;
    }
`;

const Photo = styled.img`
    width: 345px;
    height: 390px;
    object-fit: cover;
`;