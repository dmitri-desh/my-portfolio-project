import React from 'react';
import styled from "styled-components";
import {MainBanner} from "./banner/MainBanner";
import {Skills} from "./skills/Skills";

export const Main = () => {
    return (
        <StyledMain>
            <MainBanner />
            <Skills/>

        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #ffe5e4;
`;



