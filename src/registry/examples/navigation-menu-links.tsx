import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {["Overview", "Pricing", "Changelog", "Support"].map((label, i) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink
              href="#"
              active={i === 0}
              className="h-9 px-2.5 font-medium"
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
