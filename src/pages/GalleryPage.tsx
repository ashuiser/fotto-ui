import { RowsPhotoAlbum } from "react-photo-album";
import galleryData from "@/temp/gallery";
import Lightbox from "yet-another-react-lightbox";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between my-5 px-6 flex-wrap gap-2">
        <span className="text-6xl lg:text-8xl font-bold font-heading leading-tight bg-linear-to-t from-foreground to-foreground/20 bg-clip-text text-transparent">
          Gallery
        </span>
        <div className="flex items-center gap-4">
          <Button variant="secondary">
            <DownloadCloud className="w-4 h-4 mr-2" />
            Download All
          </Button>
        </div>
      </div>
      <div className="p-4">
        <RowsPhotoAlbum
          photos={galleryData.map((image) => {
            return {
              id: image.id,
              src: image.thumb,
              width: image.width,
              height: image.height,
            };
          })}
          spacing={5}
          targetRowHeight={250}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={galleryData.map((image) => {
            return {
              id: image.id,
              src: image.src,
              width: image.width,
              height: image.height,
              thumbnail: image.thumb,
            };
          })}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
}
