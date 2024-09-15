import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type ButtonPropsType = {
    buttonType?: "button" | "submit" | "reset" | undefined,
    buttonText: string,
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
`;

const Text = styled.p`
    
`;