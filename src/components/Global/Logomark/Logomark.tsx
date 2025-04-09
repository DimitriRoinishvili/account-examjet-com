import "./Logomark.css";
import type {JSX} from "react";

export interface ILogomarkProps {
    className?: string;
}

export const Logomark = ({
                             className,
                             ...props
                         }: ILogomarkProps): JSX.Element => {
    return (
        <div className={"logomark " + className}>
            <div className="content">
                <img className="grid" src="/images/global/grid0.svg"/>
                <img className="palantir" src="/images/global/palantir0.svg"/>
                <div className="blur"></div>
            </div>
        </div>
    );
};
