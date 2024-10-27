import { FC } from "react";
import { useThisStateEveryWhere } from "../utils/consumer";

export const CopyPassword: FC = () => {
  const globalState = useThisStateEveryWhere();
  return (
    <div className="mt-[4.5rem] cs:mt-6 space-y-3">
      <label
        className="cursor-pointer custom_selection text-[1.1rem]"
        htmlFor="copy"
      >
        Password
      </label>
      <textarea
        className="w-full pl-3 text-[1.1rem] resize-none inline-block outline-none border custom_transition border-gray-400 rounded-[.4rem] pt-2 focus:border-blue-500 focus:border-[2.6px]"
        name="copy"
        id="copy"
        rows={6}
        readOnly
        value={globalState?.state.displayPassword}
      ></textarea>
      <button
        className="inline-block text-[1rem] py-1.5 rounded-[.4rem] w-full sm:py-2 sm:text-[1.20rem] bg-purple-700 hover:bg-purple-800 text-white font-semibold"
        type="submit"
      >
        Copy Password
      </button>
    </div>
  );
};
