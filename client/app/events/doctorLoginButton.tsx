'use client'

import React from 'react'

export default function DoctorLoginButton() {
  return (
    <>
        <button
        onClick={() => (window.location.href = "/proLogin")}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md text-white font-medium transition-colors"
    >
        Professional Login
    </button>
  </>
  )
}