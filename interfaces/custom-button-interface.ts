import { MouseEventHandler } from "react";

export interface customButtonProp {
    title:string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'submit' | 'button';
    textStyles?:string
    rightIcon?:string;
    isDisabled?: boolean
}