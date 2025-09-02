import React from 'react'
import { motion } from 'framer-motion'

const DashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gradient">📊 Dashboard</h1>
        <p className="text-xl text-gray-300">Dashboard coming soon...</p>
      </div>
    </motion.div>
  )
}

export default DashboardPage