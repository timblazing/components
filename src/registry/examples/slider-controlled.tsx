"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export default function SliderControlled() {
  const [value, setValue] = React.useState<number>(60)

  return (
    <Field className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="slider-brightness">Brightness</FieldLabel>
        <span className="text-sm text-muted-foreground tabular-nums">{value}%</span>
      </div>
      <Slider
        id="slider-brightness"
        value={[value]}
        onValueChange={(v) => setValue(Array.isArray(v) ? v[0] : v)}
        max={100}
        step={1}
      />
    </Field>
  )
}
