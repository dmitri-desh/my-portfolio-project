import React from 'react';
import styled from "styled-components";
import {Project} from "../../../layout/sections/projects/project/Project";

type SlidePropsType = {
    imageSrc: string,
    title: string,
    href: string,
    buttonText: string
}

export const ProjectSlide = (props: SlidePropsType) => {
    return (
        <StyledSlide>
            <Project
                imageSrc={props.imageSrc}
                title={props.title}
                href={props.href}
                buttonText={props.buttonText}
            />
        </StyledSlide>
    );
};

const StyledSlide = styled.div`
    border: 1px solid red;
    max-width: 270px;
`;
