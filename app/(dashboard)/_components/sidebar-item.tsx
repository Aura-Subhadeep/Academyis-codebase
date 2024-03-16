"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-white text-sm font-[500] pl-6 transition-all hover:text-gray-300 hover:bg-[#3d3d3d] rounded-custom px-4 mx-5 my-1.5",
        isActive && "text-white bg-[#3d3d3d] hover:bg-[#3d3d3d]"
      )}
    >
      <div className="flex items-center gap-x-3 py-4">
        <Icon
          size={22}
          className={cn(
            "text-gray-200 hover:text-gray-300",
            isActive && "text-white"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0  h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}