import Link from "next/link";
import { MailIcon, MessageCircleIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          This content is not affiliated with or endorsed by Supercell. Use at your own risk.
        </p>
        <nav className="flex gap-6">
          <Link href="mailto:contact@natesworks.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
            <MailIcon className="mr-2 h-4 w-4" />
            Contact
          </Link>
          <Link href="https://discord.com/users/1272251195133526046" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
            <MessageCircleIcon className="mr-2 h-4 w-4" />
            Discord
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
