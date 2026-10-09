"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDropdowns() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(1995, 5, 15)
  )

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      startMonth={new Date(1930, 0)}
      endMonth={new Date()}
      className="rounded-lg border"
    />
  )
}
