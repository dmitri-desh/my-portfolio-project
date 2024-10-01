import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Project} from "./project/Project";
import {FlexWrapper} from "../../../components/FlexWrapper";
import project from "../../../assets/images/project.png";
import challenge from "../../../assets/images/challenge.png";
import map from "../../../assets/images/map.png";
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>
                    <Icon iconId={"gears"} width={"26"} height={"24"} viewBox={"0 0 26 24"}/>
                    Projects
                </SectionTitle>
                <ProjectsText>
                    A select number of projects
                </ProjectsText>
                <FlexWrapper justifyContent={"space-between"} wrap={"wrap"}>
                    <Project
                        text={"Made a social media manager template using HTML 5, CSS and JS."}
                        src={project}
                    />
                    <Project
                        text={"Made a simple card page using HTML 5 and  CSS 3"}
                        src={challenge}
                    />
                    <Project
                        text={"Made an I.P address tracking website."}
                        src={map}
                    />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    color: rgba(255, 255, 255, 0.87);
    line-height: normal;
`;

const ProjectsText = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    padding: 8px 0 24px;
`;