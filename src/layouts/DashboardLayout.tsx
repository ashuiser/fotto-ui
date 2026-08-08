import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation } from "react-router";

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const isAskPage = pathname.startsWith("/dashboard/ask");
  return (
    <SidebarProvider
      className="h-svh overflow-hidden"
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="overflow-hidden">
        {isAskPage ? (
          <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">
            <SiteHeader />
            <div className="container mx-auto flex h-full min-h-0 flex-col">
              <Outlet />
            </div>
          </div>
        ) : (
          <ScrollArea className="h-full w-full">
            <SiteHeader />
            <div className="container mx-auto">
              <Outlet />
            </div>
          </ScrollArea>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
