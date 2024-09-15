import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/button/Button";

type ProjectPropsType = {
    text: string,
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={""}/>
            <Text>{props.text}</Text>
            <Button
                buttonText={"Learn More"}
                iconId={"arrow"}
                iconWidth={"21"}
                iconHeight={"20"}
                iconViewBox={"0 0 21 20"}
            />
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #262C4D;
    max-width: 380px;
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
`;

const Text = styled.p`

`;