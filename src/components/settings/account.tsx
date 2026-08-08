import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { HardDrive } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Account() {
  //In GB
  const storageData = {
    usedInPhotos: 6.1,
    usedInVideos: 2.2,
    totalUsed: 7.3,
    allocated: 15,
  };
  return (
    <div className="mt-4 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="uppercase">Profile Picture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-10">
                  <Avatar className="w-24 h-24">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="grayscale"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="secondary">Change Avatar</Button>
                    <Button variant="destructive">Remove</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="uppercase">Name</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value="Ashutosh Panigrahi"
                    required
                  />
                  <Button variant="secondary" className="w-fit">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="uppercase">Email</CardTitle>
                <CardDescription>
                  To change your email, please contact support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value="ashutoshpanigrahi@example.com"
                    required
                    disabled
                  />
                  {/* <Button variant="secondary" className="w-fit" disabled>
                Save Changes
              </Button> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="uppercase flex items-center gap-3">
                  <HardDrive />
                  Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span>Allocated Space: {storageData.allocated} GB</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="h-4 w-4 bg-chart-1 rounded-sm" />
                        <span>Photos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-4 w-4 bg-chart-2 rounded-sm" />
                        <span>Videos</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-sm h-4 flex">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="bg-chart-1 h-4 rounded-l-sm"
                          style={{
                            width: `${(storageData.usedInPhotos / storageData.allocated) * 100}%`,
                          }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">
                            {storageData.usedInPhotos} GB
                          </span>
                          <span>Photos</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="bg-chart-2 h-4 rounded-r-sm"
                          style={{
                            width: `${(storageData.usedInVideos / storageData.allocated) * 100}%`,
                          }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">
                            {storageData.usedInVideos} GB
                          </span>
                          <span>Videos</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>Used: {storageData.totalUsed} GB</span>
                    <span>
                      Available: {storageData.allocated - storageData.totalUsed}{" "}
                      GB
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
