import { Outlet, Link } from "react-router";
import { Image, Share2, Sparkles, ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Search",
    description: "Find any memory with plain English queries.",
  },
  {
    icon: Share2,
    title: "Shared Albums",
    description: "Collaborate on moments with friends and family.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description: "Your memories stay yours — always encrypted.",
  },
];

export default function AuthLayout() {
  return (
    <div className="min-h-dvh bg-background flex justify-center">
      <div className="w-full max-w-6xl grid lg:grid-cols-2">
        {/* right side */}
        <div className="col-span-1 hidden lg:flex flex-col px-14 py-14 gap-8 sticky top-0 h-screen">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 text-xl font-bold">
            <Image className="h-5 w-5 text-primary" />
            <span>Fotto.in</span>
          </Link>

          <div className="flex flex-col justify-center max-w-md">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Your memory vault
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight mb-5 font-heading bg-linear-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
              Every photo tells a story worth keeping.
            </h2>
            <p className="text-muted-foreground/80 text-base leading-relaxed mb-10">
              Fotto organizes your entire photo library and makes every memory
              searchable — just describe what you're looking for.
            </p>

            <div className="space-y-5">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/90">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-0.5">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground/80 max-w-xs leading-relaxed">
            "Memories fade — but Fotto keeps them sharp, searchable, and
            shared."
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 lg:px-14 py-12 px-6">
          {/* Heading */}
          <div className="w-full max-w-sm">
            {/* Back button */}
            <Link to="/" className="w-full -ml-3" replace>
              <Button variant="link">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Button>
            </Link>
            <h1 className="text-2xl font-extrabold tracking-tight font-heading bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
              Welcome to Fotto
            </h1>
            <p className="text-sm text-muted-foreground/60 mt-1.5">
              Your memories, organized and searchable with AI.
            </p>
          </div>

          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative rounded-2xl border border-border/50 overflow-hidden shadow-2xl p-2">
              <Outlet />
            </div>
          </div>

          {/* Legal */}
          <p className="text-center text-xs text-muted-foreground/40 mt-6">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
            >
              Terms
            </a>{" "}
            &amp;{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
