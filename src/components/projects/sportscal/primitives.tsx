"use client"

import { useState } from "react"
import { CalendarDays, Download, Info } from "lucide-react"
import { Group, Specimen } from "../fillrate/specimen"
import { Button } from "./source/components/ui/button"
import { Badge } from "./source/components/ui/badge"
import { Input } from "./source/components/ui/input"
import { Textarea } from "./source/components/ui/textarea"
import { Checkbox } from "./source/components/ui/checkbox"
import { Switch } from "./source/components/ui/switch"
import { Label } from "./source/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./source/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./source/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "./source/components/ui/alert"
import { Skeleton } from "./source/components/ui/skeleton"
import { TooltipProvider } from "./source/components/ui/tooltip"

export function SportscalPrimitives() {
  const [name, setName] = useState("Steelers schedule")
  const [enabled, setEnabled] = useState(true)
  return <TooltipProvider><Group id="primitives" index={2} title="Primitives" description="The actual shadcn and Radix UI components used by Sportscal, alongside native form controls.">
    <Specimen id="actions" title="Actions">
      <div className="flex flex-wrap items-center gap-3"><Button><Download />Download .ics</Button><Button variant="outline"><CalendarDays />Subscribe</Button><Button variant="secondary">Save changes</Button><Button variant="ghost">Reset</Button><Button variant="destructive">Delete calendar</Button><Button disabled>Loading schedule…</Button></div>
    </Specimen>
    <Specimen id="forms" title="Form controls">
      <div className="grid gap-6 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="calendar-name">Calendar name</Label><Input id="calendar-name" value={name} onChange={(e) => setName(e.target.value)} /><p className="text-xs text-muted-foreground">Shown in your calendar app.</p></div><div className="space-y-2"><Label htmlFor="season">Season</Label><Select defaultValue="auto"><SelectTrigger id="season"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="auto">Current season</SelectItem><SelectItem value="2026">2026</SelectItem><SelectItem value="2025">2025</SelectItem></SelectContent></Select></div><div className="space-y-2"><Label htmlFor="description">Event description</Label><Textarea id="description" placeholder="Add a note to every game…" /></div><div className="space-y-4"><div className="flex items-center gap-2"><Checkbox id="broadcasts" defaultChecked /><Label htmlFor="broadcasts">Show broadcasts</Label></div><div className="flex items-center gap-2"><Switch id="busy" checked={enabled} onCheckedChange={setEnabled} /><Label htmlFor="busy">Mark events as busy</Label></div></div></div>
    </Specimen>
    <Specimen id="overlays" title="Overlays">
      <Dialog><DialogTrigger asChild><Button variant="outline">Subscription help</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Subscribe to your calendar</DialogTitle><DialogDescription>Add the calendar URL to your preferred calendar app to receive schedule updates.</DialogDescription></DialogHeader><p className="text-sm text-muted-foreground">Google Calendar, Apple Calendar, and Outlook can all subscribe to a calendar URL.</p></DialogContent></Dialog>
    </Specimen>
    <Specimen id="feedback" title="Feedback & data display"><div className="space-y-4"><div className="flex flex-wrap gap-2"><Badge>Regular season</Badge><Badge variant="secondary">Preseason</Badge><Badge variant="outline">Override</Badge><Badge variant="destructive">Canceled</Badge></div><Alert><Info /><AlertTitle>Time to be announced</AlertTitle><AlertDescription>The event appears as an all-day entry until a start time is scheduled.</AlertDescription></Alert><div className="flex items-center gap-3"><Skeleton className="size-10 rounded-lg" /><div className="space-y-2"><Skeleton className="h-4 w-40" /><Skeleton className="h-3 w-28" /></div></div></div></Specimen>
  </Group></TooltipProvider>
}
