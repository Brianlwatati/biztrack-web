import {
  BanknotesIcon,
  CreditCardIcon,
  HomeModernIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";

export default function OverviewTiles() {
  return (
    <div className="flex gap-8 mb-8">
      <div className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow ">
        <div>
          <h2 className="text-sm text-gray-800 font-semibold mb-2">
            Current Assets
          </h2>
          <p className="text-2xl font-bold text-teal-600">$790,345</p>
        </div>
        <HomeModernIcon className="h-10 w-10 text-teal-600" />
      </div>
      <div className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow ">
        <div>
          <h2 className="text-sm text-gray-800 font-semibold mb-2">
            Current Liabilities
          </h2>
          <p className="text-2xl font-bold text-teal-600">$92,345</p>
        </div>
        <ScaleIcon className="h-10 w-10 text-teal-600" />
      </div>

      <div className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow ">
        <div>
          <h2 className="text-sm text-gray-800 font-semibold mb-2">
            Total Revenue
          </h2>
          <p className="text-2xl font-bold text-teal-600">$22,345</p>
        </div>
        <div>
          <BanknotesIcon className="h-10 w-10 text-teal-600" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between rounded-lg bg-white p-4 shadow ">
        <div>
          <h2 className="text-sm text-gray-800 font-semibold mb-2">
            Total Expenses
          </h2>
          <p className="text-2xl font-bold text-teal-600">$14,345</p>
        </div>
        <div>
          <CreditCardIcon className="h-10 w-10 text-teal-600" />
        </div>
      </div>
    </div>
  );
}
