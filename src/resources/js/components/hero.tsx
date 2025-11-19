import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Decorative Laurels */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 opacity-20">
        <svg
          width="80"
          height="120"
          viewBox="0 0 80 120"
          fill="currentColor"
          className="rotate-12"
        >
          <path d="M40 10 Q20 30 10 60 Q30 50 40 60 Q35 40 40 10M40 60 Q50 50 70 60 Q60 30 40 10" />
        </svg>
      </div>
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 opacity-20">
        <svg
          width="80"
          height="120"
          viewBox="0 0 80 120"
          fill="currentColor"
          className="-rotate-12"
        >
          <path d="M40 10 Q20 30 10 60 Q30 50 40 60 Q35 40 40 10M40 60 Q50 50 70 60 Q60 30 40 10" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            APP SOURCE CODES
            <br />
            PROJECTS &
            <br />
            SERVICES
          </h2>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Start searching..."
                className="h-14 pl-4 pr-12 text-foreground bg-background border-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-6 w-6 text-muted-foreground" />
              </button>
            </div>
          </div>

          <p className="text-sm opacity-90">
            Free consultation - Let's transform your app idea into reality in just 5 minutes!
          </p>
          <p className="text-xs opacity-75">
            SellMyApp LLC, San Francisco, California, USA
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            🚀 Click Here to Launch 🚀
          </Button>
        </div>
      </div>
    </section>
  );
};
