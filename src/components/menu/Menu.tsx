import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Content</a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={"moon"} width={"36"} height={"37"} viewBox={"0 0 36 37"} />
                    </a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`;