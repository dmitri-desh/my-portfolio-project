import React from 'react';
import styled from "styled-components";
import {ProjectSlide} from "./slide/ProjectSlide";
import {FlexWrapper} from "../FlexWrapper";

type SlidePropsType = {
    imageSrc: string,
    title: string,
    href: string,
    buttonText: string
}

type SliderPropsType = {
    items: Array<SlidePropsType>
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            <FlexWrapper>
                {props.items.map((item, index) => (
                    <ProjectSlide
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        href={item.href}
                        buttonText={item.buttonText}
                    />
                ))}
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: rgb(129, 23, 4);
    }
`;