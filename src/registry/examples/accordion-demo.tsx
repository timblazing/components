import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["shipping"]} className="w-full max-w-md">
      <AccordionItem value="shipping">
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Standard orders arrive in 3 to 5 business days. Express shipping is
          available at checkout for next-day delivery.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          You can return any unused item within 30 days for a full refund.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How do I contact support?</AccordionTrigger>
        <AccordionContent>
          Email support@example.com or use the chat widget. We reply within one
          business day.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
