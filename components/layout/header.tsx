"use client";

import { routeMeta } from "@/mylibs/biztrackroutes";
import {
  MapIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  BellIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function HeaderComp() {
  const currentPath = usePathname();
  const meta = routeMeta[currentPath] || { breadcrumb: "Page", title: "Page" };
  return (
    <header className="my-3">
      <div className="flex  h-16  items-center  px-6">
        <div className="flex w-64 items-center gap-3">
          <div className="flex gap-2 items-center">
            <MapIcon className="h-8 font-semibold" />
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              BizTrack
            </h1>
          </div>
        </div>
        <div className="flex  items-center justify-between w-full pl-10">
          <div className="font-semibold flex flex-col gap-0.5 text-gray-500  ">
            <div className="text-sm text-gray-400">
              <span className="text-teal-400">Page</span> / {meta.breadcrumb}
            </div>
            <div className="text-lg">{meta.title}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search User"
                className=" pl-10 text-sm font-semibold w-60 border border-gray-300 rounded-xl h-10 mr-10 bg-white text-gray-600 focus:outline-none "
              />
              <MagnifyingGlassIcon className="absolute h-4 left-3 top-3" />
            </div>
            <div className="flex items-end gap-0.5 text-gray-600 font-semibold">
              <UserIcon className="cursor-pointer h-6 w-6 text-gray-600 hover:text-gray-900" />
              <div className="text-sm"> User</div>
            </div>
            <Cog6ToothIcon className="cursor-pointer h-6 w-6 text-gray-600 hover:text-gray-900" />
            <BellIcon className="cursor-pointer h-6 w-6 text-gray-600 hover:text-gray-900" />
          </div>
        </div>
      </div>
    </header>
  );
}
