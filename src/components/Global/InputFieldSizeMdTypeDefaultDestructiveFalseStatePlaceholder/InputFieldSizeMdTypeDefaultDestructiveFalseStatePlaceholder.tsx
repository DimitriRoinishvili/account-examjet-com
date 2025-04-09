import "./InputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholder.css";
import {Mail01} from "../Mail01/Mail01";
import {
    HelpIconOpenFalseSupportingTextFalseTooltipTopArrow
} from "../HelpIconOpenFalseSupportingTextFalseTooltipTopArrow/HelpIconOpenFalseSupportingTextFalseTooltipTopArrow";
import type {JSX} from "react";

export interface IInputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholderProps {
    required?: boolean;
    iconSwap?: JSX.Element;
    helpIcon?: boolean;
    hintText?: boolean;
    label?: boolean;
    size?: "sm" | "md";
    type?:
        | "default"
        | "icon-leading"
        | "leading-dropdown"
        | "trailing-dropdown"
        | "leading-text"
        | "payment-input"
        | "tags"
        | "trailing-button";
    destructive?: "false" | "true";
    state?: "placeholder" | "filled" | "focused" | "disabled";
    text?: string;
    text2?: string;
    className?: string;
}

export const InputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholder = ({
                                                                                required = true,
                                                                                iconSwap = <Mail01
                                                                                    className="mail-01-instance"/>,
                                                                                helpIcon = true,
                                                                                hintText = true,
                                                                                label = true,
                                                                                size = "sm",
                                                                                type = "default",
                                                                                destructive = "false",
                                                                                state = "placeholder",
                                                                                text = "Email",
                                                                                text2 = "olivia@untitledui.com",
                                                                                className,
                                                                                ...props
                                                                            }: IInputFieldSizeMdTypeDefaultDestructiveFalseStatePlaceholderProps): JSX.Element => {
    const variantsClassName =
        "size-" +
        size +
        " type-" +
        type +
        " destructive-" +
        destructive +
        " state-" +
        state;

    return (
        <div
            className={
                "input-field-size-md-type-default-destructive-false-state-placeholder " +
                className +
                " " +
                variantsClassName
            }
        >
            <div className="input-with-label">
                {label && (
                    <>
                        <div className="label-wrapper">
                            <div className="label">{text} </div>
                            {required && (
                                <>
                                    <div className="asterisk">*</div>
                                </>
                            )}
                        </div>
                    </>
                )}
                <div className="input">
                    <div className="content">
                        <div className="text">{text2} </div>
                    </div>
                    {helpIcon && (
                        <>
                            <HelpIconOpenFalseSupportingTextFalseTooltipTopArrow
                                tooltip="top-arrow"
                                className="help-icon-instance"
                            ></HelpIconOpenFalseSupportingTextFalseTooltipTopArrow>
                        </>
                    )}
                </div>
            </div>
            {hintText && (
                <>
                    <div className="hint-text">This is a hint text to help user.</div>
                </>
            )}
        </div>
    );
};
