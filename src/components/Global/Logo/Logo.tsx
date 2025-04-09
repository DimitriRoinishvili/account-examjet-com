import "./Logo.css";
import {Logomark} from "../Logomark/Logomark";
import type {JSX} from "react";

export interface ILogoProps {
    className?: string;
}

export const Logo = ({className, ...props}: ILogoProps): JSX.Element => {
    return (
        <div className={"logo " + className}>
            <div className="logo-wrap">
                <Logomark className="logomark-instance"></Logomark>
                <img className="logotype" src="/images/global/logotype0.svg"/>
            </div>
        </div>
    );
};
