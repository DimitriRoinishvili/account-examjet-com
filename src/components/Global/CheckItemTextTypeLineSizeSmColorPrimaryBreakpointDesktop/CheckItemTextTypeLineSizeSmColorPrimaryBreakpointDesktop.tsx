import "./CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop.css";
import {
    CheckIconTypeLineSizeSmColorPrimary
} from "../CheckIconTypeLineSizeSmColorPrimary/CheckIconTypeLineSizeSmColorPrimary";
import type {JSX} from "react";

export interface ICheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktopProps {
    type?: "default" | "line" | "filled";
    size?: "sm" | "md" | "lg";
    color?: "primary" | "success";
    breakpoint?: "desktop" | "mobile";
    text?: string;
    className?: string;
}

export const CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop = ({
                                                                             type = "default",
                                                                             size = "sm",
                                                                             color = "primary",
                                                                             breakpoint = "desktop",
                                                                             text = "All features and premium support",
                                                                             className,
                                                                             ...props
                                                                         }: ICheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktopProps): JSX.Element => {
    const variantsClassName =
        "type-" +
        type +
        " size-" +
        size +
        " color-" +
        color +
        " breakpoint-" +
        breakpoint;

    return (
        <div
            className={
                "check-item-text-type-line-size-sm-color-primary-breakpoint-desktop " +
                className +
                " " +
                variantsClassName
            }
        >
            <CheckIconTypeLineSizeSmColorPrimary
                type="line"
                size="sm"
                className="check-icon-instance"
            ></CheckIconTypeLineSizeSmColorPrimary>
            <div className="text-wrap">
                <div className="text">{text} </div>
            </div>
        </div>
    );
};
