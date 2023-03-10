import { ButtonOrLink } from "./ButtonOrLink";
import type { ButtonOrLinkProps } from "./ButtonOrLink";

export interface ButtonProps extends ButtonOrLinkProps {
  className?: string;
}

export default function Button({ className, ...props }: ButtonProps) {
  return <ButtonOrLink className={className} {...props} />;
}
