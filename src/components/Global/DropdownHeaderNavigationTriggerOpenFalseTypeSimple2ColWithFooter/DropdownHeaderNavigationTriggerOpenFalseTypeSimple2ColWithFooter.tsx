import "./DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter.css";
import {Placeholder} from "../Placeholder/Placeholder";
import {ChevronDown} from "../ChevronDown/ChevronDown";
import {
    ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault";
import type {JSX} from "react";

export interface IDropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooterProps {
    open?: "false" | "true";
    type?:
        | "simple"
        | "featured-card"
        | "simple-with-footer"
        | "2-col-with-links-and-footer"
        | "simple-2-col"
        | "featured-posts"
        | "simple-2-col-with-footer";
    text?: string;
    className?: string;
}

export const DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter =
    ({
         open = "false",
         type = "simple",
         text = "undefined",
         className,
         ...props
     }: IDropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooterProps): JSX.Element => {
        const variantsClassName = "open-" + open + " type-" + type;

        return (
            <div
                className={
                    "dropdown-header-navigation-trigger-open-false-type-simple-2-col-with-footer " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                <ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault
                    iconLeadingSwap={<Placeholder className="placeholder-instance"/>}
                    iconTrailingSwap={<ChevronDown className="chevron-down-instance"/>}
                    iconLeading={false}
                    size="lg"
                    hierarchy="link-gray"
                    text="Resources"
                    className="buttons-button-instance"
                ></ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault>
            </div>
        );
    };
