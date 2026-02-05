"use client";

import {
  BriefcaseIcon,
  HomeModernIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import Link from "next/link";

const routeList = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <HomeModernIcon className="h-6 w-6" />,
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },
  { name: "Users", href: "/users", icon: <UsersIcon className="h-6 w-6" /> },
];

export default function SideBarComp() {
  return (
    <aside className="w-64 dark:bg-gray-800">
      <nav className="space-y-1 px-4 py-6">
        {routeList.map((route) => (
          <NavItem
            key={route.name}
            href={route.href}
            icon={route.icon}
            label={route.name}
          />
        ))}
      </nav>
    </aside>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
        isActive
          ? "bg-white  text-teal-400"
          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div className={`  rounded-xl` + (isActive ? "" : "text-gray-400")}>
        {icon}
      </div>
      <span>{label}</span>
    </Link>
  );
}
