import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper wrap={"wrap"}>
                    <IconWrapper>
                        <Icon
                            iconId={"manStandingOnChats"}
                            width={"563"}
                            height={"412"}
                            viewBox={"0 0 563 412"}
                        />
                    </IconWrapper>
                    <FormWrapper>
                        <StyledForm>
                            <Field placeholder={"Enter email address"}/>
                            <Field as={"textarea"} placeholder={"Enter message..."}/>
                            <StyledButton type={"submit"}>
                                <StyledText>
                                    Send message
                                </StyledText>
                                <Icon
                                    iconId={"paperPlane"}
                                    width={"22"}
                                    height={"24"}
                                    viewBox={"0 0 22 24"}
                                />
                            </StyledButton>
                        </StyledForm>
                    </FormWrapper>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

`;

const IconWrapper = styled.div`

`;

const FormWrapper = styled.div`
    max-width: 620px;
    width: 100%;
`;

const StyledForm = styled.form`
    
   
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    
    textarea {
        resize: none;
        height: 160px;
    }
`;

const Field = styled.input`
    width: 100%;

    border: 1px solid ${theme.colors.borderColor};
    border-radius: 4px;
    padding: 12px 18px;
    height: 50px;

    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 ${theme.colors.borderColor}, 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: ${theme.colors.primaryBg};
    
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.fieldTextColor};
    
    &::placeholder {
        color: ${theme.colors.fieldTextColor};
    }
    
    &:focus-visible {
        outline: solid 1px ${theme.colors.fieldTextColor};
    }
`;

const StyledButton = styled.button`
    display: flex;
    border-radius: 4px;
    padding: 12px 24px;
    width: 215px;
    height: 50px;
    background: ${theme.colors.secondaryBg};
    gap: 20px;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;

const StyledText = styled.p`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.fontWhite};
`;