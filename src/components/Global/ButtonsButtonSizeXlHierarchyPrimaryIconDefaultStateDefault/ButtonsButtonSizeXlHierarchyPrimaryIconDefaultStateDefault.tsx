import "./ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault.css";
import type {JSX} from "react";
import {Placeholder2} from '@/components/Global/Placeholder2/Placeholder2';
import Link from "next/link";

export interface IButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefaultProps {
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

export const ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault = ({
                                                                               iconTrailingSwap = <Placeholder2
                                                                                   className="placeholder-instance"/>,
                                                                               iconLeadingSwap = <Placeholder2
                                                                                   className="placeholder-instance"/>,
                                                                               iconTrailing = true,
                                                                               iconLeading = true,
                                                                               size = "sm",
                                                                               hierarchy = "primary",
                                                                               icon = "default",
                                                                               state = "default",
                                                                               text = "Button CTA",
                                                                               className,
                                                                               ...props
                                                                           }: IButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefaultProps): JSX.Element => {
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
        <Link href="/contact"
              className={
                  "buttons-button-size-xl-hierarchy-primary-icon-default-state-default " +
                  className +
                  " " +
                  variantsClassName
              }>
            {iconLeading && <>{iconLeadingSwap}</>}
            <div className="text-padding">
                <div className="text">{text}</div>
            </div>
            {iconTrailing && <>{iconTrailingSwap}</>}
        </Link>
    );
};
