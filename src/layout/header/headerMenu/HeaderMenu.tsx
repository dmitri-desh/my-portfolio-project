import React from 'react';
import styled from "styled-components";
// import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

export type MenuItemPropsType = {
    name: string,
    isProjects: boolean
}

export const HeaderMenu = (props: {menuItems: Array<MenuItemPropsType>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) =>
                    <ListItem key={index}>
                        <Link href="">
                            {/*<Icon iconId={"gears"} width={"26"} height={"24"} viewBox={"0 0 26 24"}/>*/}
                            {item.name}
                            <Mask><span>{item.name}</span></Mask>
                            <Mask><span>{item.name}</span></Mask>
                        </Link>
                    </ListItem>
                )}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    font-size: 18px;
    font-weight: 400;
    
    ul {
        display: flex;
        gap: 30px;
    }
   
    margin: 24px 0;
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.fontBlack};
    
    & + & {
        top: 50%;
        
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const ListItem =styled.li`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
    }
    
    &:hover {
        &::before {
            transform: scale(1);
        }
        
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.accent};
            
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`;

const Link =styled.a`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: transparent;
`;