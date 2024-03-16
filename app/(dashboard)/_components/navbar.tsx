import { NavbarRoutes } from "@/components/navbar-routes"

import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-5 pyx-10 h-full flex items-center bg-white">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}