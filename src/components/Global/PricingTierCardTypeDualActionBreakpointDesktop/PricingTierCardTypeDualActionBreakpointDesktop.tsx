import "./PricingTierCardTypeDualActionBreakpointDesktop.css";
import {Au} from "../Au/Au";
import {ArrowRight} from "../ArrowRight/ArrowRight";
import {ArrowUp} from "../ArrowUp/ArrowUp";
import {
    BadgeSizeLgTypePillColorIconFalseColorBrand
} from "../BadgeSizeLgTypePillColorIconFalseColorBrand/BadgeSizeLgTypePillColorIconFalseColorBrand";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
} from "../ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault";
import {
    ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault
} from "../ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault/ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault";
import {
    CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
} from "../CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop/CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop";
import type {JSX} from "react";

export interface IPricingTierCardTypeDualActionBreakpointDesktopProps {
    type?:
        | "icon"
        | "call-out"
        | "icon-offset"
        | "dual-check-items"
        | "badge"
        | "badge-group"
        | "dual-action"
        | "banner"
        | "primary-card-simple"
        | "primary-card-icon";
    breakpoint?: "desktop" | "mobile";
    planName?: string;
    price: string;
    showPrice?: boolean;
    isPopular?: boolean;
    text?: string;
    text2?: string;
    text3?: string;
    features?: string[];
    className?: string;
}

export const PricingTierCardTypeDualActionBreakpointDesktop = ({
                                                                   type = "icon",
                                                                   breakpoint = "desktop",
                                                                   planName = "",
                                                                   price = "",
                                                                   showPrice = false,
                                                                   isPopular = false,
                                                                   text = "Basic features for up to 10 users",
                                                                   text2 = "",
                                                                   text3 = "undefined",
                                                                   features = [],
                                                                   className,
                                                                   ...props
                                                               }: IPricingTierCardTypeDualActionBreakpointDesktopProps): JSX.Element => {
    const variantsClassName = "type-" + type + " breakpoint-" + breakpoint;

    return (
        <div className={
            "pricing-tier-card-type-dual-action-breakpoint-desktop " +
            className +
            " " +
            variantsClassName
        }>
            <div className="header">
                <div className="heading-and-price">
                    <div className="heading-and-badge">
                        <div className="heading">{planName}</div>
                        <BadgeSizeLgTypePillColorIconFalseColorBrand
                            flagSwap={<Au className="au-instance"/>}
                            iconTrailingSwap={<ArrowRight className="arrow-right-instance"/>}
                            iconLeadingSwap={<ArrowUp className="arrow-up-instance"/>}
                            size="lg"
                            color="brand"
                            text="Popular"
                            isPopular={isPopular}
                            className="badge-instance"
                        ></BadgeSizeLgTypePillColorIconFalseColorBrand>
                    </div>
                    <div>
                        {showPrice && <div className="price">
                            <div className="price2">{price}</div>
                            <div className="period-wrap">
                                <div className="period">per month</div>
                            </div>
                        </div>}
                        {!showPrice && <div className="pb-12">{price}</div>}
                    </div>
                    <div className="supporting-text">{text}</div>
                </div>
                <div className="actions">
                    <ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
                        iconLeadingSwap={<Placeholder className="placeholder-instance"/>}
                        iconTrailing={false}
                        iconTrailingSwap={<Placeholder className="placeholder-instance"/>}
                        iconLeading={false}
                        size="xl"
                        text="Get started"
                        className="buttons-button-instance"
                    ></ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault>
                    {/*<ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault*/}
                    {/*    iconTrailingSwap={<Placeholder className="placeholder-instance"/>}*/}
                    {/*    iconTrailing={false}*/}
                    {/*    iconLeadingSwap={<Placeholder className="placeholder-instance"/>}*/}
                    {/*    iconLeading={false}*/}
                    {/*    size="xl"*/}
                    {/*    hierarchy="secondary-gray"*/}
                    {/*    text="Chat to sales"*/}
                    {/*    className="buttons-button-instance"*/}
                    {/*></ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault>*/}
                </div>
            </div>
            <div className="content">
                <div className="text-and-supporting-text">
                    <div className="text">FEATURES</div>
                    <div className="supporting-text2">{text2}</div>
                </div>
                <div className="check-items">
                    {features.map((feature, index) => (
                        <CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
                            key={index}
                            type="line"
                            text={feature}
                            className="check-item-text-instance"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
