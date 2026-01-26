"use client";

import * as React from "react";
import { LayoutDashboard, Folder, Image, Astroid, Bolt } from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

const data = {
  user: {
    name: "Ashutosh Panigrahi",
    email: "ashutoshpanigrahi@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Gallery",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Albums",
      url: "/dashboard/albums",
      icon: Folder,
    },
    {
      title: "Ask",
      url: "/dashboard/ask",
      icon: Astroid,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Bolt,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link to="/dashboard">
                <Image className="size-5! text-primary" />
                <span className="text-base font-semibold">Fotto.in</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
