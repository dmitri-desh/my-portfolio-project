import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../../components/FlexWrapper";

const skillsData = [
    {
        iconId: "ps",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "Photoshop"
    },
    {
        iconId: "ae",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "After Effects"
    },
    {
        iconId: "ai",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "Illustrator"
    },
    {
        iconId: "figma",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "Figma"
    },
    {
        iconId: "ps",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "Photoshop"
    },
    {
        iconId: "ae",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "After Effects"
    },
    {
        iconId: "ai",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "Illustrator"
    },
    {
        iconId: "figma",
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        title: "Figma"
    }
];

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap={"wrap"} justifyContent={"space-between"}>
                {skillsData.map((item, index) => (
                    <Skill
                        key={index}
                        iconId={item.iconId}
                        title={item.title}
                        width={item.width}
                        height={item.height}
                        viewBox={item.viewBox}
                    />
                ))}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    background-color: #f4be79;
    min-height: 100vh;
    
    
    
    //display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(160px, auto));
    //column-gap: 14px;
    //row-gap: 20px;
    
    //height: 100vh;
    //grid-template-columns: repeat(4, 161px);
    //grid-auto-rows: minmax(124px, auto);
    //column-gap: 14px;
    //row-gap: 20px;
    //justify-content: center;
    //align-content: center;
    //
    //@media screen and (max-width: 792px) and (orientation: portrait) {
    //    grid-template-columns: repeat(2,  1fr); //270px);
    //    grid-auto-rows: minmax(208px, auto);
    //    column-gap: 22px;
    //    row-gap: 20px;
    //}
    //
    //@media screen and (max-width: 425px) {
    //    grid-template-columns: repeat(2, 1fr); //146px);
    //    grid-auto-rows: minmax(112px, auto);
    //    column-gap: 12px;
    //    row-gap: 10px;
    //    align-content: start;
    //}
    
    
`;
