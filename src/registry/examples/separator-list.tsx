import * as React from "react"

import { Separator } from "@/components/ui/separator"

const tags = ["v2.4.0", "v2.3.1", "v2.3.0", "v2.2.4"]

export default function SeparatorList() {
  return (
    <div className="w-56 rounded-lg border p-4">
      <h4 className="mb-3 text-sm font-medium">Releases</h4>
      {tags.map((tag, index) => (
        <React.Fragment key={tag}>
          {index > 0 && <Separator className="my-2" />}
          <div className="text-sm">{tag}</div>
        </React.Fragment>
      ))}
    </div>
  )
}
