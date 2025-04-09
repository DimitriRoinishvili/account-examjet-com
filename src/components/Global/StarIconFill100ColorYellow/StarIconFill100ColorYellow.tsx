import "./StarIconFill100ColorYellow.css";
import type {JSX} from "react";

export interface IStarIconFill100ColorYellowProps {
    fill?:
        | "0"
        | "10"
        | "20"
        | "30"
        | "40"
        | "50"
        | "60"
        | "70"
        | "80"
        | "90"
        | "100";
    color?: "yellow" | "gray";
    className?: string;
}

export const StarIconFill100ColorYellow = ({
                                               fill = "0",
                                               color = "yellow",
                                               className,
                                               ...props
                                           }: IStarIconFill100ColorYellowProps): JSX.Element => {
    const variantsClassName = "fill-" + fill + " color-" + color;

    return (
        <div
            className={
                "star-icon-fill-100-color-yellow " + className + " " + variantsClassName
            }
        >
            <img className="star-background" src="/images/global/star-background0.svg"/>
            <img className="star" src="/images/global/star0.svg"/>
        </div>
    );
};
