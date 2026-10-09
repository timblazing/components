import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDisabled() {
  return (
    <Accordion className="w-full max-w-md">
      <AccordionItem value="plan">
        <AccordionTrigger>Current plan</AccordionTrigger>
        <AccordionContent>You are on the Pro plan, billed monthly.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="sso" disabled>
        <AccordionTrigger>Single sign-on</AccordionTrigger>
        <AccordionContent>Available on the Enterprise plan.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
