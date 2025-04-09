import "./CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop.css";
import {Placeholder} from "../Placeholder/Placeholder";
import {
    ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault
} from "../ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault/ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault";
import {
    ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
} from "../ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault/ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault";
import type {JSX} from "react";

export interface ICtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktopProps {
    type?:
        | "simple-centered"
        | "simple-left"
        | "simple-logos-01"
        | "simple-logos-02"
        | "split-image-01"
        | "split-image-02"
        | "split-image-03"
        | "split-image-04"
        | "split-image-quote-01"
        | "split-image-quote-02"
        | "split-image-quote-03"
        | "split-image-quote-04"
        | "i-phone-mockup-01"
        | "i-phone-mockup-02"
        | "i-phone-mockup-03"
        | "i-phone-mockup-04"
        | "screen-mockup-01"
        | "screen-mockup-02"
        | "screen-mockup-03"
        | "screen-mockup-04"
        | "card-hortizontal"
        | "card-vertical"
        | "abstract-images";
    theme?: "default" | "brand";
    breakpoint?: "desktop" | "mobile";
    className?: string;
}

export const CtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktop = ({
                                                                               type = "simple-centered",
                                                                               theme = "default",
                                                                               breakpoint = "desktop",
                                                                               className,
                                                                               ...props
                                                                           }: ICtaSectionTypeCardHortizontalThemeDefaultBreakpointDesktopProps): JSX.Element => {
    const variantsClassName =
        "type-" + type + " theme-" + theme + " breakpoint-" + breakpoint;

    return (
        <div
            className={
                "cta-section-type-card-hortizontal-theme-default-breakpoint-desktop " +
                className +
                " " +
                variantsClassName
            }
        >
            <div className="container">
                <div className="content">
                    <div className="heading-and-supporting-text">
                        <div className="heading">Start your 30-day free trial</div>
                        <div className="supporting-text">
                            Join over 4,000+ startups already growing with Untitled.{" "}
                        </div>
                    </div>
                    <div className="actions">
                        <ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault
                            iconTrailingSwap={
                                <Placeholder className="placeholder-instance"/>
                            }
                            iconTrailing={false}
                            iconLeadingSwap={<Placeholder className="placeholder-instance"/>}
                            iconLeading={false}
                            size="xl"
                            hierarchy="secondary-gray"
                            text="Learn more"
                            className="buttons-button-instance"
                        ></ButtonsButtonSizeXlHierarchySecondaryGrayIconDefaultStateDefault>
                        <ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault
                            iconLeadingSwap={<Placeholder className="placeholder-instance"/>}
                            iconTrailing={false}
                            iconTrailingSwap={
                                <Placeholder className="placeholder-instance"/>
                            }
                            iconLeading={false}
                            size="xl"
                            text="Get started"
                            className="buttons-button-instance2"
                        ></ButtonsButtonSizeXlHierarchyPrimaryIconDefaultStateDefault>
                    </div>
                </div>
            </div>
        </div>
    );
};
