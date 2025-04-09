import "./Au.css";
import type {JSX} from "react";

export interface IAuProps {
    className?: string;
}

export const Au = ({className, ...props}: IAuProps): JSX.Element => {
    return (
        <div className={"au " + className}>
            <img className="vector" src="vector0.svg"/>
            <img className="group" src="group0.svg"/>
            <img className="group2" src="group1.svg"/>
            <img className="group3" src="group2.svg"/>
        </div>
    );
};
