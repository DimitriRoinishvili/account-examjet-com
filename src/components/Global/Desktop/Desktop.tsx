import "./Desktop.css";
import {
    DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop
} from "../DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop/DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop";
import {
    PricingPageHeaderTypeSimpleDualActionBreakpointDesktop
} from "../PricingPageHeaderTypeSimpleDualActionBreakpointDesktop/PricingPageHeaderTypeSimpleDualActionBreakpointDesktop";
import {
    FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop
} from "../FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop/FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop";
import {
    TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop
} from "../TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop/TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop";
import {
    CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop
} from "../CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop/CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop";
import {
    FooterTypeLarge04ThemeDefaultBreakpointDesktop
} from "../FooterTypeLarge04ThemeDefaultBreakpointDesktop/FooterTypeLarge04ThemeDefaultBreakpointDesktop";
import type {JSX} from "react";

export interface IDesktopProps {
    className?: string;
}

export const Desktop = ({
                            className,
                            ...props
                        }: IDesktopProps): JSX.Element => {
    return (
        <div className={"desktop " + className}>
            <DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop
                type="floating-featured-card"
                className="dropdown-header-navigation-instance"
            ></DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop>
            <PricingPageHeaderTypeSimpleDualActionBreakpointDesktop
                type="simple-dual-action"
                text="20 GB individual data each user"
                text2="40 GB individual data each user"
                text3="Personalized + priority service"
                className="pricing-page-header-instance"
            ></PricingPageHeaderTypeSimpleDualActionBreakpointDesktop>
            <FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop
                type="accordion-01"
                className="faq-section-instance"
            ></FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop>
            <TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop
                type="social-cards-02"
                className="testimonial-section-instance"
            ></TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop>
            <CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop
                type="card-hortizontal"
                className="cta-section-instance"
            ></CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop>
            <FooterTypeLarge04ThemeDefaultBreakpointDesktop
                type="large-04"
                text="Start growing with Untitled"
                className="footer-instance"
            ></FooterTypeLarge04ThemeDefaultBreakpointDesktop>
        </div>
    );
};
