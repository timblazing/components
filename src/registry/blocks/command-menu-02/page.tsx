"use client"

import {
  ArrowRightIcon,
  AtSignIcon,
  CopyIcon,
  DownloadIcon,
  FileIcon,
  FileSearchIcon,
  KeyboardIcon,
  LayoutTemplateIcon,
  LinkIcon,
  LogOutIcon,
  MessageSquareIcon,
  MonitorIcon,
  PencilIcon,
  PlusIcon,
  SendIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export default function CommandMenu02() {
  const [open, setOpen] = useState(true)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Command Menu
      </Button>

      <Dialog onOpenChange={setOpen} open={open}>
        <DialogHeader className="sr-only">
          <DialogTitle>Command Menu</DialogTitle>
          <DialogDescription>
            Use the command menu to navigate through the app.
          </DialogDescription>
        </DialogHeader>
        <DialogContent
          className="gap-0 overflow-hidden rounded-xl border-border/50 p-0 shadow-lg sm:max-w-lg"
          showCloseButton={false}
        >
          <Command className="p-0 **:data-[slot=input-group]:h-10! **:data-[slot=command-input-wrapper]:grow **:data-[slot=input-group]:rounded-none! **:data-[slot=input-group]:border-0 **:data-[slot=input-group]:bg-transparent **:data-[slot=command-input-wrapper]:p-0 **:data-[slot=input-group-addon]:pl-0!">
            <div className="flex h-12 items-center gap-2 border-border/50 border-b px-4">
              <CommandInput
                className="text-[15px]"
                onValueChange={setInputValue}
                placeholder="What do you need?"
                value={inputValue}
              />
              <button
                className="flex shrink-0 items-center"
                onClick={() => setOpen(false)}
                type="button"
              >
                <Kbd>Esc</Kbd>
              </button>
            </div>

            <CommandList className="max-h-[400px] py-2">
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <SettingsIcon aria-hidden />
                  Account Settings...
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>,</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <UserIcon aria-hidden />
                  Switch Workspace...
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <LogOutIcon aria-hidden />
                  Log Out
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>Q</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Documents">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <FileIcon aria-hidden />
                  Search Documents...
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>F</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <PlusIcon aria-hidden />
                  Create New Document...
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>N</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <FileIcon aria-hidden />
                  Upload Document...
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>U</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Signing">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <SendIcon aria-hidden />
                  Request Signature...
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <PencilIcon aria-hidden />
                  Sign a Document...
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <UsersIcon aria-hidden />
                  Bulk Send for Signature...
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Templates">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <LayoutTemplateIcon aria-hidden />
                  Search Templates...
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <PlusIcon aria-hidden />
                  Create New Template...
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="General">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <MonitorIcon aria-hidden />
                  Change Theme...
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>T</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <CopyIcon aria-hidden />
                  Copy Current URL
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>⇧</Kbd>
                      <Kbd>C</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Navigation">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;<strong className="font-semibold">Inbox</strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;
                    <strong className="font-semibold">Action Required</strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;
                    <strong className="font-semibold">
                      Waiting for Others
                    </strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;
                    <strong className="font-semibold">Completed</strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;<strong className="font-semibold">Drafts</strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;
                    <strong className="font-semibold">Templates</strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;
                    <strong className="font-semibold">Archive</strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;<strong className="font-semibold">Trash</strong>
                  </span>
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <ArrowRightIcon aria-hidden />
                  <span>
                    Go to&nbsp;
                    <strong className="font-semibold">Settings</strong>
                  </span>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Quick Actions">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <LinkIcon aria-hidden />
                  Copy Signing Link
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <DownloadIcon aria-hidden />
                  Download Document
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Help">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <FileSearchIcon aria-hidden />
                  Search Help Center...
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <MessageSquareIcon aria-hidden />
                  Send Feedback...
                </CommandItem>
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <AtSignIcon aria-hidden />
                  Contact Support
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Keyboard Shortcuts">
                <CommandItem
                  className="mx-2 rounded-lg py-2.5"
                  onSelect={() => setOpen(false)}
                >
                  <KeyboardIcon aria-hidden />
                  View Keyboard Shortcuts
                  <CommandShortcut>
                    <KbdGroup>
                      <Kbd>⌘</Kbd>
                      <Kbd>/</Kbd>
                    </KbdGroup>
                  </CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
