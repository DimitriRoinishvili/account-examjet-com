import "./NavigationActionsLoggedInFalseBreakpointDesktop.css";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault/ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault";
import {
    ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault
} from "../ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault";
import type {JSX} from "react";

export interface INavigationActionsLoggedInFalseBreakpointDesktopProps {
    loggedIn?: "false" | "true";
    breakpoint?: "desktop" | "mobile";
    component?: JSX.Element;
    component2?: JSX.Element;
    text?: string;
    text2?: string;
    className?: string;
}

export const NavigationActionsLoggedInFalseBreakpointDesktop = ({
                                                                    loggedIn = "false",
                                                                    breakpoint = "desktop",
                                                                    component = (
                                                                        <ButtonsButtonSizeLgHierarchySecondaryGrayIconDefaultStateDefault
                                                                            // iconTrailingSwap={<undefined/>}
                                                                            // iconLeadingSwap={<undefined/>}
                                                                            iconTrailing={false}
                                                                            iconLeading={false}
                                                                            size="lg"
                                                                            hierarchy="secondary-gray"
                                                                            icon="default"
                                                                            state="default"
                                                                        />
                                                                    ),
                                                                    component2 = (
                                                                        <ButtonsButtonSizeLgHierarchyPrimaryIconDefaultStateDefault
                                                                            // iconTrailingSwap={<undefined/>}
                                                                            // iconLeadingSwap={<undefined/>}
                                                                            iconTrailing={false}
                                                                            iconLeading={false}
                                                                            size="lg"
                                                                            hierarchy="primary"
                                                                            icon="default"
                                                                            state="default"
                                                                        />
                                                                    ),
                                                                    text = "undefined",
                                                                    text2 = "undefined",
                                                                    className,
                                                                    ...props
                                                                }: INavigationActionsLoggedInFalseBreakpointDesktopProps): JSX.Element => {
    const variantsClassName =
        "logged-in-" + loggedIn + " breakpoint-" + breakpoint;

    return (
        <div
            className={
                "navigation-actions-logged-in-false-breakpoint-desktop " +
                className +
                " " +
                variantsClassName
            }
        >
            {component}
            {component2}
        </div>
    );
};
