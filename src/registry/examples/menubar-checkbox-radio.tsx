"use client"

import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function MenubarCheckboxRadio() {
  const [bookmarks, setBookmarks] = React.useState(true)
  const [urls, setUrls] = React.useState(false)
  const [profile, setProfile] = React.useState("personal")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
            Always show bookmarks bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={urls} onCheckedChange={setUrls}>
            Always show full URLs
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={profile} onValueChange={setProfile}>
            <MenubarLabel>Switch profile</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioItem value="personal">Personal</MenubarRadioItem>
            <MenubarRadioItem value="work">Work</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
