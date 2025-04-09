import "./HeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktop.css";
import type {JSX} from "react";

export interface IHeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktopProps {
    alignment?: "center" | "left" | "space-between";
    actions?: "false" | "buttons" | "tabs" | "email-capture" | "search-bar";
    color?: "default" | "brand";
    breakpoint?: "desktop" | "mobile";
    text?: string;
    text2?: string;
    className?: string;
}

export const HeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktop =
    ({
         alignment = "center",
         actions = "false",
         color = "default",
         breakpoint = "desktop",
         text = "Simple, transparent pricing",
         text2 = "Simple, transparent pricing that grows with you. Try any plan free for 30 days.",
         className,
         ...props
     }: IHeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktopProps): JSX.Element => {
        const variantsClassName =
            "alignment-" +
            alignment +
            " actions-" +
            actions +
            " color-" +
            color +
            " breakpoint-" +
            breakpoint;

        return (
            <div
                className={
                    "header-section-alignment-center-actions-tabs-color-default-breakpoint-desktop " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                <div className="container">
                    <div className="content">
                        <div className="heading-and-supporting-text">
                            <div className="heading-and-subheading">
                                {/*<div className="subheading">Pricing</div>*/}
                                <div className="heading">{text} </div>
                            </div>
                            <div className="supporting-text">{text2} </div>
                        </div>
                        {/*<HorizontalTabsTypeButtonBorderSizeMdFullWidthFalseBreakpointDesktop*/}
                        {/*    type="button-border"*/}
                        {/*    size="md"*/}
                        {/*    text="Monthly billing"*/}
                        {/*    text2="Annual billing"*/}
                        {/*    className="horizontal-tabs-instance"*/}
                        {/*></HorizontalTabsTypeButtonBorderSizeMdFullWidthFalseBreakpointDesktop>*/}
                    </div>
                </div>
            </div>
        );
    };
