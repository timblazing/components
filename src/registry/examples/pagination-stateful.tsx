"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const TOTAL = 5

export default function PaginationStateful() {
  const [page, setPage] = React.useState(1)

  function go(e: React.MouseEvent, next: number) {
    e.preventDefault()
    setPage(Math.min(TOTAL, Math.max(1, next)))
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={(e) => go(e, page - 1)} />
        </PaginationItem>
        {Array.from({ length: TOTAL }, (_, i) => i + 1).map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href="#" isActive={n === page} onClick={(e) => go(e, n)}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={(e) => go(e, page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
