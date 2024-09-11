import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Skills</a></li>
                <li>
                    <a href="">
                        <Icon iconId={'gearsRed'} width={'26.4'} height={'24'} viewBox={'0 0 26.4 24'}/>
                        Projects
                    </a>
                </li>
                <li><a href="">Contact me</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
    background-color: #f3a7bb;
`;