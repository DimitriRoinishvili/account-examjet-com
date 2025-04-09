import "./FooterTypeLarge04ThemeDefaultBreakpointDesktop.css";
import {Logo} from "../Logo/Logo";
import {
    FooterLinkBadgeTrueColorBrandThemeLightStateDefault
} from "../FooterLinkBadgeTrueColorBrandThemeLightStateDefault/FooterLinkBadgeTrueColorBrandThemeLightStateDefault";
import {
    FooterLinkBadgeFalseColorBrandThemeLightStateDefault
} from "../FooterLinkBadgeFalseColorBrandThemeLightStateDefault/FooterLinkBadgeFalseColorBrandThemeLightStateDefault";
import {
    FooterLinksColumnColorBrandThemeLight
} from "../FooterLinksColumnColorBrandThemeLight/FooterLinksColumnColorBrandThemeLight";
import {Mail01} from "../Mail01/Mail01";
import {
    InputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholder
} from "../InputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholder/InputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholder";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault";
import type {JSX} from "react";

export interface IFooterTypeLarge04ThemeDefaultBreakpointDesktopProps {
    type?:
        | "large-01"
        | "large-02"
        | "large-03"
        | "large-04"
        | "large-05"
        | "large-06"
        | "large-07"
        | "large-08"
        | "large-09"
        | "large-10"
        | "large-11"
        | "large-12"
        | "large-13"
        | "large-14"
        | "large-15"
        | "large-16"
        | "small-01"
        | "small-02"
        | "small-03"
        | "small-04";
    theme?: "default" | "brand";
    breakpoint?: "desktop" | "mobile";
    text?: string;
    className?: string;
}

export const FooterTypeLarge04ThemeDefaultBreakpointDesktop = ({
                                                                   type = "large-01",
                                                                   theme = "default",
                                                                   breakpoint = "desktop",
                                                                   text = "Stay up to date",
                                                                   className,
                                                                   ...props
                                                               }: IFooterTypeLarge04ThemeDefaultBreakpointDesktopProps): JSX.Element => {
    const variantsClassName =
        "type-" + type + " theme-" + theme + " breakpoint-" + breakpoint;

    return (
        <div
            className={
                "footer-type-large-04-theme-default-breakpoint-desktop " +
                className +
                " " +
                variantsClassName
            }
        >
            <div className="container">
                <div className="content">
                    <div className="logo-and-supporting-text">
                        <Logo className="logo-instance"></Logo>
                        <div className="supporting-text">
                            Design amazing digital experiences that create more happy in the
                            world.{" "}
                        </div>
                    </div>
                    <div className="links-and-newsletter">
                        <div className="links">
                            <FooterLinksColumnColorBrandThemeLight
                                color="brand"
                                component={
                                    <FooterLinkBadgeTrueColorBrandThemeLightStateDefault
                                        className="footer-link-instance"
                                        badge="true"
                                        color="brand"
                                    />
                                }
                                text="Pricing"
                                text2="Features"
                                text3="Solutions"
                                text4="Releases"
                                text5="Tutorials"
                                className="footer-links-column-instance"
                            ></FooterLinksColumnColorBrandThemeLight>
                            <FooterLinksColumnColorBrandThemeLight
                                color="brand"
                                text="Tutorials"
                                text2="Resources"
                                text3="Newsletter"
                                text4="Help centre"
                                text5="Events"
                                // text6="Blog"
                                // text7="Support"
                                className="footer-links-column-instance"
                            ></FooterLinksColumnColorBrandThemeLight>
                        </div>
                        <div className="newsletter">
                            <div className="heading">{text} </div>
                            <div className="email-capture">
                                <InputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholder
                                    iconSwap={<Mail01 className="mail-01-instance"/>}
                                    hintText={false}
                                    helpIcon={false}
                                    label={false}
                                    size="md"
                                    text="Stay up to date"
                                    text2="Enter your email"
                                    className="input-field-instance"
                                ></InputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholder>
                                <ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault
                                    iconTrailingSwap={
                                        <Placeholder className="placeholder-instance"/>
                                    }
                                    iconLeadingSwap={
                                        <Placeholder className="placeholder-instance"/>
                                    }
                                    iconTrailing={false}
                                    iconLeading={false}
                                    size="lg"
                                    // text="Subscribe"
                                    className="buttons-button-instance"
                                ></ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="content2">
                    <div className="footer-text">
                        © 2077 Untitled UI. All rights reserved.{" "}
                    </div>
                    <div className="footer-links">
                        <div className="footer-link">Terms</div>
                        <div className="footer-link">Privacy</div>
                        <div className="footer-link">Cookies</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
