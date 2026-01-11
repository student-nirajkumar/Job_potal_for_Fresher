
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-purple-600 text-white hover:bg-purple-700",
        outline: "border border-gray-300 hover:bg-gray-100",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        ghost: "hover:bg-gray-100",
        link: "text-purple-600 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        type={Comp === "button" ? "button" : undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
