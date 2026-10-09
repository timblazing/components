import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit card", amount: 250 },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: 150 },
  { id: "INV-003", status: "Unpaid", method: "Bank transfer", amount: 350 },
  { id: "INV-004", status: "Paid", method: "Credit card", amount: 450 },
  { id: "INV-005", status: "Paid", method: "PayPal", amount: 550 },
]

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function TableDemo() {
  const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <Table className="w-full max-w-xl">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right tabular-nums">
              {currency.format(invoice.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right tabular-nums">
            {currency.format(total)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
