import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { LineChart,MoveRight, LayoutList, CalendarDays} from "lucide-react";

import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { InfoCard } from "./_components/info-card";
import { IconBadge } from "@/components/icon-badge";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
        <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <InfoCard
            icon={LineChart}
            label="Active Courses"
            numberOfItems={coursesInProgress.length}
          />
          <InfoCard
            icon={LayoutList}
            label="Finished Courses"
            numberOfItems={completedCourses.length}
            variant="success"
          />
          <div className="border drop-shadow-sm filter rounded-custom flex items-center gap-5 p-5">
            <IconBadge
              icon={CalendarDays}
            />
            <div>
              <p className="font-medium">
              Calendar
              </p>
              <p className="text-gray-500 text-sm">
              March 18, 2024
              </p>
            </div>
          </div>
          <div className="bg-black flex justify-between items-center hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-custom shadow-sm">
            <div>
              You have new messages!
            </div>
            <div>
              <MoveRight size={20} className="mx-2"/>
            </div>
          </div>
        </div>
        <CoursesList
            items={[...coursesInProgress, ...completedCourses]}
          />
    </div>
  )
}
