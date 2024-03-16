"use client";

import { BarChartBig, Home, LineChart, Airplay, MessageCircle, Settings, PieChart} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Airplay,
    label: "Courses",
    href: "/search",
  },
  {
    icon: MessageCircle,
    label: "Chat",
    href: "/profile",
  },
  {
    icon: PieChart,
    label: "Grades",
    href: "/analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/courses",
  }
];

const teacherRoutes = [
  {
    icon: Airplay,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChartBig,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}