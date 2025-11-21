import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "px-3 rounded-lg justify-center h-9 outline-none transition-colors cursor-pointer flex items-center gap-3",
  {
    variants: {
      variant: {
        filled: "bg-primary-500 text-sm text-text-3 font-medium",
        ghost: "bg-bg-2 text-text-2 hover:bg-primary-500 hover:text-text-3",
      },
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  variant = "filled",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ className, variant }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
