import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon
                iconId={props.iconId}
                width={props.width || "75"}
                height={props.height || "75"}
                viewBox={props.viewBox || "0 0 75 75"}
            />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: #b3eaea;
    width: 20%;
    margin: 10px;
`;

const SkillTitle = styled.h3`
    background-color: #35c306;
`;