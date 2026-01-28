import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bolt, Clapperboard, DownloadCloud, Users, Image } from "lucide-react";
import { useParams } from "react-router";
import { getAlbumById } from "@/temp/albums";

export default function AlbumViewPage() {
  const [index, setIndex] = useState(-1);
  const { albumId } = useParams();

  //Fetch album data using albumId
  const albumData = getAlbumById(albumId!);

  const allMediaItems = useMemo(() => {
    return [...albumData.photos, ...albumData.videos].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, [albumData]);

  const slides = useMemo(() => {
    return allMediaItems.map((item) => {
      if (item.type === "image") {
        return {
          id: item.id,
          src: item.src,
          width: item.width,
          height: item.height,
          thumbnail: item.thumb,
          type: "image" as const,
        };
      }

      return {
        id: item.id,
        sources: [{ src: item.src, type: "video/mp4" }],
        width: item.width,
        height: item.height,
        poster: item.thumb,
        type: "video" as const,
      };
    });
  }, [allMediaItems]);

  const gridPhotos = useMemo(() => {
    return allMediaItems.map((item) => ({
      id: item.id,
      src: item.thumb,
      width: item.width,
      height: item.height,
    }));
  }, [allMediaItems]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between my-5 px-6 flex-wrap gap-4">
        <div className="text-4xl truncate font-bold font-heading leading-tight bg-linear-to-t from-foreground to-foreground/20 bg-clip-text text-transparent">
          Summer Vacation
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="text-sm text-muted-foreground flex items-center gap-3">
            <span className="flex items-center gap-1">
              {10} <Image className="w-4 h-4" />
            </span>
            <span className="flex items-center gap-1">
              {5} <Clapperboard className="w-4 h-4" />
            </span>
            <span className="flex items-center gap-1">
              {6} <Users className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="secondary">
              <DownloadCloud className="w-4 h-4 mr-2" />
              Download All
            </Button>
            <Button variant="secondary">
              <Bolt className="w-4 h-4 mr-2" />
              Album Settings
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <RowsPhotoAlbum
          photos={gridPhotos}
          spacing={5}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Video]}
        />
      </div>
    </div>
  );
}
