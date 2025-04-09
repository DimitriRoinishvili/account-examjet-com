import "./ArrowUp.css";
import type {JSX} from "react";

export interface IArrowUpProps {
  className?: string;
}

export const ArrowUp = ({
  className,
  ...props
}: IArrowUpProps): JSX.Element => {
  return <img className={"arrow-up " + className} src="arrow-up.svg" />;
};
