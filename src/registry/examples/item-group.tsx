import { Fragment } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const people = [
  { name: "Ava Thompson", email: "ava@acme.co", initials: "AT" },
  { name: "Marcus Reid", email: "marcus@acme.co", initials: "MR" },
  { name: "Priya Nair", email: "priya@acme.co", initials: "PN" },
]

export default function ItemGroupExample() {
  return (
    <ItemGroup className="w-full max-w-md gap-0">
      {people.map((person, index) => (
        <Fragment key={person.email}>
          <Item>
            <ItemMedia>
              <Avatar>
                {index === 0 && <AvatarImage src="https://github.com/shadcn.png" alt={person.name} />}
                <AvatarFallback>{person.initials}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent className="gap-0">
              <ItemTitle>{person.name}</ItemTitle>
              <ItemDescription>{person.email}</ItemDescription>
            </ItemContent>
          </Item>
          {index < people.length - 1 && <ItemSeparator className="my-0" />}
        </Fragment>
      ))}
    </ItemGroup>
  )
}
