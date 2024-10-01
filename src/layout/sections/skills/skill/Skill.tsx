import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import icons from "../../../../assets/images/icons-sprite.svg"

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
            <FlexWrapper flexDirection={"column"} alignItems={"center"}>
                <IconWrapper>
                    <Icon
                        iconId={props.iconId}
                        width={props.iconWidth}
                        height={props.iconHeight}
                        viewBox={props.iconViewBox}
                    />
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 80px;
    height: 105px;
`;

const IconWrapper = styled.div`
    position: relative;
    
       
    // &::before {
    //     content: "";
    //     display: inline-block;
    //     width: 75px;
    //     height: 75px;
    //     background: url("${icons}#poligon") no-repeat center;
    //     background-size: contain;
    //
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     transform-origin: top left;
    // }
`;

const SkillTitle = styled.h3`
    margin: 5px 10px 0;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
`;
