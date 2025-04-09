import "./AvatarSizeXlPlaceholderFalseTextFalseStatusIconFalse.css";
import type {JSX} from "react";

export interface IAvatarSizeXlPlaceholderFalseTextFalseStatusIconFalseProps {
    contrastBorder?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2-xl";
    placeholder?: "false" | "true";
    text?: "false" | "true";
    statusIcon?: "false" | "online-indicator" | "company" | "verified";
    className?: string;
}

export const AvatarSizeXlPlaceholderFalseTextFalseStatusIconFalse = ({
                                                                         contrastBorder = true,
                                                                         size = "xs",
                                                                         placeholder = "false",
                                                                         text = "false",
                                                                         statusIcon = "false",
                                                                         className,
                                                                         ...props
                                                                     }: IAvatarSizeXlPlaceholderFalseTextFalseStatusIconFalseProps): JSX.Element => {
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
                "avatar-size-xl-placeholder-false-text-false-status-icon-false " +
                className +
                " " +
                variantsClassName
            }
            style={{
                background:
                    "url(/images/global/avatar-size-xl-placeholder-false-text-false-status-icon-false.png) center",
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
