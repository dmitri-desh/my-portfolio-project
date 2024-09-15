import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact me</SectionTitle>
            <FlexWrapper>
                <Icon
                    iconId={"manStandingOnChats"}
                    width={"563"}
                    height={"412"}
                    viewBox={"0 0 563 412"}
                />
                <StyledForm>
                    <Field placeholder={"Enter email address"}/>
                    <Field as={"textarea"} placeholder={"Enter message..."}/>
                    <Button
                        buttonType={"submit"}
                        buttonText={"Send Message"}
                        iconId={"paperPlane"}
                        iconWidth={"22"}
                        iconHeight={"24"}
                        iconViewBox={"0 0 22 24"}
                    />
                </StyledForm>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: #58d131;
    min-width: 50vh;
`;

const StyledForm = styled.form`
    max-width: 620px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
`;

const Field = styled.input`

`;