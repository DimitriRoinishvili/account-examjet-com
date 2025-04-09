import "./HelpIconOpenFalseSupportingTextFalseTooltipTopArrow.css";
import {HelpCircle} from "../HelpCircle/HelpCircle";
import type {JSX} from "react";

export interface IHelpIconOpenFalseSupportingTextFalseTooltipTopArrowProps {
    cursor?: boolean;
    open?: "false" | "true";
    supportingText?: "false" | "true";
    tooltip?:
        | "top-no-arrow"
        | "top-arrow"
        | "left"
        | "top-left"
        | "bottom"
        | "right"
        | "top-right";
    className?: string;
}

export const HelpIconOpenFalseSupportingTextFalseTooltipTopArrow = ({
                                                                        cursor = true,
                                                                        open = "false",
                                                                        supportingText = "false",
                                                                        tooltip = "top-no-arrow",
                                                                        className,
                                                                        ...props
                                                                    }: IHelpIconOpenFalseSupportingTextFalseTooltipTopArrowProps): JSX.Element => {
    const variantsClassName =
        "open-" +
        open +
        " supporting-text-" +
        supportingText +
        " tooltip-" +
        tooltip;

    return (
        <div
            className={
                "help-icon-open-false-supporting-text-false-tooltip-top-arrow " +
                className +
                " " +
                variantsClassName
            }
        >
            <HelpCircle className="help-circle-instance"></HelpCircle>
        </div>
    );
};
