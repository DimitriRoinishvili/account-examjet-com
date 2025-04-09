import "./CheckIconTypeLineSizeSmColorPrimary.css";
import {CheckCircle} from "../CheckCircle/CheckCircle";
import type {JSX} from "react";

export interface ICheckIconTypeLineSizeSmColorPrimaryProps {
    type?: "default" | "line" | "filled";
    size?: "xs" | "sm" | "md" | "lg";
    color?: "primary" | "gray" | "success";
    className?: string;
}

export const CheckIconTypeLineSizeSmColorPrimary = ({
                                                        type = "default",
                                                        size = "xs",
                                                        color = "primary",
                                                        className,
                                                        ...props
                                                    }: ICheckIconTypeLineSizeSmColorPrimaryProps): JSX.Element => {
    const variantsClassName =
        "type-" + type + " size-" + size + " color-" + color;

    return (
        <div
            className={
                "check-icon-type-line-size-sm-color-primary " +
                className +
                " " +
                variantsClassName
            }
        >
            <CheckCircle className="check-circle-instance"></CheckCircle>
        </div>
    );
};
