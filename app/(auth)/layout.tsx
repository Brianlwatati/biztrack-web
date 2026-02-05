import Image from "next/image";
import AuthBanner from "../../public/authlayout.webp";
import { MapIcon } from "@heroicons/react/24/solid";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen  overflow-hidden bg-gray-100 dark:bg-gray-900">
      <main className="flex-1 overflow-auto flex items-center justify-center">
        <div className="px-8">{children}</div>
      </main>
      <aside className="relative flex flex-1 overflow-auto items-center justify-center rounded-lg ">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src={AuthBanner}
          alt="Authentication Illustration"
          fill
          objectFit="cover"
        />

        <div className="flex gap-2 items-center z-50 text-white">
          <MapIcon className="h-12 font-semibold" />
          <h1 className="text-5xl font-semibold">BizTrack</h1>
        </div>
      </aside>
    </div>
  );
}
