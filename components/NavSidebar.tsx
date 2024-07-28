'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Package2, ScrollText, Settings, Users2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NavSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/app/home", icon: Home, label: "Dashboard" },
    { href: "/app/conversation-history", icon: ScrollText, label: "Conversation History" },
    { href: "/app/council-management", icon: Users2, label: "Council Management" },
    { href: "/app/settings", icon: Settings, label: "Settings" },
  ];

  const isActive = (href: string) => {
    if (href === '/app' && pathname === '/app') {
      return true;
    }
    return pathname.startsWith(href) && href !== '/app';
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/app"
          className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="w-4 h-4 transition-all group-hover:scale-110" />
          <span className="sr-only">My AI Council</span>
        </Link>
        {navItems.slice(0, 3).map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 md:h-8 md:w-8 ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="sr-only">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
        {navItems.slice(3).map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 md:h-8 md:w-8 ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="sr-only">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
}