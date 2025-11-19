import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">Sell</span>
              <span className="text-secondary">My</span>
              <span className="text-accent">App</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="pl-4 pr-10"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-md transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Button variant="ghost" size="sm">
              LOG IN
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
