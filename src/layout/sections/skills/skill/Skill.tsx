import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string,
    iconWidth?: string,
    iconHeight?: string,
    iconViewBox?:string,
    title:string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon
                iconId={props.iconId}
                width={props.iconWidth}
                height={props.iconHeight}
                viewBox={props.iconViewBox}
            />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 22%;
    background-color: #98b2f4;
    margin: 10px;
`;

const SkillTitle = styled.h3`

`;
