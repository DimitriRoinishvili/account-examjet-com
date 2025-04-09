import "./MinusCircle.css";
import type {JSX} from "react";

export interface IMinusCircleProps {
    className?: string;
}

export const MinusCircle = ({
                                className,
                                ...props
                            }: IMinusCircleProps): JSX.Element => {
    return <img className={"minus-circle " + className} src="/images/global/minus-circle.svg"/>;
};
