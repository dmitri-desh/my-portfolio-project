import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import photo from "../../../../assets/images/ava-photo.png";
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {Link} from "../../../../components/Link";

export const MainBanner = () => {
    return (
        <StyledBanner>
            <FlexWrapper alignItems={"center"} justifyContent={"space-around"}>
                <Photo src={photo} alt={"ava photo"}/>
                <div>
                    <div>
                        <Name>I’m Alireza Kavousy nezjad</Name>
                        <MainText>Draft is a revolutionary mobile app built to help you manage your business easily and
                            save your money.</MainText>
                    </div>
                    <div>
                        <Button text={"See Projects"}/>
                        <Link text={"Download Resume"} href={"#"}/>
                    </div>
                </div>
            </FlexWrapper>
        </StyledBanner>
    );
};

const StyledBanner = styled.div`

`;

const Name = styled.h3`
    background-color: #9898ea;
`;


const MainText = styled.span`
    background-color: #abf695;
`;

const Photo = styled.img`
    width: 401px;
    height: 401px;
    object-fit: cover;
`;