"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  const isDashboardPage = pathname === "/"; // Check if current page is the dashboard ("/") page


  return (
    <>
    {isSearchPage && ( // Show heading only on the dashboard page
        <h1 className="hidden md:block font-bold text-2lx px-2 pr-8">Courses</h1>
      )}
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      {isDashboardPage && ( // Show heading only on the dashboard page
        <h1 className="hidden md:block font-bold text-2lx px-2">Dashboard</h1>
      )}
      {isTeacherPage && ( // Show heading only on the dashboard page
        <h1 className="hidden md:block font-bold text-2lx px-2">My Courses</h1>
      )}
      <div className="flex gap-x-4 mr-2.5 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button className="border bg-black hover:bg-gray-800 text-white hover:text-gray-200" size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button className="border bg-black hover:bg-gray-800 text-white hover:text-gray-200" size="sm" variant="ghost">
              Advance
            </Button>
          </Link>
        ) : null}
        <UserButton
          afterSignOutUrl="/"
        />
      </div>
    </>
  )
}