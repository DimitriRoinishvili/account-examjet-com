import "./VerifiedTickSizeLg.css";
import type {JSX} from "react";

export interface IVerifiedTickSizeLgProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2-xl" | "3-xl" | "4-xl";
    className?: string;
}

export const VerifiedTickSizeLg = ({
                                       size = "xs",
                                       className,
                                       ...props
                                   }: IVerifiedTickSizeLgProps): JSX.Element => {
    const variantsClassName = "size-" + size;

    return (
        <img
            className={"verified-tick-size-lg " + className + " " + variantsClassName}
            src="/images/global/verified-tick-size-lg.svg"
        />
    );
};
