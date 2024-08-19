import React from 'react';
import styled from "styled-components";

type LinkPropsType = {
    href: string,
    text: string
}

export const Link = (props: LinkPropsType) => {
    return (
        <StyledLink href={props.href}>
            {props.text}
        </StyledLink>
    );
};

const StyledLink = styled.a`

`;