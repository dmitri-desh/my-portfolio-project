import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

type ButtonPropsType = {
    buttonType?: "button" | "submit" | "reset" | undefined,
    buttonText: string,
    buttonBgcColor?: string,
    iconId?: string,
    iconWidth?: string,
    iconHeight?: string,
    iconViewBox?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton type={props.buttonType || "button"}>
            <Text>{props.buttonText}</Text>
            <Icon
                iconId={props.iconId || ""}
                width={props.iconWidth}
                height={props.iconHeight}
                viewBox={props.iconViewBox}
            />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    display: flex;
    :hover {
        cursor: pointer;
    }
    border: 2px solid ${theme.colors.fontWhite};
    border-radius: 4px;
    padding: 8px 16px 14px 16px;
    width: 131px;
    height: 42px;
    justify-content: center;
`;

const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: ${theme.colors.fontWhite};
`;