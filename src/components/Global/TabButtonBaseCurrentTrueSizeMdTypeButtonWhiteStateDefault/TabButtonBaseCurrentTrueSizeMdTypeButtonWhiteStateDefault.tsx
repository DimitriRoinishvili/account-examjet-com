import "./TabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefault.css";
import {Au} from "../Au/Au";
import {ArrowUp} from "../ArrowUp/ArrowUp";
import {ArrowRight} from "../ArrowRight/ArrowRight";
import {
    BadgeSizeMdTypePillColorIconFalseColorGray
} from "../BadgeSizeMdTypePillColorIconFalseColorGray/BadgeSizeMdTypePillColorIconFalseColorGray";
import type {JSX} from "react";

export interface ITabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefaultProps {
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
    className?: string;
}

export const TabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefault = ({
                                                                              badge = true,
                                                                              current = "false",
                                                                              size = "sm",
                                                                              type = "button-brand",
                                                                              state = "default",
                                                                              className,
                                                                              ...props
                                                                          }: ITabButtonBaseCurrentTrueSizeMdTypeButtonWhiteStateDefaultProps): JSX.Element => {
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
                "tab-button-base-current-true-size-md-type-button-white-state-default " +
                className +
                " " +
                variantsClassName
            }
        >
            <div className="text">My details</div>
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
