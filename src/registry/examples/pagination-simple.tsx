import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationSimple() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text="Older posts" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text="Newer posts" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
