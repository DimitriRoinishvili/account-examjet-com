import "./ArrowRight.css";
import type {JSX} from "react";

export interface IArrowRightProps {
  className?: string;
}

export const ArrowRight = ({
  className,
  ...props
}: IArrowRightProps): JSX.Element => {
  return <img className={"arrow-right " + className} src="arrow-right.svg" />;
};
