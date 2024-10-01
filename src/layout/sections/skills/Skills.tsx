import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justifyContent={"space-between"} wrap={"wrap"}>
                    <SkillsBlock>
                        <Text>I have a vast experience in the following web technologies:</Text>
                        <SkillsWrapper>
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
                        </SkillsWrapper>
                    </SkillsBlock>
                    <Icon
                        iconId={"undrawProjectComplited"}
                        width={"511"}
                        height={"414"}
                        viewBox={"0 0 511 414"}
                    />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    ${Container} {
        background-color: ${theme.colors.primaryBg};
    }
`;

const SkillsBlock = styled.div`
    align-content: center;
    max-width: 510px;
`;

const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 42px
`;

const Text = styled.p`
    margin-bottom: 40px;
`;



