"use client"

import { DisorderCard } from "../components/disorder-card"
import DoctorDashboard from "../components/sidebar"
import { disorders } from "@/data/disorders"

export default function Games() {
  return (
    <div className="flex">
      <DoctorDashboard />
      <div className="flex-grow p-4">
        <main className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Learning Games</h1>
              <p className="text-lg text-muted-foreground">
                Choose a learning area to start playing!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {disorders.map((disorder) => (
                <DisorderCard
                  key={disorder.id}
                  id={disorder.id}
                  icon={disorder.icon}
                  title={disorder.title}
                  description={disorder.description}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
