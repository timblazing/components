import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionMultiple() {
  return (
    <Accordion
      multiple
      defaultValue={["account", "billing"]}
      className="w-full max-w-md"
    >
      <AccordionItem value="account">
        <AccordionTrigger>Account</AccordionTrigger>
        <AccordionContent>
          Manage your name, email address, and password.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>Billing</AccordionTrigger>
        <AccordionContent>
          Update your payment method and download past invoices.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="notifications">
        <AccordionTrigger>Notifications</AccordionTrigger>
        <AccordionContent>
          Choose which emails and push alerts you receive.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
