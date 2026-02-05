import HeaderComp from "@/components/layout/header";
import SideBarComp from "@/components/layout/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col bg-gray-100 dark:bg-gray-900">
      {/* Top Navigation */}
      <HeaderComp />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBarComp />
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
