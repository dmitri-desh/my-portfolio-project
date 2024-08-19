import React from 'react';
import styled from "styled-components";
import {MainBanner} from "./mainBanner/MainBanner";
import {Skills} from "./skills/Skills";

export const Main = () => {
    return (
        <StyledMain>
            <MainBanner />
            <Skills/>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #ffe5e4;
`;



