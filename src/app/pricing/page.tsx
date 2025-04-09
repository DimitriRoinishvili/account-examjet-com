import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import {PAGE_SUFFIX} from "@/config";
import {
    PricingPageHeaderTypeSimpleDualActionBreakpointDesktop
} from '@/components/Global/PricingPageHeaderTypeSimpleDualActionBreakpointDesktop/PricingPageHeaderTypeSimpleDualActionBreakpointDesktop';
import {
    FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop
} from '@/components/Global/FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop/FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop';
import {
    TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop
} from '@/components/Global/TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop/TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop';
import {
    CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop
} from '@/components/Global/CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop/CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop';
import {
    FooterTypeLarge04ThemeDefaultBreakpointDesktop
} from '@/components/Global/FooterTypeLarge04ThemeDefaultBreakpointDesktop/FooterTypeLarge04ThemeDefaultBreakpointDesktop';

export const metadata: Metadata = {
    title: `Pricing | ${PAGE_SUFFIX}`,
};

const PricingPage = () => {
    return (
        <>
            <Breadcrumb pageName="Pricing"/>

            <div>
                {/*<DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop*/}
                {/*    type="floating-featured-card"*/}
                {/*    className="dropdown-header-navigation-instance"*/}
                {/*></DropdownHeaderNavigationOpenFalseMobileSubnavOpenFalseTypeFloatingFeaturedCardBreakpointDesktop>*/}
                <PricingPageHeaderTypeSimpleDualActionBreakpointDesktop
                    // type="simple-dual-action"
                    // text="20 GB individual data each user"
                    // text2="40 GB individual data each user"
                    // text3="Personalized + priority service"
                    // className="pricing-page-header-instance"
                ></PricingPageHeaderTypeSimpleDualActionBreakpointDesktop>
                {/*<FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop*/}
                {/*    type="accordion-01"*/}
                {/*    className="faq-section-instance"*/}
                {/*></FaqSectionTypeAccordion01ThemeDefaultBreakpointDesktop>*/}
                {/*<TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop*/}
                {/*    type="social-cards-02"*/}
                {/*    className="testimonial-section-instance"*/}
                {/*></TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop>*/}
                {/*<CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop*/}
                {/*    type="card-hortizontal"*/}
                {/*    className="cta-section-instance"*/}
                {/*></CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop>*/}
                {/*<FooterTypeLarge04ThemeDefaultBreakpointDesktop*/}
                {/*    type="large-04"*/}
                {/*    text="Start growing with Untitled"*/}
                {/*    className="footer-instance"*/}
                {/*></FooterTypeLarge04ThemeDefaultBreakpointDesktop>*/}
            </div>


        </>
    );
};

export default PricingPage;
