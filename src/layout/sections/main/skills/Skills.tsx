import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            {/*    <Icon iconId={"ps"} width={"75"} height={"75"} viewBox={"0 0 75 75"} />*/}
            {/*    <h3>Photoshop</h3>*/}
            {/*</Skill>*/}
            {/*<Skill>*/}
            {/*    <Icon iconId={"ae"} width={"75"} height={"75"} viewBox={"0 0 75 75"} />*/}
            {/*    <h3>After Effects</h3>*/}
            {/*</Skill>*/}
            {/*<Skill>*/}
            {/*    <Icon iconId={"ai"} width={"75"} height={"75"} viewBox={"0 0 75 75"} />*/}
            {/*    <h3>Illustrator</h3>*/}
            {/*</Skill>*/}
            {/*<Skill>*/}
            {/*    <Icon iconId={"figma"} width={"75"} height={"75"} viewBox={"0 0 75 75"} />*/}
            {/*    <h3>Figma</h3>*/}
            {/*</Skill>*/}
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    background-color: #f4be79;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, auto));
    column-gap: 14px;
    row-gap: 20px;
    
    //height: 100vh;
    //grid-template-columns: repeat(4, 161px);
    //grid-auto-rows: minmax(124px, auto);
    //column-gap: 14px;
    //row-gap: 20px;
    //justify-content: center;
    //align-content: center;
    //
    //@media screen and (max-width: 792px) and (orientation: portrait) {
    //    grid-template-columns: repeat(2,  1fr); //270px);
    //    grid-auto-rows: minmax(208px, auto);
    //    column-gap: 22px;
    //    row-gap: 20px;
    //}
    //
    //@media screen and (max-width: 425px) {
    //    grid-template-columns: repeat(2, 1fr); //146px);
    //    grid-auto-rows: minmax(112px, auto);
    //    column-gap: 12px;
    //    row-gap: 10px;
    //    align-content: start;
    //}
    
    
`;
