import "./CheckCircle.css";
import type {JSX} from "react";

export interface ICheckCircleProps {
    className?: string;
}

export const CheckCircle = ({
                                className,
                                ...props
                            }: ICheckCircleProps): JSX.Element => {
    return <img className={"check-circle " + className} src="/images/global/check-circle.svg"/>;
};
