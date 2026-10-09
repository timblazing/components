import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs defaultValue="general" orientation="vertical" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="text-sm text-muted-foreground">
        Manage your workspace name, URL, and default language.
      </TabsContent>
      <TabsContent value="notifications" className="text-sm text-muted-foreground">
        Choose which events send you an email or push notification.
      </TabsContent>
      <TabsContent value="billing" className="text-sm text-muted-foreground">
        View invoices and update your payment method.
      </TabsContent>
    </Tabs>
  )
}
