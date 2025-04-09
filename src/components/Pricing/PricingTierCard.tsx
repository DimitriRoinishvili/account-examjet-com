import "./PricingTierCard.css";
import {Au} from '@/components/Global/Au/Au';
import {
    CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
} from '@/components/Global/CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop/CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop';
import {ArrowUp} from '@/components/Global/ArrowUp/ArrowUp';
import {ArrowRight} from '@/components/Global/ArrowRight/ArrowRight';
import {
    BadgeSizeLgTypePillColorIconFalseColorBrand
} from '@/components/Global/BadgeSizeLgTypePillColorIconFalseColorBrand/BadgeSizeLgTypePillColorIconFalseColorBrand';
import {
    ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
} from '@/components/Global/ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault';
import {Placeholder} from '@/components/Global/Placeholder/Placeholder';
import {
    ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault
} from '@/components/Global/ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault/ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault';

export const PricingTierCard = ({
                                    type = "icon",
                                    breakpoint = "desktop",
                                    className,
                                    ...props
                                }) => {
    const variantsClassName = "type-" + type + " breakpoint-" + breakpoint;

    return (
        <div></div>
        // <div className={"pricing-tier-card " + className + " " + variantsClassName}>
        //     <div className="header">
        //         <div className="heading-and-price">
        //             <div className="heading-and-badge">
        //                 <div className="heading">Basic plan </div>
        //                 <BadgeSizeLgTypePillColorIconFalseColorBrand
        //                     flagSwap={<Au className="au-instance" />}
        //                     iconTrailingSwap={<ArrowRight className="arrow-right-instance" />}
        //                     iconLeadingSwap={<ArrowUp className="arrow-up-instance" />}
        //                     size="lg"
        //                     color="brand"
        //                     className="badge-instance"
        //                 ></BadgeSizeLgTypePillColorIconFalseColorBrand>
        //             </div>
        //             <div className="price">
        //                 <div className="price2">$10 </div>
        //                 <div className="period-wrap">
        //                     <div className="period">per month </div>
        //                 </div>
        //             </div>
        //             <div className="supporting-text">Our most popular plan. </div>
        //         </div>
        //         <div className="actions">
        //             <ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
        //                 iconLeadingSwap={<Placeholder className="placeholder-instance" />}
        //                 iconTrailing={false}
        //                 iconTrailingSwap={<Placeholder className="placeholder-instance" />}
        //                 iconLeading={false}
        //                 size="xl"
        //                 className="buttons-button-instance"
        //             ></ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault>
        //             <ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault
        //                 iconTrailingSwap={<Placeholder className="placeholder-instance" />}
        //                 iconTrailing={false}
        //                 iconLeadingSwap={<Placeholder className="placeholder-instance" />}
        //                 iconLeading={false}
        //                 size="xl"
        //                 hierarchy="secondary-gray"
        //                 className="buttons-button-instance"
        //             ></ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault>
        //         </div>
        //     </div>
        //     <div className="content">
        //         <div className="text-and-supporting-text">
        //             <div className="text">FEATURES </div>
        //             <div className="supporting-text2">
        //     <span>
        //       <span className="supporting-text-2-span">Everything in our</span>
        //       <span className="supporting-text-2-span2">free plan</span>
        //       <span className="supporting-text-2-span3"></span>
        //       <span className="supporting-text-2-span4">plus....</span>
        //     </span>{" "}
        //             </div>
        //         </div>
        //         <div className="check-items">
        //             <CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
        //                 type="line"
        //                 className="check-item-text-instance"
        //             ></CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop>
        //             <CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
        //                 type="line"
        //                 className="check-item-text-instance"
        //             ></CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop>
        //             <CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
        //                 type="line"
        //                 className="check-item-text-instance"
        //             ></CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop>
        //             <CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
        //                 type="line"
        //                 text="20 GB individual data each user"
        //                 className="check-item-text-instance"
        //             ></CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop>
        //             <CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop
        //                 type="line"
        //                 className="check-item-text-instance"
        //             ></CheckItemTextTypeLineSizeSmColorPrimaryBreakpointDesktop>
        //         </div>
        //     </div>
        // </div>
    );
};
