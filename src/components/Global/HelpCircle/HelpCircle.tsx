import "./HelpCircle.css";
import type {JSX} from "react";

export interface IHelpCircleProps {
    className?: string;
}

export const HelpCircle = ({
                               className,
                               ...props
                           }: IHelpCircleProps): JSX.Element => {
    return <img className={"help-circle " + className} src="help-circle.svg"/>;
};
