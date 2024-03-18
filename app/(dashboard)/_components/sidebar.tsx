import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto black-gb">
      <div className="p-6 py-12 flex items-center justify-center">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}