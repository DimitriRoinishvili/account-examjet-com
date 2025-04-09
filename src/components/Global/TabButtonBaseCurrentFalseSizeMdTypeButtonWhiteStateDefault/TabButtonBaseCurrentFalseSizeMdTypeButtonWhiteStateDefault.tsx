import "./TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault.css";
import {Au} from "../Au/Au";
import {ArrowUp} from "../ArrowUp/ArrowUp";
import {ArrowRight} from "../ArrowRight/ArrowRight";
import {
    BadgeSizeMdTypePillColorIconFalseColorGray
} from "../BadgeSizeMdTypePillColorIconFalseColorGray/BadgeSizeMdTypePillColorIconFalseColorGray";
import type {JSX} from "react";

export interface ITabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefaultProps {
    badge?: boolean;
    current?: "false" | "true";
    size?: "sm" | "md";
    type?:
        | "button-brand"
        | "button-gray"
        | "underline"
        | "line-vertical-tabs"
        | "button-white"
        | "button-minimal";
    state?: "default" | "hover" | "focus";
    text?: string;
    className?: string;
}

export const TabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefault = ({
                                                                               badge = true,
                                                                               current = "false",
                                                                               size = "sm",
                                                                               type = "button-brand",
                                                                               state = "default",
                                                                               text = "My details",
                                                                               className,
                                                                               ...props
                                                                           }: ITabButtonBaseCurrentFalseSizeMdTypeButtonWhiteStateDefaultProps): JSX.Element => {
    const variantsClassName =
        "current-" +
        current +
        " size-" +
        size +
        " type-" +
        type +
        " state-" +
        state;

    return (
        <div
            className={
                "tab-button-base-current-false-size-md-type-button-white-state-default " +
                className +
                " " +
                variantsClassName
            }
        >
            <div className="text">{text} </div>
            {badge && (
                <>
                    <BadgeSizeMdTypePillColorIconFalseColorGray
                        flagSwap={<Au className="au-instance"/>}
                        iconLeadingSwap={<ArrowUp className="arrow-up-instance"/>}
                        iconTrailingSwap={<ArrowRight className="arrow-right-instance"/>}
                        size="md"
                        text="2"
                        className="badge-instance"
                    ></BadgeSizeMdTypePillColorIconFalseColorGray>
                </>
            )}
        </div>
    );
};
