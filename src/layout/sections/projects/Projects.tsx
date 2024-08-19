import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import templeImg from "../../../assets/images/temple.jpeg";
import afroGuyImg from "../../../assets/images/afro-guy.jpeg";
import dancerGirlImg from "../../../assets/images/dancer-girl.jpeg";
import mountingsImg from "../../../assets/images/mountings.jpeg";
import {Slider} from "../../../components/slider/Slider";

const menuItems = [
    "Story", "Post", "Banner", "Trailer", "Design", "More"
];

const projectsData = [
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: templeImg,
        projectType: "story"
    },
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: afroGuyImg,
        projectType: "post"
    },
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: dancerGirlImg,
        projectType: "banner"
    },
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: mountingsImg,
        projectType: "trailer"
    },
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: templeImg,
        projectType: "design"
    },
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: afroGuyImg,
        projectType: "more"
    },
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: dancerGirlImg,
        projectType: "story"
    },
    {
        buttonText: "Edit for you",
        href: "#",
        title: "Story motion for sale English courses",
        imageSrc: mountingsImg,
        projectType: "post"
    }
];

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={menuItems}/>
            <FlexWrapper direction={"column"} alignItems={"center"}>
                <Slider items={projectsData}/>
            </FlexWrapper>
            <FlexWrapper direction={"column"} alignItems={"center"}>
                <Slider items={projectsData}/>
            </FlexWrapper>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: #889eec;
`;