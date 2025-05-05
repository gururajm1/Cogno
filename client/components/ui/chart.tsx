"use client"

import * as React from "react"
import { TooltipProps } from "recharts"
import { ChartStyleProvider, chartStyles } from "@/app/lib/chart-styles"

export type ChartConfig = Record<
  string,
  {
    label: string
    color: string
  }
>

interface ChartContainerProps {
  config: ChartConfig
  children: React.ReactNode
}

export function ChartContainer({ config, children }: ChartContainerProps) {
  return (
    <ChartStyleProvider config={config}>
      <div className="w-full">{children}</div>
    </ChartStyleProvider>
  )
}

interface ChartTooltipProps extends TooltipProps<any, any> {}

export function ChartTooltip(props: ChartTooltipProps) {
  return <>{props.content}</>
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: Array<{
    name: string
    value: string | number
    dataKey: string
    payload: Record<string, any>
  }>
  label?: string
  hideLabel?: boolean
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  hideLabel = false,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-md border bg-background px-4 py-2 shadow-sm">
      {!hideLabel && <p className="mb-2 font-medium">{label}</p>}
      <div className="grid gap-2">
        {payload.map((item) => {
          const dataKey = item.dataKey as string
          const color = chartStyles.getColorForKey(dataKey)

          return (
            <div key={item.dataKey} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: color,
                }}
              />
              <p className="font-medium" style={{ color }}>
                {chartStyles.getConfigForKey(dataKey)?.label}
              </p>
              <p className="ml-auto font-medium">{item.value}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
