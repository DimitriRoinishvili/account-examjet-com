import "./PlusCircle.css";
import type {JSX} from "react";

export interface IPlusCircleProps {
    className?: string;
}

export const PlusCircle = ({
                               className,
                               ...props
                           }: IPlusCircleProps): JSX.Element => {
    return <img className={"plus-circle " + className} src="/images/global/plus-circle.svg"/>;
};
