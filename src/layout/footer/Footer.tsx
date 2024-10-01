import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justifyContent={"space-around"} alignItems={"center"} wrap={"wrap"}>
                <CartLeft>
                    <Title>My social media links:</Title>
                    <Socials>
                        <SocialItem>
                            <SocialLink>
                                <Icon
                                    iconId={"linkedin"}
                                    height={"30"}
                                    width={"30"}
                                    viewBox={"0 0 30 30"}
                                />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon
                                    iconId={"whatsapp"}
                                    height={"30"}
                                    width={"30"}
                                    viewBox={"0 0 30 30"}
                                />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon
                                    iconId={"twitter"}
                                    height={"30"}
                                    width={"30"}
                                    viewBox={"0 0 30 30"}
                                />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon
                                    iconId={"gmail"}
                                    height={"30"}
                                    width={"30"}
                                    viewBox={"0 0 30 30"}
                                />
                            </SocialLink>
                        </SocialItem>
                    </Socials>
                </CartLeft>
                <CartRight>
                    <Title>More projects I’ve worked on</Title>
                    <FlexWrapper justifyContent={"center"} alignItems={"center"}>
                        <SocialLink>
                            <Icon
                                iconId={"github"}
                                height={"30"}
                                width={"30"}
                                viewBox={"0 0 30 30"}
                            />
                        </SocialLink>
                        <GithubText>
                            @<TextLink>dmitri-desh</TextLink> on github
                        </GithubText>
                    </FlexWrapper>
                </CartRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 175px 0;
`;

const CartLeft = styled.div`

`;

const CartRight = styled.div`
    
`;

const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: ${theme.colors.fontWhite};
    
    padding-bottom: 35px;
`;

const Socials = styled.ul`
    display: flex;
    gap: 30px;
`;

const SocialItem =styled.li`
    gap: 65px
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;

const GithubText = styled.span`
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.fontWhite};
    padding-left: 20px;
`;

const TextLink = styled.a`
    color: ${theme.colors.textLinkColor};
    
    &:hover {
        cursor: pointer;
    }
`;