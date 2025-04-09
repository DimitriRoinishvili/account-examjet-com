import "./TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop.css";
import {StarIconFill100ColorYellow} from "../StarIconFill100ColorYellow/StarIconFill100ColorYellow";
import {
    AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
} from "../AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse/AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse";
import {VerifiedTickSizeLg} from "../VerifiedTickSizeLg/VerifiedTickSizeLg";
import type {JSX} from "react";

export interface ITestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktopProps {
    type?:
        | "simple-centered-01"
        | "simple-centered-02"
        | "simple-centered-03"
        | "simple-left-aligned"
        | "split-image-01"
        | "split-image-02"
        | "split-image-03"
        | "abstract-image"
        | "glassmorphic-cards-01"
        | "glassmorphic-cards-03"
        | "glassmorphic-cards-02"
        | "case-study-cards"
        | "social-cards-01"
        | "social-cards-02"
        | "social-cards-03"
        | "card"
        | "card-split-image";
    theme?: "default" | "brand";
    breakpoint?: "desktop" | "mobile";
    className?: string;
}

export const TestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktop =
    ({
         type = "simple-centered-01",
         theme = "default",
         breakpoint = "desktop",
         className,
         ...props
     }: ITestimonialSectionTypeSocialCards02ThemeDefaultBreakpointDesktopProps): JSX.Element => {
        const variantsClassName =
            "type-" + type + " theme-" + theme + " breakpoint-" + breakpoint;

        return (
            <div
                className={
                    "testimonial-section-type-social-cards-02-theme-default-breakpoint-desktop " +
                    className +
                    " " +
                    variantsClassName
                }
            >
                <div className="container">
                    <div className="content">
                        <div className="heading-and-supporting-text">
                            <div className="heading">Wall of love</div>
                            <div className="supporting-text">
                                Hear first-hand from our incredible community of customers.{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="content2">
                        <div className="cards">
                            <div className="card">
                                <div className="stars-and-quote">
                                    <div className="stars">
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                    </div>
                                    <div className="quote">
                                        We’ve been using Untitled to kick start every new project
                                        and can’t imagine working without it.{" "}
                                    </div>
                                </div>
                                <div className="avatar-and-text">
                                    <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                                        size="lg"
                                        className="avatar-instance"
                                    ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                                    <div className="text-and-supporting-text">
                                        <div className="text-and-verified-tick">
                                            <div className="text">Sienna Hewitt</div>
                                            <VerifiedTickSizeLg
                                                size="lg"
                                                className="verified-tick-instance"
                                            ></VerifiedTickSizeLg>
                                        </div>
                                        <div className="supporting-text2">@siennahewitt</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="stars-and-quote">
                                    <div className="stars">
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                    </div>
                                    <div className="quote">
                                        From concept to completion, Untitled helps us deliver
                                        outstanding designs faster than ever.{" "}
                                    </div>
                                </div>
                                <div className="avatar-and-text">
                                    <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                                        size="lg"
                                        className="avatar-instance2"
                                    ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                                    <div className="text-and-supporting-text">
                                        <div className="text-and-verified-tick">
                                            <div className="text">Kari Rasmussen</div>
                                            <VerifiedTickSizeLg
                                                size="lg"
                                                className="verified-tick-instance2"
                                            ></VerifiedTickSizeLg>
                                        </div>
                                        <div className="supporting-text2">@itskari</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="stars-and-quote">
                                    <div className="stars">
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                    </div>
                                    <div className="quote">
                                        Every project starts with Untitled which has 10x’d our
                                        output. It saves us time while keeping the quality
                                        top-notch.{" "}
                                    </div>
                                </div>
                                <div className="avatar-and-text">
                                    <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                                        size="lg"
                                        className="avatar-instance3"
                                    ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                                    <div className="text-and-supporting-text">
                                        <div className="text-and-verified-tick">
                                            <div className="text">Amélie Laurent</div>
                                            <VerifiedTickSizeLg
                                                size="lg"
                                                className="verified-tick-instance3"
                                            ></VerifiedTickSizeLg>
                                        </div>
                                        <div className="supporting-text2">@alaurent_</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="stars-and-quote">
                                    <div className="stars">
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                    </div>
                                    <div className="quote">
                                        Untitled has quickly become our go-to resource for every
                                        design project. The results are consistently amazing.{" "}
                                    </div>
                                </div>
                                <div className="avatar-and-text">
                                    <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                                        size="lg"
                                        className="avatar-instance4"
                                    ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                                    <div className="text-and-supporting-text">
                                        <div className="text-and-verified-tick">
                                            <div className="text">Aliah Lane</div>
                                            <VerifiedTickSizeLg
                                                size="lg"
                                                className="verified-tick-instance4"
                                            ></VerifiedTickSizeLg>
                                        </div>
                                        <div className="supporting-text2">@aliah_ux</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="stars-and-quote">
                                    <div className="stars">
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                    </div>
                                    <div className="quote">
                                        Untitled offers exactly what we need to get started quickly.
                                        It&#039;s helped us cut down on design time significantly!{" "}
                                    </div>
                                </div>
                                <div className="avatar-and-text">
                                    <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                                        size="lg"
                                        className="avatar-instance5"
                                    ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                                    <div className="text-and-supporting-text">
                                        <div className="text-and-verified-tick">
                                            <div className="text">Eduard Franz</div>
                                            <VerifiedTickSizeLg
                                                size="lg"
                                                className="verified-tick-instance5"
                                            ></VerifiedTickSizeLg>
                                        </div>
                                        <div className="supporting-text2">@eduardfranz</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="stars-and-quote">
                                    <div className="stars">
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                        <StarIconFill100ColorYellow
                                            fill="100"
                                            className="star-icon-instance"
                                        ></StarIconFill100ColorYellow>
                                    </div>
                                    <div className="quote">
                                        Untitled offers everything we need to get started on UI
                                        projects quickly. We go from zero to one, insanely fast.{" "}
                                    </div>
                                </div>
                                <div className="avatar-and-text">
                                    <AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse
                                        size="lg"
                                        className="avatar-instance6"
                                    ></AvatarSizeLgPlaceholderFalseTextFalseStatusIconFalse>
                                    <div className="text-and-supporting-text">
                                        <div className="text-and-verified-tick">
                                            <div className="text">Lily-Rose Chedjou</div>
                                            <VerifiedTickSizeLg
                                                size="lg"
                                                className="verified-tick-instance6"
                                            ></VerifiedTickSizeLg>
                                        </div>
                                        <div className="supporting-text2">@lilyrose</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
