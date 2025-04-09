import "./AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse.css";
import type {JSX} from "react";

export interface IAvatarSizeLgPlaceholderFalseTextFalseStatusIconFalseProps {
    contrastBorder?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2-xl";
    placeholder?: "false" | "true";
    text?: "false" | "true";
    statusIcon?: "false" | "online-indicator" | "company" | "verified";
    className?: string;
}

export const AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse = ({
                                                                         contrastBorder = true,
                                                                         size = "xs",
                                                                         placeholder = "false",
                                                                         text = "false",
                                                                         statusIcon = "false",
                                                                         className,
                                                                         ...props
                                                                     }: IAvatarSizeLgPlaceholderFalseTextFalseStatusIconFalseProps): JSX.Element => {
    const variantsClassName =
        "size-" +
        size +
        " placeholder-" +
        placeholder +
        " text-" +
        text +
        " status-icon-" +
        statusIcon;

    return (
        <div
            className={
                "avatar-size-lg-placeholder-false-text-false-status-icon-false " +
                className +
                " " +
                variantsClassName
            }
            style={{
                background:
                    "url(/images/global/avatar-size-lg-placeholder-false-text-false-status-icon-false.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {contrastBorder && (
                <>
                    <div className="contrast-border"></div>
                </>
            )}
        </div>
    );
};
