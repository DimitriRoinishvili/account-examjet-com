import "./HorizontalTabsTypeButtonBorderSizeMdFullWidthFalseBreakpointDesktop.css";
import {
    TabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefault
} from "../TabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefault/TabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefault";
import {
    TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
} from "../TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault/TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault";
import type {JSX} from "react";

export interface IHorizontalTabsTypeButtonBorderSizeMdFullWidthFalseBreakpointDesktopProps {
    type?:
        | "button-brand"
        | "button-gray"
        | "underline"
        | "button-border"
        | "button-minimal";
    size?: "sm" | "md";
    fullWidth?: "false" | "true";
    breakpoint?: "desktop" | "mobile";
    text?: string;
    text2?: string;
    className?: string;
}

export const HorizontalTabsTypeButtonBorderSizeMdFullWidthFalseBreakpointDesktop =
    ({
         type = "button-brand",
         size = "sm",
         fullWidth = "false",
         breakpoint = "desktop",
         text = "undefined",
         text2 = "undefined",
         className,
         ...props
     }: IHorizontalTabsTypeButtonBorderSizeMdFullWidthFalseBreakpointDesktopProps): JSX.Element => {
        const variantsClassName =
            "type-" +
            type +
            " size-" +
            size +
            " full-width-" +
            fullWidth +
            " breakpoint-" +
            breakpoint;

        return (
            <div
                className={
                    "horizontal-tabs-type-button-border-size-md-full-width-false-breakpoint-desktop " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                {/*<TabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefault*/}
                {/*    badge={false}*/}
                {/*    current="true"*/}
                {/*    size="md"*/}
                {/*    type="button-white"*/}
                {/*    className="tab-button-base-instance"*/}
                {/*></TabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefault>*/}
                {/*<TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault*/}
                {/*    badge={false}*/}
                {/*    size="md"*/}
                {/*    type="button-white"*/}
                {/*    text="Profile"*/}
                {/*    className="tab-button-base-instance"*/}
                {/*></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>*/}
                {/*<TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault*/}
                {/*    badge={false}*/}
                {/*    size="md"*/}
                {/*    type="button-white"*/}
                {/*    text="Password"*/}
                {/*    className="tab-button-base-instance"*/}
                {/*></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>*/}
                <TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
                    badge={false}
                    size="md"
                    type="button-white"
                    text="Team"
                    className="tab-button-base-instance"
                ></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>
                <TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
                    badge={false}
                    size="md"
                    type="button-white"
                    text="Plan"
                    className="tab-button-base-instance"
                ></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>
                <TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
                    badge={false}
                    size="md"
                    type="button-white"
                    text="Billing"
                    className="tab-button-base-instance"
                ></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>
                <TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
                    badge={false}
                    size="md"
                    type="button-white"
                    text="Email"
                    className="tab-button-base-instance"
                ></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>
                <TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
                    size="md"
                    type="button-white"
                    text="Notifications"
                    className="tab-button-base-instance"
                ></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>
                <TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
                    badge={false}
                    size="md"
                    type="button-white"
                    text="Integrations"
                    className="tab-button-base-instance"
                ></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>
                <TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault
                    badge={false}
                    size="md"
                    type="button-white"
                    text="API"
                    className="tab-button-base-instance"
                ></TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault>
            </div>
        );
    };
