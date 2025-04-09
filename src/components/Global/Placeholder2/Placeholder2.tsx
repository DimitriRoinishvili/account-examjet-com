import "./Placeholder2.css";
import type {JSX} from "react";

export interface IPlaceholder2Props {
    className?: string;
}

export const Placeholder2 = ({
                                 className,
                                 ...props
                             }: IPlaceholder2Props): JSX.Element => {
    return (
        <img className={"placeholder-2 " + className} src="placeholder-2.svg"/>
    );
};
