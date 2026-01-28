import AlbumCard from "@/components/album-card";
// import { Button } from "@/components/ui/button";
// import { Bolt } from "lucide-react";
import albumsData from "@/temp/albums";

export default function AlbumsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between my-5 px-6 flex-wrap gap-2">
        <span className="text-6xl lg:text-8xl font-bold font-heading leading-tight bg-linear-to-t from-foreground to-foreground/20 bg-clip-text text-transparent">
          Albums
        </span>
        {/* <div className="flex items-center gap-4">
          <Button variant="secondary">
            <Bolt className="w-4 h-4 mr-2" />
            Album Settings
          </Button>
        </div> */}
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {albumsData.map((album) => (
          <AlbumCard
            key={album.id}
            name={album.name}
            thumbUrl={album.thumbUrl}
            photos={album.photos}
            videos={album.videos}
            members={album.members}
          />
        ))}
      </div>
    </div>
  );
}
