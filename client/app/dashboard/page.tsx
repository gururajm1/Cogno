'use client'

import React, { useState } from 'react'
import { Plus, Edit, Trash2, FileText, Calendar, Activity, Brain } from 'lucide-react'
import { Button } from "@/app/dashboard/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/dashboard/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/dashboard/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/dashboard/ui/dialog"
import { Input } from "@/app/dashboard/ui/input"
import { Label } from "@/app/dashboard/ui/label"
import { Textarea } from "@/app/dashboard/ui/textarea"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/app/dashboard/ui/chart"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// Dummy data for patients
const patients = [
  { id: 1, name: "John Doe", age: 10, guardianName: "Jane Doe", dob: "2014-05-15", phone: "123-456-7890", disorder: "ADHD" },
  { id: 2, name: "Alice Smith", age: 8, guardianName: "Bob Smith", dob: "2016-02-20", phone: "987-654-3210", disorder: "Autism" },
  { id: 3, name: "Emma Johnson", age: 12, guardianName: "Michael Johnson", dob: "2012-11-30", phone: "456-789-0123", disorder: "Dyslexia" },
]

// Dummy data for EEG graph
const eegData = [
  { name: 'Delta', value: 4 },
  { name: 'Theta', value: 6 },
  { name: 'Alpha', value: 8 },
  { name: 'Beta', value: 12 },
  { name: 'Gamma', value: 16 },
]

// Dummy data for games performance
const gamesData = [
  { name: 'Memory', score: 75 },
  { name: 'Attention', score: 60 },
  { name: 'Problem Solving', score: 80 },
  { name: 'Cognitive', score: 70 },
]

type Patient = {
  id: number;
  name: string;
  age: number;
  guardianName: string;
  dob: string;
  phone: string;
  disorder: string;
};


export default function page() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
  };  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
      
      {/* Patient List */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Patients</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Patient
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Patient</DialogTitle>
                  <DialogDescription>Enter the patient's details below.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age" className="text-right">Age</Label>
                    <Input id="age" type="number" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="guardian" className="text-right">Guardian Name</Label>
                    <Input id="guardian" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="dob" className="text-right">Date of Birth</Label>
                    <Input id="dob" type="date" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">Phone</Label>
                    <Input id="phone" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="disorder" className="text-right">Disorder</Label>
                    <Input id="disorder" className="col-span-3" />
                  </div>
                </div>
                <Button type="submit">Add Patient</Button>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Guardian</TableHead>
                <TableHead>Disorder</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id} onClick={() => handlePatientClick(patient)} className="cursor-pointer">
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.guardianName}</TableCell>
                  <TableCell>{patient.disorder}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Selected Patient Details */}
      {selectedPatient && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedPatient.name}'s Details</CardTitle>
            <CardDescription>Patient ID: {selectedPatient.id}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Patient Information</h3>
                <p><strong>Age:</strong> {selectedPatient.age}</p>
                <p><strong>Guardian:</strong> {selectedPatient.guardianName}</p>
                <p><strong>Date of Birth:</strong> {selectedPatient.dob}</p>
                <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                <p><strong>Disorder:</strong> {selectedPatient.disorder}</p>
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-2">Checkups</h4>
                  <p><strong>Last Checkup:</strong> 2023-05-15</p>
                  <p><strong>Next Checkup:</strong> 2023-08-15</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-2">Actions</h4>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" /> Edit Patient
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" /> Upload Prescription
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" /> Remove Patient
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">EEG Graph</h3>
                <ChartContainer
                  config={{
                    value: {
                      label: "EEG Value",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[200px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={eegData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="var(--color-value)" name="EEG Value" />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>

                <h3 className="text-lg font-semibold mt-6 mb-2">Games Performance</h3>
                <ChartContainer
                  config={{
                    score: {
                      label: "Score",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[200px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={gamesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line type="monotone" dataKey="score" stroke="var(--color-score)" name="Score" />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Average Time Used</h3>
                  <p className="text-3xl font-bold">45 minutes/day</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Scheduled Games</h3>
                  <ul className="list-disc list-inside">
                    <li>Memory Challenge - 10:00 AM</li>
                    <li>Attention Span - 2:00 PM</li>
                    <li>Cognitive Skills - 4:30 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}