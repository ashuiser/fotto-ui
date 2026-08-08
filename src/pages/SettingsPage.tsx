import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router";
import { CircleUser, ShieldUser, Settings2 } from "lucide-react";
import Account from "@/components/settings/account";

export default function SettingsPage() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("mode") || "account";
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between my-5 px-6 flex-wrap gap-2">
        <span className="text-6xl lg:text-8xl font-bold font-heading leading-tight bg-linear-to-t from-foreground to-foreground/20 bg-clip-text text-transparent">
          Settings
        </span>
      </div>
      <div className="p-4">
        <Tabs defaultValue={tab} className="w-full">
          <TabsList
            variant="line"
            className="w-full justify-start border-b overflow-x-auto no-scrollbar gap-4"
          >
            <TabsTrigger
              value="account"
              className="md:text-md flex-none data-active:text-primary dark:data-active:text-primary hover:text-primary dark:hover:text-primary data-[state=active]:after:bg-primary"
            >
              <CircleUser className="mr-2 h-4 w-4" />
              Account
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="md:text-md flex-none data-active:text-primary dark:data-active:text-primary hover:text-primary dark:hover:text-primary data-[state=active]:after:bg-primary"
            >
              <ShieldUser className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="md:text-md flex-none data-active:text-primary dark:data-active:text-primary hover:text-primary dark:hover:text-primary data-[state=active]:after:bg-primary"
            >
              <Settings2 className="mr-2 h-4 w-4" />
              Preferences
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Account />
          </TabsContent>
          <TabsContent value="security">security</TabsContent>
          <TabsContent value="preferences">preferences</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
