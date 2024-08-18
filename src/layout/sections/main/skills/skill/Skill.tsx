import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"ps"} width={"75"} height={"75"} viewBox={"0 0 75 75"} />
            <h3>Photoshop</h3>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: #b3eaea;
`;