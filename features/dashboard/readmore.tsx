import Image from "next/image";
import AuthBanner from "../../public/authlayout.webp";
import { ArrowRightIcon, MapIcon } from "@heroicons/react/24/solid";

function Readmore() {
  return (
    <div className="flex flex-3/5 justify-between bg-white rounded-lg shadow p-3">
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-600">Built by Suluhi Technology</p>
          <h3 className="text-xl font-semibold mb-4 mt-2 text-teal-600">
            BizTrack Dashboard
          </h3>
          <p className="text-sm text-gray-500">
            generates a comprehensive financial overview, providing insights
            into assets, liabilities, revenue, and expenses. It offers a clear
            snapshot of your financial health, empowering informed
            decision-making.
          </p>
        </div>
        <div>
          <a
            href="https://www.youtube.com/playlist?list=PLBD1B04EAC0152F4B"
            target="_blank"
            className="text-sm text-gray-500 hover:underline"
          >
            Read More
            <ArrowRightIcon className="h-4 w-4 inline-block ml-1" />
          </a>
        </div>
      </div>
      <div className="relative h-full w-2/5 rounded-3xl flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>

        <Image
          src={AuthBanner}
          alt="Authentication Illustration"
          fill
          objectFit="cover"
          className="rounded-lg"
        />

        <div className="flex gap-2 items-center z-50 text-white">
          <MapIcon className="h-7 font-semibold" />
          <h1 className="text-2xl font-semibold">BizTrack</h1>
        </div>
      </div>
    </div>
  );
}

export default Readmore;
