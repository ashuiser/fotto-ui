import { Card, CardContent } from "./ui/card";
import { Image, Clapperboard, Users } from "lucide-react";

export default function AlbumCard({
  name,
  thumbUrl,
  photos,
  videos,
  members,
}: {
  name: string;
  thumbUrl: string;
  photos: number;
  videos: number;
  members: number;
}) {
  return (
    <Card className="p-0 gap-0 max-h-60 group cursor-pointer transition-all duration-300 hover:scale-105 border hover:border-primary">
      <CardContent className="p-0 overflow-hidden relative w-full h-full">
        <img
          src={thumbUrl}
          alt="image"
          className="w-full h-full object-cover"
        />
        <div className="absolute h-3/4 w-full left-0 bottom-0 z-5 bg-linear-to-t from-black to-transparent" />
        <div className="absolute h-3/4 w-full left-0 bottom-0 z-5 bg-linear-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
        <div className="absolute left-0 bottom-0 z-10 flex flex-col items-start gap-2 px-4 py-3 w-full">
          <p className="font-semibold font-heading group-hover:text-primary transition-colors duration-300 truncate w-full">
            {name}
          </p>
          <div className="text-sm text-muted-foreground flex items-center gap-3">
            <span className="flex items-center gap-1">
              {photos} <Image className="w-4 h-4" />
            </span>
            <span className="flex items-center gap-1">
              {videos} <Clapperboard className="w-4 h-4" />
            </span>
            <span className="flex items-center gap-1">
              {members} <Users className="w-4 h-4" />
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
