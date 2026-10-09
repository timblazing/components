import { BellIcon, SettingsIcon, UserIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsIcons() {
  return (
    <Tabs defaultValue="profile" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="profile">
          <UserIcon />
          Profile
        </TabsTrigger>
        <TabsTrigger value="alerts">
          <BellIcon />
          Alerts
        </TabsTrigger>
        <TabsTrigger value="settings">
          <SettingsIcon />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="text-sm text-muted-foreground">
        Your name, avatar, and bio.
      </TabsContent>
      <TabsContent value="alerts" className="text-sm text-muted-foreground">
        Manage how and when you are notified.
      </TabsContent>
      <TabsContent value="settings" className="text-sm text-muted-foreground">
        Theme, language, and privacy preferences.
      </TabsContent>
    </Tabs>
  )
}
