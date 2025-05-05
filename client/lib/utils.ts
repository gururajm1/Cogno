import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Filter out custom props that shouldn't be passed to HTML elements
 * to prevent React hydration warnings
 */
export function filterHTMLProps<T extends Record<string, any>>(
  props: T,
  propsToFilter: string[]
): Omit<T, typeof propsToFilter[number]> {
  const filteredProps = { ...props }
  
  propsToFilter.forEach(prop => {
    delete filteredProps[prop]
  })
  
  return filteredProps
}

