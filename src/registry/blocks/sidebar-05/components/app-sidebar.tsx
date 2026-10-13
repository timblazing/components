"use client"

import {
  ActivityIcon,
  ArchiveIcon,
  LayersIcon,
  BellRingIcon,
  BugIcon,
  ChartColumnIcon,
  ChevronRightIcon,
  CloudIcon,
  DatabaseIcon,
  FileTextIcon,
  FolderIcon,
  FoldersIcon,
  GitCommitHorizontalIcon,
  GitMergeIcon,
  GitPullRequestIcon,
  HouseIcon,
  KeyIcon,
  LockIcon,
  LockKeyholeIcon,
  LogOutIcon,
  SparkleIcon,
  PackageOpenIcon,
  BoxesIcon,
  FingerprintPatternIcon,
  PlayIcon,
  ScanEyeIcon,
  SettingsIcon,
  ShieldCheckIcon,
  StarIcon,
  TargetIcon,
  SquareTerminalIcon,
  UserIcon,
  UserPlusIcon,
  WebhookIcon,
  XIcon,
} from "lucide-react"
import type React from "react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { TeamSwitcher } from "./team-switcher"

function OpenAILogo(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35" />
      <path d="M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946" />
      <path d="M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348" />
      <path d="M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45" />
      <path d="M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946" />
      <path d="M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42" />
    </svg>
  )
}

function GoogleLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945" />
    </svg>
  )
}

function MetaLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174" />
      <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174" />
    </svg>
  )
}

function NpmLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 8h22v7h-12v2h-4v-2h-6l0 -7" />
      <path d="M7 8v7" />
      <path d="M14 8v7" />
      <path d="M17 11v4" />
      <path d="M4 11v4" />
      <path d="M11 11v1" />
      <path d="M20 11v4" />
    </svg>
  )
}

const data = {
  teams: [
    {
      name: "OpenAI",
      logo: OpenAILogo,
      plan: "Enterprise",
    },
    {
      name: "Anthropic",
      logo: SparkleIcon,
      plan: "Pro",
    },
    {
      name: "Google",
      logo: GoogleLogo,
      plan: "Free",
    },
    {
      name: "Meta",
      logo: MetaLogo,
      plan: "Free",
    },
  ],
}

interface SidebarItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  route?: string
  subItems?: {
    id: string
    label: string
    icon: React.ComponentType<{ className?: string }>
    description?: string
    route?: string
  }[]
}

const sidebarItems: SidebarItem[] = [
  {
    id: "overview",
    label: "Overview",
    icon: HouseIcon,
    subItems: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: ChartColumnIcon,
        description: "Project overview and activity",
        route: "/overview/dashboard",
      },
      {
        id: "activity",
        label: "Activity",
        icon: ActivityIcon,
        description: "Recent commits and changes",
        route: "/overview/activity",
      },
      {
        id: "insights",
        label: "Insights",
        icon: TargetIcon,
        description: "Code analytics and metrics",
        route: "/overview/insights",
      },
    ],
  },
  {
    id: "repositories",
    label: "Repositories",
    icon: FoldersIcon,
    badge: "12",
    subItems: [
      {
        id: "all-repos",
        label: "All Repositories",
        icon: FolderIcon,
        description: "Browse all your repositories",
        route: "/repositories",
      },
      {
        id: "starred",
        label: "Starred",
        icon: StarIcon,
        description: "Your starred repositories",
        route: "/repositories/starred",
      },
      {
        id: "archived",
        label: "Archived",
        icon: ArchiveIcon,
        description: "Archived repositories",
        route: "/repositories/archived",
      },
    ],
  },
  {
    id: "pull-requests",
    label: "Pull Requests",
    icon: GitPullRequestIcon,
    badge: "3",
    subItems: [
      {
        id: "open-prs",
        label: "Open",
        icon: GitPullRequestIcon,
        description: "Open pull requests",
        route: "/pull-requests/open",
      },
      {
        id: "review-requests",
        label: "Review Requests",
        icon: ScanEyeIcon,
        description: "PRs awaiting your review",
        route: "/pull-requests/review",
      },
      {
        id: "merged",
        label: "Merged",
        icon: GitMergeIcon,
        description: "Recently merged PRs",
        route: "/pull-requests/merged",
      },
    ],
  },
  {
    id: "issues",
    label: "Issues",
    icon: BugIcon,
    badge: "7",
    subItems: [
      {
        id: "open-issues",
        label: "Open Issues",
        icon: BugIcon,
        description: "Active issues and bugs",
        route: "/issues/open",
      },
      {
        id: "assigned",
        label: "Assigned to Me",
        icon: UserPlusIcon,
        description: "Issues assigned to you",
        route: "/issues/assigned",
      },
      {
        id: "created",
        label: "Created by Me",
        icon: GitCommitHorizontalIcon,
        description: "Issues you've created",
        route: "/issues/created",
      },
    ],
  },
  {
    id: "actions",
    label: "Actions",
    icon: LayersIcon,
    subItems: [
      {
        id: "workflows",
        label: "Workflows",
        icon: PlayIcon,
        description: "CI/CD workflows and pipelines",
        route: "/actions/workflows",
      },
      {
        id: "runners",
        label: "Runners",
        icon: SquareTerminalIcon,
        description: "Self-hosted runners",
        route: "/actions/runners",
      },
      {
        id: "deployments",
        label: "Deployments",
        icon: CloudIcon,
        description: "Deployment history",
        route: "/actions/deployments",
      },
    ],
  },
  {
    id: "packages",
    label: "Packages",
    icon: BoxesIcon,
    subItems: [
      {
        id: "published",
        label: "Published",
        icon: PackageOpenIcon,
        description: "Your published packages",
        route: "/packages/published",
      },
      {
        id: "container-registry",
        label: "Container Registry",
        icon: DatabaseIcon,
        description: "Docker images and containers",
        route: "/packages/containers",
      },
      {
        id: "npm-packages",
        label: "npm Packages",
        icon: NpmLogo,
        description: "Node.js packages",
        route: "/packages/npm",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: LockKeyholeIcon,
    badge: "2",
    subItems: [
      {
        id: "alerts",
        label: "Security Alerts",
        icon: LockIcon,
        description: "Vulnerability alerts",
        route: "/security/alerts",
      },
      {
        id: "advisories",
        label: "Advisories",
        icon: ShieldCheckIcon,
        description: "Security advisories",
        route: "/security/advisories",
      },
      {
        id: "secrets",
        label: "Secrets",
        icon: FingerprintPatternIcon,
        description: "Repository secrets",
        route: "/security/secrets",
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: SettingsIcon,
    subItems: [
      {
        id: "profile",
        label: "Profile",
        icon: UserIcon,
        description: "Your profile settings",
        route: "/settings/profile",
      },
      {
        id: "notifications",
        label: "Notifications",
        icon: BellRingIcon,
        description: "Notification preferences",
        route: "/settings/notifications",
      },
      {
        id: "webhooks",
        label: "Webhooks",
        icon: WebhookIcon,
        description: "Webhook configurations",
        route: "/settings/webhooks",
      },
      {
        id: "api-keys",
        label: "API Keys",
        icon: KeyIcon,
        description: "Personal access tokens",
        route: "/settings/api-keys",
      },
    ],
  },
  {
    id: "docs",
    label: "Documentation",
    icon: FileTextIcon,
    route: "/docs",
  },
]

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState<string | null>("overview")
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null)

  const activeItemData = sidebarItems.find((item) => item.id === activeItem)

  const handleItemClick = (item: SidebarItem) => {
    if (item.subItems) {
      const isActive = activeItem === item.id
      setActiveItem(isActive ? null : item.id)
      if (isActive) {
        setSelectedSubItem(null)
      }
    } else {
      if (activeItem) {
        setActiveItem(null)
        setSelectedSubItem(null)
      }
      console.log(`[v0] Navigating to: ${item.route}`)
    }
  }

  const handleSubItemClick = (subItem: { id: string; route?: string }) => {
    setSelectedSubItem(selectedSubItem === subItem.id ? null : subItem.id)
    if (subItem.route) {
      console.log(`[v0] Navigating to: ${subItem.route}`)
    }
  }

  return (
    <div className="flex h-dvh bg-background">
      <Sidebar
        className="w-64 border-r"
        collapsible="none"
        side="left"
        variant="sidebar"
      >
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeItem === item.id
                  const chevronIndicator = (
                    <ChevronRightIcon
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform",
                        isActive && "rotate-90"
                      )}
                    />
                  )

                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        className="h-10 w-full px-3"
                        isActive={isActive}
                        onClick={() => handleItemClick(item)}
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <Icon className="h-4 w-4 shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </div>
                        <div className="ml-auto flex min-w-fit shrink-0 items-center gap-1">
                          {(item.badge || item.subItems) &&
                            (item.badge ? (
                              <SidebarMenuBadge
                                className={cn(
                                  "min-w-fit",
                                  item.subItems && "gap-x-3"
                                )}
                              >
                                {item.badge}
                                {item.subItems && chevronIndicator}
                              </SidebarMenuBadge>
                            ) : (
                              chevronIndicator
                            ))}
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 w-full px-3">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage alt="ephraim" src="/avatar-01.png" />
                    <AvatarFallback className="rounded-full">E</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="truncate font-medium text-sm">ephraim</div>
                    <div className="truncate text-muted-foreground text-xs">
                      ephraim@blocks.so
                    </div>
                  </div>
                </div>
                <LogOutIcon className="h-4 w-4 shrink-0" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {activeItem && activeItemData?.subItems && (
        <Sidebar
          className="slide-in-from-left-5 w-72 animate-in border-r duration-200"
          collapsible="none"
          side="left"
          variant="sidebar"
        >
          <SidebarHeader className="flex flex-row items-center justify-between border-b px-4">
            <h3 className="font-medium">{activeItemData.label}</h3>
            <button
              className="flex h-6 w-6 items-center justify-center rounded-md p-0 hover:bg-sidebar-accent"
              onClick={() => setActiveItem(null)}
            >
              <XIcon className="h-4 w-4" />
            </button>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {activeItemData.subItems.map((subItem) => {
                    const SubIcon = subItem.icon
                    const isSelected = selectedSubItem === subItem.id

                    return (
                      <SidebarMenuItem key={subItem.id}>
                        <SidebarMenuButton
                          className="h-auto w-full justify-start gap-3 px-3 py-2"
                          isActive={isSelected}
                          onClick={() => handleSubItemClick(subItem)}
                        >
                          <SubIcon className="mt-0.5 h-5 w-5 shrink-0 self-start" />

                          <div className="min-w-0 flex-1 text-left">
                            <div className="font-medium">{subItem.label}</div>
                            {subItem.description && (
                              <div className="mt-0.5 text-muted-foreground text-xs">
                                {subItem.description}
                              </div>
                            )}
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )}
    </div>
  )
}
