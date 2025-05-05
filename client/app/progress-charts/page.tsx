"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Data for Multiple Line Chart (Game Score and EEG Data)
const combinedChartData = [
  { month: "January", gameScore: 65, eegData: 72 },
  { month: "February", gameScore: 80, eegData: 75 },
  { month: "March", gameScore: 95, eegData: 85 },
  { month: "April", gameScore: 88, eegData: 90 },
  { month: "May", gameScore: 92, eegData: 88 },
  { month: "June", gameScore: 98, eegData: 95 },
]

const combinedChartConfig = {
  gameScore: {
    label: "Game Score",
    color: "hsl(265, 80%, 60%)", // Purple shade
  },
  eegData: {
    label: "EEG Progress",
    color: "hsl(280, 75%, 45%)", // Darker purple shade
  },
} satisfies ChartConfig

// Data for Game Progress Bar Chart
const gameProgressData = [
  { week: "Week 1", gamesPlayed: 4 },
  { week: "Week 2", gamesPlayed: 7 },
  { week: "Week 3", gamesPlayed: 5 },
  { week: "Week 4", gamesPlayed: 9 },
  { week: "Week 5", gamesPlayed: 12 },
  { week: "Week 6", gamesPlayed: 10 },
]

const gameProgressConfig = {
  gamesPlayed: {
    label: "Games Played",
    color: "hsl(265, 80%, 60%)", // Purple shade
  },
} satisfies ChartConfig

// Data for EEG Progress Bar Chart
const eegProgressData = [
  { session: "Session 1", eegScore: 62 },
  { session: "Session 2", eegScore: 70 },
  { session: "Session 3", eegScore: 75 },
  { session: "Session 4", eegScore: 83 },
  { session: "Session 5", eegScore: 88 },
  { session: "Session 6", eegScore: 92 },
]

const eegProgressConfig = {
  eegScore: {
    label: "EEG Score",
    color: "hsl(280, 75%, 45%)", // Darker purple shade
  },
} satisfies ChartConfig

export default function ProgressChartsPage() {
  return (
    <SidebarProvider>
      <AppSidebar params={"game-progress-charts"} />
      <SidebarInset className="flex h-screen">
        <div className="flex-grow overflow-y-auto">
          <main className="min-h-screen bg-gradient-to-b from-[#f8f7fa] to-[#f1e8fd] py-4 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 text-black">
                  Progress <span className="text-[#9333ea]">Charts</span>
                </h1>
                <div className="h-3 w-24 bg-[#9333ea] mx-auto mt-3 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* Line Chart with 2 lines - Combined Game Score and EEG Progress */}
                <Card className="col-span-full shadow-md border-none bg-white">
                  <CardHeader>
                    <CardTitle>Progress Overview</CardTitle>
                    <CardDescription>Game Score and EEG Progress (Last 6 Months)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={combinedChartConfig}>
                      <ResponsiveContainer width="100%" height={350}>
                        <LineChart
                          accessibilityLayer
                          data={combinedChartData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 10,
                            bottom: 10,
                          }}
                        >
                          <CartesianGrid vertical={false} strokeDasharray="3 3" />
                          <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                          />
                          <YAxis tickLine={false} axisLine={false} />
                          <Tooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Line
                            dataKey="gameScore"
                            type="monotone"
                            stroke="var(--color-gameScore)"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                          />
                          <Line
                            dataKey="eegData"
                            type="monotone"
                            stroke="var(--color-eegData)"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                  <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none text-[#9333ea]">
                          Improvement of 15.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                          Showing combined progress for both game scores and EEG data
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>

                {/* Bar Chart - Game Progress */}
                <Card className="shadow-md border-none bg-white">
                  <CardHeader>
                    <CardTitle>Games Played Progress</CardTitle>
                    <CardDescription>Weekly games completed by the child</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={gameProgressConfig}>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart accessibilityLayer data={gameProgressData}>
                          <CartesianGrid vertical={false} strokeDasharray="3 3" />
                          <XAxis
                            dataKey="week"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                          />
                          <YAxis tickLine={false} axisLine={false} />
                          <Tooltip content={<ChartTooltipContent hideLabel />} />
                          <Bar dataKey="gamesPlayed" fill="var(--color-gamesPlayed)" radius={8} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none text-[#9333ea]">
                      8.3% increase in engagement <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                      Weekly record of games played by the child
                    </div>
                  </CardFooter>
                </Card>

                {/* Bar Chart - EEG Progress */}
                <Card className="shadow-md border-none bg-white">
                  <CardHeader>
                    <CardTitle>EEG Data Progress</CardTitle>
                    <CardDescription>Session by session improvement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={eegProgressConfig}>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart accessibilityLayer data={eegProgressData}>
                          <CartesianGrid vertical={false} strokeDasharray="3 3" />
                          <XAxis
                            dataKey="session"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                          />
                          <YAxis tickLine={false} axisLine={false} />
                          <Tooltip content={<ChartTooltipContent hideLabel />} />
                          <Bar dataKey="eegScore" fill="var(--color-eegScore)" radius={8} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none text-[#9333ea]">
                      12.4% improvement in EEG readings <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                      Progress of EEG readings across therapy sessions
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
