import "./BadgeSizeLgTypePillColorIconFalseColorBrand.css";
import {ArrowUp} from "../ArrowUp/ArrowUp";
import {ArrowRight} from "../ArrowRight/ArrowRight";
import {Au} from "../Au/Au";
import type {JSX} from "react";

export interface IBadgeSizeLgTypePillColorIconFalseColorBrandProps {
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
    isPopular?: boolean;
    className?: string;
}

export const BadgeSizeLgTypePillColorIconFalseColorBrand = ({
                                                                iconLeadingSwap = <ArrowUp
                                                                    className="arrow-up-instance"/>,
                                                                iconTrailingSwap = <ArrowRight
                                                                    className="arrow-right-instance"/>,
                                                                flagSwap = <Au className="au-instance"/>,
                                                                size = "sm",
                                                                type = "pill-color",
                                                                icon = "false",
                                                                color = "gray",
                                                                isPopular = false,
                                                                text = "Label",
                                                                className,
                                                                ...props
                                                            }: IBadgeSizeLgTypePillColorIconFalseColorBrandProps): JSX.Element => {
    const variantsClassName =
        "size-" + size + " type-" + type + " icon-" + icon + " color-" + color;

    return (
        <div>
            {isPopular && <div className={
                "badge-size-lg-type-pill-color-icon-false-color-brand " +
                className +
                " " +
                variantsClassName}>
                <div className="text">{text}</div>
            </div>}
        </div>
    );
};
