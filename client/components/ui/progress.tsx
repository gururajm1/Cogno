"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn, filterHTMLProps } from "@/lib/utils"

// Separate interface for our custom props
interface CustomProgressProps {
  indicatorClassName?: string;
}

// Combine the standard root props with our custom props
type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & CustomProgressProps;

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorClassName, ...rootProps }, ref) => {
  // Filter out custom props to prevent React hydration warnings
  const filteredProps = filterHTMLProps(rootProps, ['indicatorClassName']);
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      suppressHydrationWarning={true}
      {...filteredProps}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all",
          indicatorClassName
        )}
        suppressHydrationWarning={true}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
