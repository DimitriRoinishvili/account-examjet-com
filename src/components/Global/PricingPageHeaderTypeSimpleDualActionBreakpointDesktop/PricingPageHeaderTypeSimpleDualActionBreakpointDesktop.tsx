import "./PricingPageHeaderTypeSimpleDualActionBreakpointDesktop.css";
import {
    HeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktop,
} from "../HeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktop/HeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktop";
import {
    PricingTierCardTypeDualActionBreakpointDesktop,
} from "../PricingTierCardTypeDualActionBreakpointDesktop/PricingTierCardTypeDualActionBreakpointDesktop";
import type {JSX} from "react";

export interface IPricingPageHeaderTypeSimpleDualActionBreakpointDesktopProps {
    type?:
        | "simple-icon"
        | "simple-call-out"
        | "simple-icon-offset"
        | "simple-dual-check-items"
        | "gray-badge"
        | "primary-dark-badge-group"
        | "abstract-angles"
        | "simple-accent-line"
        | "simple-dual-action"
        | "simple-banner"
        | "primary-card-simple"
        | "primary-card-icon"
        | "large-table-01"
        | "large-table-02";
    breakpoint?: "desktop" | "mobile";
    text?: string;
    text2?: string;
    text3?: string;
    className?: string;
}

export const PricingPageHeaderTypeSimpleDualActionBreakpointDesktop = ({
                                                                           type = "simple-icon",
                                                                           breakpoint = "desktop",
                                                                           text = "undefined",
                                                                           text2 = "undefined",
                                                                           text3 = "undefined",
                                                                           className = "",
                                                                           ...props
                                                                       }: IPricingPageHeaderTypeSimpleDualActionBreakpointDesktopProps): JSX.Element => {
    const variantsClassName = "type-" + type + " breakpoint-" + breakpoint;

    return (
        <div className={
            "pricing-page-header-type-simple-dual-action-breakpoint-desktop " +
            className +
            " " +
            variantsClassName
        }>
            <HeaderSectionAlignmentCenterActionsTabsColorDefaultBreakpointDesktop
                actions="tabs"
                text="Simple, transparent pricing"
                text2="We believe ExamJet should be accessible to all companies, no matter the size"
                className="header-section-instance"
            />

            <div className="section">
                <div className={`container ${breakpoint === "mobile" ? "px-4" : ""}`}>
                    <div className={
                        breakpoint === "mobile"
                            ? "content flex flex-col gap-6"
                            : "content pricing-cards-grid"
                    }>
                        <PricingTierCardTypeDualActionBreakpointDesktop
                            type="dual-action"
                            planName="Basic"
                            text="Essential Featues"
                            showPrice={true}
                            price="$59"
                            text3="20 GB individual data each user"
                            features={[
                                "Up to 10 Question Banks",
                                "Up to 20 Students",
                                "1 Administrator",
                                "10 GB of Storage",
                                "Basic Analytics",
                            ]}
                            className="pricing-tier-card-instance"
                        />
                        <PricingTierCardTypeDualActionBreakpointDesktop
                            type="dual-action"
                            planName="Pro"
                            showPrice={true}
                            price="$359"
                            isPopular={true}
                            text="Growing teams up to 100 students"
                            text2="Everything in Basic plus..."
                            features={[
                                "Up to 100 Question Banks",
                                "Up to 1000 Students",
                                "Up to 10 Administrators",
                                "1000 GB of Storage",
                                "Full Analytics",
                                "Priority Support",
                            ]}
                            className="pricing-tier-card-instance"
                        />
                        <PricingTierCardTypeDualActionBreakpointDesktop
                            type="dual-action"
                            planName="Enterprise"
                            showPrice={false}
                            price="Contact Us"
                            text="Advanced features + unlimited users."
                            text2="Everything in Pro plus..."
                            features={[
                                "Unlimited Question Banks",
                                "Unlimited Students",
                                "Unlimited Administrators",
                                "Unlimited Storage",
                            ]}
                            className="pricing-tier-card-instance"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
