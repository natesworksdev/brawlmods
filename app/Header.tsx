import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/submit" className="text-lg font-medium">Submit</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">Home</Link>
            <Link href="/submit" className="text-foreground/60 transition-colors hover:text-foreground/80">Submit</Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
