import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";

type ProjectPropsType = {
    imageSrc: string,
    title: string,
    href: string,
    buttonText: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.imageSrc} alt={""}/>
            <Title>{props.title}</Title>
            <Button text={props.buttonText}/>
            <a href={props.href}>see preview</a>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #fa7f7f;
   
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h3`

`;