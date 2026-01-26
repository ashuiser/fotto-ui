import { useCallback, useRef } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { RowsPhotoAlbum } from "react-photo-album";
import galleryData from "@/temp/gallery";
import type { InitDetail } from "lightgallery/lg-events";

export default function GalleryPage() {
  const lightGallery = useRef<InitDetail["instance"] | null>(null);
  const onInit = useCallback((detail: InitDetail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);
  return (
    <div className="p-2">
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail]}
        mode="lg-fade"
        thumbnail={true}
        autoplayFirstVideo={false}
        elementClassNames={"gallery"}
        loop={false}
        counter={false}
        currentPagerPosition="middle"
        speed={50}
        // toggleThumb={true}
        // allowMediaOverlap={true}
        mobileSettings={{
          controls: false,
          showCloseIcon: true,
        }}
        dynamic={true}
        dynamicEl={galleryData.map((image) => {
          return {
            id: image.id,
            src: image.src,
            thumb: image.thumb,
            subHtml: image.subHtml,
          };
        })}
        onInit={onInit}
      >
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
          onClick={({ index }) => {
            lightGallery.current?.openGallery(index);
          }}
        />
      </LightGallery>
    </div>
  );
}
