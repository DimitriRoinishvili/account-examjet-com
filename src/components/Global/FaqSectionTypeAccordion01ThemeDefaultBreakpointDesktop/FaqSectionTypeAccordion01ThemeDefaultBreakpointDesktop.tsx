import "./FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop.css";
import {
    FaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRight
} from "../FaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRight/FaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRight";
import {
    FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight
} from "../FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight/FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight";
import {
    AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
} from "../AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse/AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse";
import {
    AvatarSizeXlPlaceholderFalseTextFalseStatusIconFalse
} from "../AvatarSizeXlPlaceholderFalseTextFalseStatusIconFalse/AvatarSizeXlPlaceholderFalseTextFalseStatusIconFalse";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
} from "../ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault";
import type {JSX} from "react";

export interface IFaqSectionTypeAccordion01ThemeDefaultBreakpointDesktopProps {
    type?:
        | "simple-01"
        | "simple-02"
        | "simple-03"
        | "simple-04"
        | "accordion-01"
        | "accordion-02"
        | "accordion-03"
        | "accordion-04";
    theme?: "default" | "brand";
    breakpoint?: "desktop" | "mobile";
    className?: string;
}

export const FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop = ({
                                                                           type = "simple-01",
                                                                           theme = "default",
                                                                           breakpoint = "desktop",
                                                                           className,
                                                                           ...props
                                                                       }: IFaqSectionTypeAccordion01ThemeDefaultBreakpointDesktopProps): JSX.Element => {
    const variantsClassName =
        "type-" + type + " theme-" + theme + " breakpoint-" + breakpoint;

    return (
        <div
            className={
                "faq-section-type-accordion-01-theme-default-breakpoint-desktop " +
                className +
                " " +
                variantsClassName
            }
        >
            <div className="container">
                <div className="content">
                    <div className="heading-and-supporting-text">
                        <div className="heading">Frequently asked questions</div>
                        <div className="supporting-text">
                            Everything you need to know about the product and billing.{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="content2">
                    <FaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRight
                        expanded="true"
                        iconPosition="right"
                        className="faq-item-instance"
                    ></FaqItemExpandedTrueDividerFalseBreakpointDesktopIconPositionRight>
                    <FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight
                        divider="true"
                        iconPosition="right"
                        text="Can I change my plan later?"
                        className="faq-item-instance"
                    ></FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight>
                    <FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight
                        divider="true"
                        iconPosition="right"
                        text="What is your cancellation policy?"
                        className="faq-item-instance"
                    ></FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight>
                    <FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight
                        divider="true"
                        iconPosition="right"
                        text="Can other info be added to an invoice?"
                        className="faq-item-instance"
                    ></FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight>
                    <FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight
                        divider="true"
                        iconPosition="right"
                        text="How does billing work?"
                        className="faq-item-instance"
                    ></FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight>
                    <FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight
                        divider="true"
                        iconPosition="right"
                        text="How do I change my account email?"
                        className="faq-item-instance"
                    ></FaqItemExpandedFalseDividerTrueBreakpointDesktopIconPositionRight>
                </div>
            </div>
            <div className="container">
                <div className="content3">
                    <div className="avatar-group">
                        <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                            size="lg"
                            className="avatar-instance"
                        ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                        <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                            size="lg"
                            className="avatar-instance2"
                        ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                        <AvatarSizeXlPlaceholderFalseTextFalseStatusIconFalse
                            size="xl"
                            className="avatar-instance3"
                        ></AvatarSizeXlPlaceholderFalseTextFalseStatusIconFalse>
                    </div>
                    <div className="heading-and-supporting-text2">
                        <div className="heading2">Still have questions?</div>
                        <div className="supporting-text2">
                            Can’t find the answer you’re looking for? Please chat to our
                            friendly team.{" "}
                        </div>
                    </div>
                    <div className="actions">
                        <ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
                            iconLeadingSwap={<Placeholder className="placeholder-instance"/>}
                            iconTrailing={false}
                            iconTrailingSwap={
                                <Placeholder className="placeholder-instance"/>
                            }
                            iconLeading={false}
                            size="xl"
                            text="Get in touch"
                            className="buttons-button-instance"
                        ></ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault>
                    </div>
                </div>
            </div>
        </div>
    );
};
