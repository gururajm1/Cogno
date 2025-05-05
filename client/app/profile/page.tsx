import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LineChartIcon as ChartLineUp, Brain, Activity, FileText } from "lucide-react"

export default function ProfileSettings() {
  return (
    <SidebarProvider>
      <AppSidebar params={"profile"}/>
      <SidebarInset className=" bg-gradient-to-b from-[#f8f7fa] to-[#f1e8fd]">
        <div className="min-h-screen">
          <header className="border-b border-gray-200 px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          </header>

          <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-3">
            <div className="col-span-2 space-y-8 rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                  <div className="flex h-full w-full items-center justify-center bg-[#9333ea]/20 text-sm font-medium text-[#9333ea]">
                    Profile
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">@Cogno.child</h2>
                  <button className="mt-1 text-sm font-medium text-[#9333ea] hover:text-[#9333ea]/80">
                    Change avatar
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="mb-1 block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <Input
                    id="username"
                    defaultValue="balu"
                    className="border-gray-300 focus-visible:ring-[#9333ea] text-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Parent's email
                  </label>
                  <Input
                    id="email"
                    defaultValue="parent@Cogno.io"
                    className="border-gray-300 focus-visible:ring-[#9333ea] text-black"
                  />
                </div>

                <div>
                  <label htmlFor="emergency" className="mb-1 block text-sm font-medium text-gray-700">
                    Emergency contact
                  </label>
                  <Input
                    id="emergency"
                    defaultValue="+91 9876 543210"
                    className="border-gray-300 focus-visible:ring-[#9333ea] text-black"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="dob" className="mb-1 block text-sm font-medium text-gray-700">
                      Date of birth
                    </label>
                    <Input 
                      id="dob" 
                      defaultValue="06/15/2003" 
                      className="border-gray-300 focus-visible:ring-[#9333ea] text-black" 
                    />
                  </div>
                  <div>
                    <label htmlFor="nationality" className="mb-1 block text-sm font-medium text-gray-700">
                      Nationality
                    </label>
                    <Input
                      id="nationality"
                      defaultValue="Indian"
                      className="border-gray-300 focus-visible:ring-[#9333ea] text-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="languages" className="mb-1 block text-sm font-medium text-gray-700">
                    Languages spoken
                  </label>
                  <Input
                    id="languages"
                    defaultValue="English, Tamil, Hindi"
                    className="border-gray-300 focus-visible:ring-[#9333ea] text-black"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
                    Home address
                  </label>
                  <Input
                    id="address"
                    defaultValue="13/24 abc cross street, coimbatore"
                    className="border-gray-300 focus-visible:ring-[#9333ea] text-black"
                  />
                </div>

                <div>
                  <label htmlFor="guardian" className="mb-1 block text-sm font-medium text-gray-700">
                    Guardian contact
                  </label>
                  <Input
                    id="guardian"
                    defaultValue="+91 8765 432109"
                    className="border-gray-300 focus-visible:ring-[#9333ea] text-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

