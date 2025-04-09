import "./FooterLinksColumnColorBrandThemeLight.css";
import { FooterLinkBadgeFalseColorBrandThemeLightStateDefault } from "../FooterLinkBadgeFalseColorBrandThemeLightStateDefault/FooterLinkBadgeFalseColorBrandThemeLightStateDefault";
import type {JSX} from "react";

export interface IFooterLinksColumnColorBrandThemeLightProps {
  heading?: boolean;
  color?: "default" | "brand";
  theme?: "light" | "dark";
  component?: JSX.Element;
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  className?: string;
}

export const FooterLinksColumnColorBrandThemeLight = ({
  heading = true,
  color = "default",
  theme = "light",
  component = (
    <FooterLinkBadgeFalseColorBrandThemeLightStateDefault
      badge="false"
      color="brand"
      theme="light"
      state="default"
    />
  ),
  text = "undefined",
  text2 = "undefined",
  text3 = "undefined",
  text4 = "undefined",
  text5 = "undefined",
  className,
  ...props
}: IFooterLinksColumnColorBrandThemeLightProps): JSX.Element => {
  const variantsClassName = "color-" + color + " theme-" + theme;

  return (
    <div
      className={
        "footer-links-column-color-brand-theme-light " +
        className +
        " " +
        variantsClassName
      }
    >
      {heading && (
        <>
          <div className="heading">Product </div>
        </>
      )}
      <div className="footer-links">
        <FooterLinkBadgeFalseColorBrandThemeLightStateDefault
          color="brand"
          className="footer-link-instance"
        ></FooterLinkBadgeFalseColorBrandThemeLightStateDefault>
        <FooterLinkBadgeFalseColorBrandThemeLightStateDefault
          color="brand"
          // text="undefined"
          className="footer-link-instance"
        ></FooterLinkBadgeFalseColorBrandThemeLightStateDefault>
        {component}
        <FooterLinkBadgeFalseColorBrandThemeLightStateDefault
          color="brand"
          // text="undefined"
          className="footer-link-instance"
        ></FooterLinkBadgeFalseColorBrandThemeLightStateDefault>
        <FooterLinkBadgeFalseColorBrandThemeLightStateDefault
          color="brand"
          // text="undefined"
          className="footer-link-instance"
        ></FooterLinkBadgeFalseColorBrandThemeLightStateDefault>
        <FooterLinkBadgeFalseColorBrandThemeLightStateDefault
          color="brand"
          // text="undefined"
          className="footer-link-instance"
        ></FooterLinkBadgeFalseColorBrandThemeLightStateDefault>
      </div>
    </div>
  );
};
