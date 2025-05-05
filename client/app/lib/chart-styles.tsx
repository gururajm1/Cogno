"use client"

import * as React from "react"
import { createContext, useContext } from "react"
import { ChartConfig } from "@/components/ui/chart"

interface ChartStylesContextValue {
  getColorForKey: (key: string) => string
  getConfigForKey: (key: string) => { label: string; color: string } | undefined
}

const ChartStylesContext = createContext<ChartStylesContextValue | null>(null)

interface ChartStyleProviderProps {
  config: ChartConfig
  children: React.ReactNode
}

export function ChartStyleProvider({
  config,
  children,
}: ChartStyleProviderProps) {
  const getColorForKey = React.useCallback(
    (key: string) => {
      const item = config[key]
      return item?.color ?? "#000000"
    },
    [config]
  )

  const getConfigForKey = React.useCallback(
    (key: string) => {
      return config[key]
    },
    [config]
  )

  return (
    <ChartStylesContext.Provider
      value={{
        getColorForKey,
        getConfigForKey,
      }}
    >
      <style jsx global>{`
        :root {
          ${Object.entries(config).map(
            ([key, value]) => `--color-${key}: ${value.color};`
          )}
        }
      `}</style>
      {children}
    </ChartStylesContext.Provider>
  )
}

export const chartStyles = {
  getColorForKey: (key: string) => {
    const context = useContext(ChartStylesContext)
    if (!context) {
      throw new Error("useChartStyles must be used within a ChartStyleProvider")
    }
    return context.getColorForKey(key)
  },
  getConfigForKey: (key: string) => {
    const context = useContext(ChartStylesContext)
    if (!context) {
      throw new Error("useChartStyles must be used within a ChartStyleProvider")
    }
    return context.getConfigForKey(key)
  },
}
