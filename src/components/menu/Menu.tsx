import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export type MenuItemPropsType = {
    name: string,
    isProjects: boolean
}

export const Menu = (props: {menuItems: Array<MenuItemPropsType>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) =>
                    <li key={index}>
                        <a href="">
                            <Icon iconId={"gears"} width={"26"} height={"24"} viewBox={"0 0 26 24"}/>
                            {item.name}
                        </a>
                    </li>
                )}
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