import "./ChevronDown.css";
import type {JSX} from "react";

export interface IChevronDownProps {
    className?: string;
}

export const ChevronDown = ({
                                className,
                                ...props
                            }: IChevronDownProps): JSX.Element => {
    return <img className={"chevron-down " + className} src="chevron-down.svg"/>;
};
