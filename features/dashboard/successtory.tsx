import Image from "next/image";
import SuccessPic from "../../public/pic2.jpg";

function SuccessStory() {
  return (
    <div className="flex-2/5 relative bg-white rounded-lg shadow p-6 min-h-60">
      <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>
      <Image
        src={SuccessPic}
        alt="Success Story Illustration"
        fill
        objectFit="cover"
        className="rounded-lg z-20"
      />
      {/* <h1 className="text-3xl font-bold mb-4">Success Story</h1>
      <p className="text-gray-700 mb-4">
        Meet Sarah, a small business owner who struggled to keep track of her
        finances. After implementing BizTrack, she was able to easily monitor
        her cash flow, manage expenses, and make informed decisions. Within just
        a few months, Sarah saw a significant improvement in her business's
        financial health and was able to focus on growth instead of worrying
        about numbers.
      </p>
      <p className="text-gray-700">
        "BizTrack has been a game-changer for my business. It’s like having a
        financial advisor at my fingertips. I can see everything in one place
        and make smarter decisions. I highly recommend it to any business
        owner!" - Sarah
      </p> */}
    </div>
  );
}

export default SuccessStory;
