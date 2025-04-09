import "./FooterLinkBadgeTrueColorBrandThemeLightStateDefault.css";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyLinkColorIconDefaultStateDefault";
import {Au} from "../Au/Au";
import {ArrowUp} from "../ArrowUp/ArrowUp";
import {ArrowRight} from "../ArrowRight/ArrowRight";
import {
    BadgeSizeSmTypePillOutlineIconFalseColorBrand
} from "../BadgeSizeSmTypePillOutlineIconFalseColorBrand/BadgeSizeSmTypePillOutlineIconFalseColorBrand";
import type {JSX} from "react";

export interface IFooterLinkBadgeTrueColorBrandThemeLightStateDefaultProps {
    badge?: "false" | "true";
    color?: "default" | "brand";
    theme?: "light" | "dark";
    state?: "default" | "hover";
    className?: string;
}

export const FooterLinkBadgeTrueColorBrandThemeLightStateDefault = ({
                                                                        badge = "false",
                                                                        color = "default",
                                                                        theme = "light",
                                                                        state = "default",
                                                                        className,
                                                                        ...props
                                                                    }: IFooterLinkBadgeTrueColorBrandThemeLightStateDefaultProps): JSX.Element => {
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
                "footer-link-badge-true-color-brand-theme-light-state-default " +
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
            <BadgeSizeSmTypePillOutlineIconFalseColorBrand
                flagSwap={<Au className="au-instance"/>}
                iconLeadingSwap={<ArrowUp className="arrow-up-instance"/>}
                iconTrailingSwap={<ArrowRight className="arrow-right-instance"/>}
                type="pill-outline"
                color="brand"
                text="New"
                className="badge-instance"
            ></BadgeSizeSmTypePillOutlineIconFalseColorBrand>
        </div>
    );
};
