"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Brain, 
  Upload, 
  FileText, 
  Check, 
  AlertCircle, 
  BarChart4,
  Activity 
} from "lucide-react"

export default function EEGAnalyzer() {
  const [file, setFile] = useState<File | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setAnalysisComplete(false)
      setResults(null)
    }
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      setAnalysisComplete(false)
      setResults(null)
    }
  }

  const handleAnalyze = () => {
    if (!file) return

    setAnalyzing(true)
    
    // Simulate analysis - in a real app, this would call your EEG data prediction API
    setTimeout(() => {
      setAnalyzing(false)
      setAnalysisComplete(true)
      setResults({
        attentionScore: 78,
        calmness: 65,
        concentration: 82,
        cognitiveLoad: 55,
        mentalFatigue: 30,
        anomalies: false,
        recommendation: "Good concentration levels detected. Consider increasing session duration to further improve focus metrics."
      })
    }, 2500)
  }

  return (
    <SidebarProvider>
      <AppSidebar params={"eeg-analyzer"} />
      <SidebarInset className="flex h-screen">
        <div className="flex-grow overflow-y-auto">
          <main className="min-h-screen bg-gradient-to-b from-[#f8f7fa] to-[#f1e8fd] py-4 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 text-black">
                  EEG <span className="text-[#9333ea]">Report Analyzer</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Upload EEG data files to analyze brain activity patterns and cognitive performance.
                </p>
                <div className="h-3 w-24 bg-[#9333ea] mx-auto mt-3 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Upload Section */}
                <Card className="md:col-span-1 shadow-md border-none bg-white">
                  <CardHeader className="bg-gradient-to-br from-[#9333ea]/10 to-[#7928ca]/10 rounded-t-xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#9333ea]/20 mb-3">
                      <Upload className="h-6 w-6 text-[#9333ea]" />
                    </div>
                    <CardTitle>Upload EEG Data</CardTitle>
                    <CardDescription>
                      Select your EEG data file to begin analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div 
                      className={`flex flex-col items-center justify-center border-2 border-dashed ${isDragging ? 'border-[#9333ea] bg-[#9333ea]/5' : 'border-gray-300'} rounded-lg p-6 cursor-pointer hover:border-[#9333ea]/50 transition-colors`}
                      onDragEnter={handleDragEnter}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <input 
                        type="file" 
                        id="eeg-file" 
                        className="hidden" 
                        accept=".csv,.txt,.eeg,.edf" 
                        onChange={handleFileChange}
                      />
                      <label htmlFor="eeg-file" className="cursor-pointer text-center w-full h-full">
                        <FileText className={`h-12 w-12 mx-auto mb-4 ${isDragging ? 'text-[#9333ea]' : 'text-gray-400'}`} />
                        <p className={`text-sm mb-2 ${isDragging ? 'text-[#9333ea]' : 'text-gray-500'}`}>
                          {file ? file.name : isDragging ? "Drop your file here" : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs text-gray-400">
                          Supports CSV, TXT, EEG, EDF
                        </p>
                      </label>
                    </div>
                    {file && (
                      <Button 
                        className="w-full mt-6 bg-[#9333ea] hover:bg-[#7928ca]" 
                        onClick={handleAnalyze}
                        disabled={analyzing}
                      >
                        {analyzing ? "Analyzing..." : "Analyze EEG Data"}
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Results Section */}
                <Card className="md:col-span-2 shadow-md border-none bg-white">
                  <CardHeader className="bg-gradient-to-br from-[#9333ea]/10 to-[#7928ca]/10 rounded-t-xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#9333ea]/20 mb-3">
                      <Brain className="h-6 w-6 text-[#9333ea]" />
                    </div>
                    <CardTitle>Analysis Results</CardTitle>
                    <CardDescription>
                      {analysisComplete ? "EEG data analysis complete" : "Upload and analyze your EEG data to see results"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {!file && !analysisComplete && (
                      <div className="flex flex-col items-center justify-center text-center p-10 h-64">
                        <Activity className="h-16 w-16 text-gray-300 mb-4" />
                        <p className="text-gray-500">Upload your EEG data file to start analysis</p>
                      </div>
                    )}

                    {analyzing && (
                      <div className="flex flex-col items-center justify-center text-center p-10 h-64">
                        <div className="animate-pulse">
                          <Brain className="h-16 w-16 text-[#9333ea] mb-4" />
                        </div>
                        <p className="text-[#9333ea]">Analyzing EEG data patterns...</p>
                      </div>
                    )}

                    {analysisComplete && results && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Metrics */}
                          {[
                            { label: "Attention Score", value: results.attentionScore, icon: BarChart4 },
                            { label: "Calmness", value: results.calmness, icon: Activity },
                            { label: "Concentration", value: results.concentration, icon: Brain },
                            { label: "Cognitive Load", value: results.cognitiveLoad, icon: Activity },
                          ].map((metric, index) => (
                            <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9333ea]/20">
                                <metric.icon className="h-6 w-6 text-[#9333ea]" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">{metric.label}</p>
                                <p className="text-xl font-bold text-gray-900">{metric.value}/100</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Anomaly Detection */}
                        <div className="flex items-center p-4 rounded-lg bg-gray-50">
                          {results.anomalies ? (
                            <>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                <AlertCircle className="h-6 w-6 text-red-500" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-red-500">Anomalies Detected</p>
                                <p className="text-sm text-gray-600">Consult with a specialist for further evaluation</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                <Check className="h-6 w-6 text-green-500" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-green-500">No Anomalies Detected</p>
                                <p className="text-sm text-gray-600">EEG patterns within normal ranges</p>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Recommendation */}
                        <div className="p-4 rounded-lg bg-[#9333ea]/10 border border-[#9333ea]/20">
                          <h3 className="font-medium text-[#9333ea] mb-2">Recommendation</h3>
                          <p className="text-gray-700">{results.recommendation}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t border-gray-100 p-4">
                    <div className="w-full text-center text-sm text-gray-500">
                      {analysisComplete 
                        ? "Analysis complete. You can save this report or upload another file for a new analysis." 
                        : "EEG data is processed securely and privately on our servers"}
                    </div>
                  </CardFooter>
                </Card>

                {/* Additional Information Section */}
                {analysisComplete && (
                  <Card className="md:col-span-3 shadow-md border-none bg-white mt-6">
                    <CardHeader>
                      <CardTitle>Detailed Analysis</CardTitle>
                      <CardDescription>
                        Extended insights based on the EEG data patterns
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <h3 className="font-medium text-gray-900">Key Observations</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Alpha wave patterns indicate good relaxation states</li>
                          <li>Beta activity levels suggest focused attention during cognitive tasks</li>
                          <li>Theta-delta ratio within normal range for age group</li>
                          <li>Frontal lobe activation patterns consistent with cognitive engagement</li>
                        </ul>
                        
                        <h3 className="font-medium text-gray-900 mt-6">Suggested Activities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                          {[
                            {
                              title: "Focus Games",
                              description: "Games that require sustained attention to improve concentration",
                            },
                            {
                              title: "Memory Exercises",
                              description: "Sequential recall activities to enhance working memory",
                            },
                            {
                              title: "Relaxation Techniques",
                              description: "Guided exercises to reduce cognitive load during learning",
                            },
                          ].map((activity, index) => (
                            <div key={index} className="p-4 rounded-lg bg-gray-50">
                              <h4 className="font-medium text-[#9333ea]">{activity.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button 
                        variant="outline" 
                        className="border-[#9333ea] text-[#9333ea] hover:bg-[#9333ea]/10"
                      >
                        Print Report
                      </Button>
                      <Button className="bg-[#9333ea] hover:bg-[#7928ca]">
                        Save to Profile
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
