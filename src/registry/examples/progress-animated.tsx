"use client"

import { useEffect, useState } from "react"

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

export default function ProgressAnimated() {
  const [value, setValue] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setValue(78), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={value} className="w-full max-w-sm">
      <ProgressLabel>Uploading report.pdf</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
