'use client'

import React from 'react'

export default function GaurdianLoginButton() {
  return (
    <>
        <button
        onClick={() => (window.location.href = "/login")}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md text-white font-medium transition-colors"
    >
        Guardian Login
    </button>
  </>
  )
}