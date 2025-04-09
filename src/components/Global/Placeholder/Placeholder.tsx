import "./Placeholder.css";
import type {JSX} from "react";

export interface IPlaceholderProps {
    className?: string;
}

export const Placeholder = ({
                                className,
                                ...props
                            }: IPlaceholderProps): JSX.Element => {
    return <img className={"placeholder " + className} src="placeholder.svg"/>;
};
