import { Image, Heart } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import FeaturesBento from "@/components/features-bento";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full border-b border-border/30 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Image className="h-6 w-6 text-primary" />
            <span>Fotto.in</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth?mode=login">
              <Button variant="ghost" className="max-sm:hidden">
                Log In
              </Button>
            </Link>
            <Link to="/auth?mode=signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-16">
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-linear-to-br from-foreground to-foreground/50 bg-clip-text text-transparent font-heading">
            Your memories, organized <br className="hidden md:block" /> and
            searchable with AI
          </h1>
          <p className="text-xl text-muted-foreground/50 mb-10 max-w-2xl mx-auto">
            Upload photos and videos, share albums with friends, and find any
            memory instantly with natural language search.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth?mode=signup">
              <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                Get Started Free
              </Button>
            </Link>
            <Button
              onClick={() =>
                document.getElementById("features")?.scrollIntoView()
              }
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg h-12 px-8"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-20 relative mx-auto max-w-5xl">
            {/* Decorative blur behind mockup */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative rounded-2xl border border-border backdrop-blur-xl overflow-hidden shadow-2xl p-2">
              <div className="bg-black/90 flex items-center justify-center rounded-xl overflow-hidden">
                <video
                  src="./src/assets/hero_vid.mp4"
                  autoPlay
                  muted
                  loop
                  className="object-cover border border-border"
                />
              </div>
            </div>
          </div>
        </section>
        <FeaturesBento />
      </main>
      <footer className="border-t border-border py-4 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground/60 text-sm flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Image className="h-5 w-5" /> Fotto.in
          </div>
          <span className="">
            Build with{" "}
            <Heart className="h-4 w-4 inline text-pink-700 fill-pink-700 mb-0.5" />{" "}
            by Ashutosh
          </span>
        </div>
      </footer>
    </div>
  );
}
