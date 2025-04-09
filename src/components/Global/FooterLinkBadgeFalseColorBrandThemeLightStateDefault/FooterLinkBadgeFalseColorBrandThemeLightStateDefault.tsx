import "./FooterLinkBadgeFalseColorBrandThemeLightStateDefault.css";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault";
import type {JSX} from "react";

export interface IFooterLinkBadgeFalseColorBrandThemeLightStateDefaultProps {
    badge?: "false" | "true";
    color?: "default" | "brand";
    theme?: "light" | "dark";
    state?: "default" | "hover";
    className?: string;
}

export const FooterLinkBadgeFalseColorBrandThemeLightStateDefault = ({
                                                                         badge = "false",
                                                                         color = "default",
                                                                         theme = "light",
                                                                         state = "default",
                                                                         className,
                                                                         ...props
                                                                     }: IFooterLinkBadgeFalseColorBrandThemeLightStateDefaultProps): JSX.Element => {
    const variantsClassName =
        "badge-" +
        badge +
        " color-" +
        color +
        " theme-" +
        theme +
        " state-" +
        state;

    return (
        <div
            className={
                "footer-link-badge-false-color-brand-theme-light-state-default " +
                className +
                " " +
                variantsClassName
            }
        >
            <ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault
                iconTrailingSwap={<Placeholder className="placeholder-instance"/>}
                iconLeadingSwap={<Placeholder className="placeholder-instance"/>}
                iconTrailing={false}
                iconLeading={false}
                size="lg"
                hierarchy="link-color"
                text="Overview"
                className="buttons-button-instance"
            ></ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault>
        </div>
    );
};
