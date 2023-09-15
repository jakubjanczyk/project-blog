'use client'
import React from 'react'
import { MotionConfig } from 'framer-motion'

function WithMotionPreference({children}) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  )
}

export default WithMotionPreference
