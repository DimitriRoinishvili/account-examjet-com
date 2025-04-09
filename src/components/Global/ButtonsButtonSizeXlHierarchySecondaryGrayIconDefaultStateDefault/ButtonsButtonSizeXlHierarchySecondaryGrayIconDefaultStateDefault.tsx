import "./ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault.css";
import {Placeholder2} from "../Placeholder2/Placeholder2";
import {Placeholder} from "../Placeholder/Placeholder";
import type {JSX} from "react";

export interface IButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefaultProps {
    iconTrailingSwap?: JSX.Element;
    iconLeadingSwap?: JSX.Element;
    iconTrailing?: boolean;
    iconLeading?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "2-xl";
    hierarchy?:
        | "primary"
        | "secondary-gray"
        | "secondary-color"
        | "tertiary-gray"
        | "tertiary-color"
        | "link-gray"
        | "link-color";
    icon?: "default" | "dot-leading" | "only";
    state?: "default" | "hover" | "focused" | "disabled";
    text?: string;
    className?: string;
}

export const ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault =
    ({
         iconTrailingSwap = <Placeholder2 className="placeholder-instance"/>,
         iconLeadingSwap = <Placeholder2 className="placeholder-instance"/>,
         iconTrailing = true,
         iconLeading = true,
         size = "sm",
         hierarchy = "primary",
         icon = "default",
         state = "default",
         text = "Button CTA",
         className,
         ...props
     }: IButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefaultProps): JSX.Element => {
        const variantsClassName =
            "size-" +
            size +
            " hierarchy-" +
            hierarchy +
            " icon-" +
            icon +
            " state-" +
            state;

        return (
            <div
                className={
                    "buttons-button-size-xl-hierarchy-secondary-gray-icon-default-state-default " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                {iconLeading && <>{iconLeadingSwap}</>}
                <div className="text-padding">
                    <div className="text">{text} </div>
                </div>
                {iconTrailing && <>{iconTrailingSwap}</>}
            </div>
        );
    };
