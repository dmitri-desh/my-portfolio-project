import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justifyContent={"space-around"} alignItems={"center"}>
                <CartLeft>
                    <Title>My social media links:</Title>
                    <Socials>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"linkedin"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"whatsapp"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"twitter"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"gmail"}/>
                            </SocialLink>
                        </SocialItem>
                    </Socials>
                </CartLeft>
                <CartRight>
                    <Title>More projects I’ve worked on</Title>
                    <SocialLink>
                        <Icon iconId={"github"}/>
                    </SocialLink>
                    <GithubText>
                        @<SocialLink>dmitri-desh</SocialLink> on github
                    </GithubText>
                </CartRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #343D68;
    min-height: 30vh;
`;

const CartLeft = styled.div`

`;

const CartRight = styled.div`
    
`;

const Title = styled.h3`

`;

const Socials = styled.ul`
    display: flex;
    gap: 30px;
`;

const SocialItem =styled.li`

`;

const SocialLink = styled.a`
    
`;

const GithubText = styled.span`

`;