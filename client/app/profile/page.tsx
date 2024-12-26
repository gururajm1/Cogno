import { SidebarNav } from '@/components/sidebar-nav'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FileText, Home, TrendingUp, Brain, Upload } from 'lucide-react'

export default function Profile() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#222] rounded-lg p-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-600 rounded-full overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl">@Cognoy.child</h2>
                  <button className="text-purple-400 text-sm">Change avatar</button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Username</label>
                  <Input defaultValue="Cognoy.child" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Parent's email</label>
                  <Input defaultValue="parent@Cognoy.io" type="email" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Emergency contact</label>
                  <Input defaultValue="+00 111 222 333 444" type="tel" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Date of birth</label>
                    <Input placeholder="MM/DD/YYYY" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Nationality</label>
                    <Input placeholder="Country" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Languages spoken</label>
                  <Input defaultValue="English, Spanish" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Home address</label>
                  <Input placeholder="Street Address, City, Country" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Guardian contact</label>
                  <Input defaultValue="+11 222 333 444" type="tel" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Special needs</label>
                    <Input placeholder="e.g. Autism, ADHD" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Sensory preferences</label>
                    <Input placeholder="Visual, Auditory" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-[#222] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Progress Reports</h2>
                <div className="space-y-4">
                  {[
                    { title: 'EEG Graphs', icon: TrendingUp },
                    { title: 'Game Performance Graphs', icon: TrendingUp },
                    { title: 'Behavioral Insights', icon: Brain },
                    { title: 'Cognitive Development', icon: Brain }
                  ].map((report) => (
                    <div key={report.title} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#333] rounded-lg flex items-center justify-center">
                          <report.icon className="w-5 h-5" />
                        </div>
                        <span>{report.title}</span>
                      </div>
                      <Button variant="ghost" className="text-purple-400">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#222] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Identification Documents</h2>
                <div className="space-y-4">
                  {[
                    { title: 'ID Card', icon: FileText },
                    { title: 'Passport', icon: FileText },
                    { title: 'Residence Proof', icon: Home }
                  ].map((doc) => (
                    <div key={doc.title} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <doc.icon className="w-5 h-5" />
                        </div>
                        <span>{doc.title}</span>
                      </div>
                      <Button variant="ghost" className="text-purple-400">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 py-2 text-black" variant="outline">
                  <Upload className="w-4 h-4 mr-2 text-black" />
                  Upload new document
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

