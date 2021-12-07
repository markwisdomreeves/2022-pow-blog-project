/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function AccountVerificationSuccessAlert() {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-white-500"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-white-500">
            Email is successfully sent to your Email
          </p>
        </div>
      </div>
    </div>
  );
}
