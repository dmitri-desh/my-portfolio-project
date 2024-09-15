import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <SkillsText>I have a vast experience in the following web technologies:</SkillsText>
            <FlexWrapper justifyContent={"space-around"} wrap={"wrap"}>
                <FlexWrapper wrap={"wrap"} alignItems={"center"} justifyContent={"space-between"}>
                    <Skill
                        iconId={"html5"}
                        iconWidth={"44"}
                        iconHeight={"44"}
                        iconViewBox={"0 0 44 44"}
                        title={"HTML 5"}
                    />
                    <Skill
                        iconId={"css3"}
                        iconWidth={"53"}
                        iconHeight={"53"}
                        iconViewBox={"0 0 53 53"}
                        title={"CSS3"}
                    />
                    <Skill
                        iconId={"js"}
                        iconWidth={"45"}
                        iconHeight={"50"}
                        iconViewBox={"0 0 45 50"}
                        title={"JavaScript"}
                    />
                    <Skill
                        iconId={"bootstrap4"}
                        iconWidth={"40"}
                        iconHeight={"40"}
                        iconViewBox={"0 0 40 40"}
                        title={"Bootstrap"}
                    />
                    <Skill
                        iconId={"html5"}
                        iconWidth={"44"}
                        iconHeight={"44"}
                        iconViewBox={"0 0 44 44"}
                        title={"HTML 5"}
                    />
                    <Skill
                        iconId={"css3"}
                        iconWidth={"53"}
                        iconHeight={"53"}
                        iconViewBox={"0 0 53 53"}
                        title={"CSS3"}
                    />
                    <Skill
                        iconId={"js"}
                        iconWidth={"45"}
                        iconHeight={"50"}
                        iconViewBox={"0 0 45 50"}
                        title={"JavaScript"}
                    />
                    <Skill
                        iconId={"bootstrap4"}
                        iconWidth={"40"}
                        iconHeight={"40"}
                        iconViewBox={"0 0 40 40"}
                        title={"Bootstrap"}
                    />
                </FlexWrapper>
                <Icon
                    iconId={"undrawProjectComplited"}
                    width={"511"}
                    height={"414"}
                    viewBox={"0 0 511 414"}
                />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
    background-color: #edb0cf;
`;

const SkillsText = styled.p`

`;


