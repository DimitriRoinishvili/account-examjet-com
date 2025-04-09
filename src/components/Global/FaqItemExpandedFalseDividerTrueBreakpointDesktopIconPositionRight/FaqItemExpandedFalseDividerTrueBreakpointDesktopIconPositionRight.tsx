import "./FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight.css";
import {PlusCircle} from "../PlusCircle/PlusCircle";
import type {JSX} from "react";

export interface IFaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRightProps {
    icon?: boolean;
    expanded?: "false" | "true";
    divider?: "false" | "true";
    breakpoint?: "desktop" | "mobile";
    iconPosition?: "left" | "right";
    text?: string;
    className?: string;
}

export const FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight =
    ({
         icon = true,
         expanded = "false",
         divider = "false",
         breakpoint = "desktop",
         iconPosition = "left",
         text = "Is there a free trial available?",
         className,
         ...props
     }: IFaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRightProps): JSX.Element => {
        const variantsClassName =
            "expanded-" +
            expanded +
            " divider-" +
            divider +
            " breakpoint-" +
            breakpoint +
            " icon-position-" +
            iconPosition;

        return (
            <div
                className={
                    "faq-item-expanded-false-divider-true-breakpoint-desktop-icon-position-right " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                <div className="content">
                    <div className="text-and-supporting-text">
                        <div className="text">{text} </div>
                    </div>
                    {icon && (
                        <>
                            <div className="icon-wrap">
                                <PlusCircle className="plus-circle-instance"></PlusCircle>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };
