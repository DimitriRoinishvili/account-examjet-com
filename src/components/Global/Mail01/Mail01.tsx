import "./Mail01.css";
import type {JSX} from "react";

export interface IMail01Props {
    className?: string;
}

export const Mail01 = ({className, ...props}: IMail01Props): JSX.Element => {
    return <img className={"mail-01 " + className} src="mail-01.svg"/>;
};
