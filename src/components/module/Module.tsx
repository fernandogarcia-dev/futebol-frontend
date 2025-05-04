import React from 'react'

interface ModuleProps {
  title: string
  children: React.ReactNode
}

const Module: React.FC<ModuleProps> = ({ title, children }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 dark:text-white tracking-tight">
        {title}
      </h1>
      <div className="mt-6 space-y-6">
        {children}
      </div>
    </div>
  )
}

export default Module

