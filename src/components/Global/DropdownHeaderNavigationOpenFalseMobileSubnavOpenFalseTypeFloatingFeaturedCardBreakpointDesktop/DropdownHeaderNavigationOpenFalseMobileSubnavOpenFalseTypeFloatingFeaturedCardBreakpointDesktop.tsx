import "./DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop.css";
import {Logo} from "../Logo/Logo";
import {
    DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter
} from "../DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter/DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault";
import {ChevronDown} from "../ChevronDown/ChevronDown";
import {
    ButtonsButtonSizeMdHierarchySecondaryGrayIconDefaultStateDefault
} from "../ButtonsButtonSizeMdHierarchySecondaryGrayIconDefaultStateDefault/ButtonsButtonSizeMdHierarchySecondaryGrayIconDefaultStateDefault";
import {
    ButtonsButtonSizeMdHierarchyPrimaryIconDefaultStateDefault
} from "../ButtonsButtonSizeMdHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeMdHierarchyPrimaryIconDefaultStateDefault";
import {
    ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault/ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault";
import {
    ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault";
import {
    NavigationActionsLoggedInFalseBreakpointDesktop
} from "../NavigationActionsLoggedInFalseBreakpointDesktop/NavigationActionsLoggedInFalseBreakpointDesktop";
import type {JSX} from "react";

export interface IDropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktopProps {
    open?: "false" | "true";
    mobileSubnavOpen?: "false" | "true";
    type?:
        | "simple"
        | "featured-card"
        | "simple-with-footer"
        | "2-col-with-links-and-footer"
        | "simple-2-col"
        | "featured-posts"
        | "simple-2-col-with-footer"
        | "floating-featured-card"
        | "floating-2-col-with-links-and-footer"
        | "floating-simple-with-footer";
    breakpoint?: "desktop" | "mobile";
    className?: string;
}

export const DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop =
    ({
         open = "false",
         mobileSubnavOpen = "false",
         type = "simple",
         breakpoint = "desktop",
         className,
         ...props
     }: IDropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktopProps): JSX.Element => {
        const variantsClassName =
            "open-" +
            open +
            " mobile-subnav-open-" +
            mobileSubnavOpen +
            " type-" +
            type +
            " breakpoint-" +
            breakpoint;

        return (
            <div
                className={
                    "dropdown-header-navigation-open-false-mobile-subnav-open-false-type-floating-featured-card-breakpoint-desktop " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                <div className="header">
                    <div className="container">
                        <div className="nav-wrapper">
                            <div className="content">
                                <Logo className="logo-instance"></Logo>
                                <div className="navigation">
                                    <DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter
                                        type="simple-2-col-with-footer"
                                        text="Products"
                                        className="dropdown-header-navigation-trigger-instance"
                                    ></DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter>
                                    <DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter
                                        type="simple-2-col-with-footer"
                                        text="Services"
                                        className="dropdown-header-navigation-trigger-instance"
                                    ></DropdownHeaderNavigationTriggerOpenFalseTypeSimple2ColWithFooter>
                                    <ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault
                                        iconLeadingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconTrailing={false}
                                        iconTrailingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconLeading={false}
                                        size="lg"
                                        hierarchy="link-gray"
                                        text="Pricing"
                                        className="buttons-button-instance"
                                    ></ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault>
                                    <ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault
                                        iconLeadingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconTrailingSwap={
                                            <ChevronDown className="chevron-down-instance"/>
                                        }
                                        iconLeading={false}
                                        size="lg"
                                        hierarchy="link-gray"
                                        text="Resources"
                                        className="buttons-button-instance"
                                    ></ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault>
                                    <ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault
                                        iconLeadingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconTrailing={false}
                                        iconTrailingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconLeading={false}
                                        size="lg"
                                        hierarchy="link-gray"
                                        text="About"
                                        className="buttons-button-instance"
                                    ></ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault>
                                </div>
                            </div>
                            <NavigationActionsLoggedInFalseBreakpointDesktop
                                component={
                                    <ButtonsButtonSizeMdHierarchySecondaryGrayIconDefaultStateDefault
                                        className="buttons-button-instance2"
                                        iconTrailingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconLeadingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconTrailing={false}
                                        iconLeading={false}
                                        size="md"
                                        hierarchy="secondary-gray"
                                    />
                                }
                                component2={
                                    <ButtonsButtonSizeMdHierarchyPrimaryIconDefaultStateDefault
                                        className="buttons-button-instance3"
                                        iconLeadingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconTrailingSwap={
                                            <Placeholder className="placeholder-instance"/>
                                        }
                                        iconTrailing={false}
                                        iconLeading={false}
                                        size="md"
                                    />
                                }
                                text="Sign up"
                                text2="Log in"
                                className="navigation-actions-instance"
                            ></NavigationActionsLoggedInFalseBreakpointDesktop>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
