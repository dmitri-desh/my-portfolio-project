import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const MoonBtn = () => {
    return (
        <StyledMoonBtn>
            <Icon iconId={"moon"} width={"36"} height={"37"} viewBox={"0 0 36 37"} />
        </StyledMoonBtn>
    );
};

const StyledMoonBtn = styled.button`
    &:hover {
        cursor: pointer;
    }
`;