import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "./ui/button";
import { Link } from "react-router";
function Slot({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-1 w-full h-full min-h-24 flex-col space-y-2">
      <div className="w-full h-full rounded-xl border-2 border-dashed border-foreground/20 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default function FeaturesBento() {
  return (
    <section
      id="features"
      className="container mx-auto px-6 mt-20 scroll-mt-20"
    >
      <div className="max-w-2xl mb-12 mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-primary font-extrabold mb-2 text-center">
          Features
        </p>
        <h2 className=" font-extrabold text-4xl mb-2 py-2 tracking-tight leading-none font-heading bg-linear-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
          A calmer way to manage memories.
        </h2>
        <p className="text-md text-muted-foreground/50 mb-10 max-w-2xl mx-auto">
          Fotto helps you organize photos and videos without folders, clutter,
          or manual work.
        </p>
      </div>

      <BentoGrid className="md:grid-cols-6">
        <BentoGridItem
          className="md:col-span-4"
          title="Search using natural language"
          description="Find photos and videos by describing moments the way you remember them."
          header={<Slot />}
        />

        <BentoGridItem
          className="md:col-span-2"
          title="Shared albums"
          description="Invite friends and family with viewer or editor permissions."
          header={<Slot />}
        />

        {/* <BentoGridItem
          className="md:col-span-2"
          title="Private by default"
          description="Every account includes a personal gallery visible only to you."
          header={<Slot />}
        /> */}

        <BentoGridItem
          className="md:col-span-2"
          title="Original quality uploads"
          description="Store photos and videos in their original resolution and quality."
          header={<Slot />}
        />

        <BentoGridItem
          className="md:col-span-4"
          title="Automatic video processing"
          description="Videos are optimized automatically for smooth playback everywhere."
          header={<Slot />}
        />

        <BentoGridItem
          className="md:col-span-4"
          title="Access anywhere"
          description="Your memories stay synced across devices automatically."
          header={<Slot />}
        />
        <div className="md:col-span-2 row-span-1 rounded-xl bg-primary p-8 flex flex-col justify-between">
          <p className="text-xl font-bold font-heading text-primary-foreground mb-1">
            Your memories deserve a better home.
          </p>
          <p className="text-sm text-primary-foreground/60 mb-6">
            Free to start. <br />
            No credit card required.
          </p>
          <Link to="/auth?mode=signup">
            <Button variant="secondary" className="w-full">
              Get started
            </Button>
          </Link>
        </div>
      </BentoGrid>
    </section>
  );
}
