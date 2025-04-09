import "./ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault.css";
import {Placeholder2} from "../Placeholder2/Placeholder2";
import {Placeholder} from "../Placeholder/Placeholder";
import type {JSX} from "react";

export interface IButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefaultProps {
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
    className?: string;
}

export const ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault =
    ({
         iconTrailingSwap = <Placeholder2 className="placeholder-instance"/>,
         iconLeadingSwap = <Placeholder2 className="placeholder-instance"/>,
         iconTrailing = true,
         iconLeading = true,
         size = "sm",
         hierarchy = "primary",
         icon = "default",
         state = "default",
         className,
         ...props
     }: IButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefaultProps): JSX.Element => {
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
                    "buttons-button-size-lg-hierarchy-secondary-gray-icon-default-state-default " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                {iconLeading && <>{iconLeadingSwap}</>}
                <div className="text-padding">
                    <div className="text">Button CTA</div>
                </div>
                {iconTrailing && <>{iconTrailingSwap}</>}
            </div>
        );
    };
