import "./FaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRight.css";
import {MinusCircle} from "../MinusCircle/MinusCircle";
import type {JSX} from "react";

export interface IFaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRightProps {
    icon?: boolean;
    expanded?: "false" | "true";
    divider?: "false" | "true";
    breakpoint?: "desktop" | "mobile";
    iconPosition?: "left" | "right";
    className?: string;
}

export const FaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRight =
    ({
         icon = true,
         expanded = "false",
         divider = "false",
         breakpoint = "desktop",
         iconPosition = "left",
         className,
         ...props
     }: IFaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRightProps): JSX.Element => {
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
                    "faq-item-expanded-true-divider-false-breakpoint-desktop-icon-position-right " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                <div className="content">
                    <div className="text-and-supporting-text">
                        <div className="text">Is there a free trial available?</div>
                        <div className="supporting-text">
                            Yes, you can try us for free for 30 days. If you want, we’ll
                            provide you with a free, personalized 30-minute onboarding call to
                            get you up and running as soon as possible.{" "}
                        </div>
                    </div>
                    {icon && (
                        <>
                            <div className="icon-wrap">
                                <MinusCircle className="minus-circle-instance"></MinusCircle>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };
