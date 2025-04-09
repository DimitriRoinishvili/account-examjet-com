import "./BadgeSizeMdTypePillColorIconFalseColorGray.css";
import {ArrowUp} from "../ArrowUp/ArrowUp";
import {ArrowRight} from "../ArrowRight/ArrowRight";
import {Au} from "../Au/Au";
import type {JSX} from "react";

export interface IBadgeSizeMdTypePillColorIconFalseColorGrayProps {
    iconLeadingSwap?: JSX.Element;
    iconTrailingSwap?: JSX.Element;
    flagSwap?: JSX.Element;
    size?: "sm" | "md" | "lg";
    type?: "pill-color" | "pill-outline" | "badge-color" | "badge-modern";
    icon?:
        | "false"
        | "dot"
        | "country"
        | "x-close"
        | "avatar"
        | "icon-trailing"
        | "icon-leading"
        | "only";
    color?:
        | "gray"
        | "brand"
        | "error"
        | "warning"
        | "success"
        | "blue-light"
        | "blue"
        | "indigo"
        | "purple"
        | "pink"
        | "orange"
        | "blue-gray"
        | "gray-blue";
    text?: string;
    className?: string;
}

export const BadgeSizeMdTypePillColorIconFalseColorGray = ({
                                                               iconLeadingSwap = <ArrowUp
                                                                   className="arrow-up-instance"/>,
                                                               iconTrailingSwap = <ArrowRight
                                                                   className="arrow-right-instance"/>,
                                                               flagSwap = <Au className="au-instance"/>,
                                                               size = "sm",
                                                               type = "pill-color",
                                                               icon = "false",
                                                               color = "gray",
                                                               text = "Label",
                                                               className,
                                                               ...props
                                                           }: IBadgeSizeMdTypePillColorIconFalseColorGrayProps): JSX.Element => {
    const variantsClassName =
        "size-" + size + " type-" + type + " icon-" + icon + " color-" + color;

    return (
        <div
            className={
                "badge-size-md-type-pill-color-icon-false-color-gray " +
                className +
                " " +
                variantsClassName
            }
        >
            <div className="text">{text} </div>
        </div>
    );
};
