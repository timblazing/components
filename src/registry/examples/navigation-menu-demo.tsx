import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components = [
  { title: "Dialog", href: "/components/dialog", description: "A modal window that interrupts the page." },
  { title: "Tooltip", href: "/components/tooltip", description: "A short hint shown on hover or focus." },
  { title: "Tabs", href: "/components/tabs", description: "Switch between related panels of content." },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1">
              <li>
                <NavigationMenuLink href="/introduction" className="flex-col items-start gap-0.5">
                  <span className="font-medium">Introduction</span>
                  <span className="text-muted-foreground">Reusable components built with Base UI.</span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/installation" className="flex-col items-start gap-0.5">
                  <span className="font-medium">Installation</span>
                  <span className="text-muted-foreground">Add components to your project.</span>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1">
              {components.map((c) => (
                <li key={c.title}>
                  <NavigationMenuLink href={c.href} className="flex-col items-start gap-0.5">
                    <span className="font-medium">{c.title}</span>
                    <span className="text-muted-foreground">{c.description}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" className="h-9 px-2.5 font-medium">
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
