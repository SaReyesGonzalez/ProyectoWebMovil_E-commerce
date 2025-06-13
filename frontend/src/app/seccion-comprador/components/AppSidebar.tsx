import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Store, PackageOpen } from 'lucide-react';

const items = [
  {
    title: "Tiendas",
    url: "Tiendas",
    icon: Store,
  },
  {
    title: "Categorías",
    url: "Categorias",
    icon: PackageOpen,
  },

]
export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent className="fixed top-12 left-4">
          <SidebarGroup />
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu 
            >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup />
        </SidebarContent>
    </Sidebar>
    )
    
}