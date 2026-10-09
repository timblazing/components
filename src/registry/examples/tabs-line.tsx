import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsLine() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-sm text-muted-foreground">
        A summary of activity across all your projects this week.
      </TabsContent>
      <TabsContent value="analytics" className="text-sm text-muted-foreground">
        Traffic, conversions, and retention over time.
      </TabsContent>
      <TabsContent value="reports" className="text-sm text-muted-foreground">
        Scheduled and exported reports for your team.
      </TabsContent>
    </Tabs>
  )
}
