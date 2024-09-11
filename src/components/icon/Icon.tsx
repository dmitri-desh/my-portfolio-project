import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg
            width={props.width || "40"}
            height={props.height || "40"}
            viewBox={props.viewBox || "0 0 40 40"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` } />
        </svg>
    );
};