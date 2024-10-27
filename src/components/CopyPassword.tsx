import { FC } from "react";

export const CopyPassword: FC = () => {
  return (
    <div className="mt-[4.5rem] cs:mt-6 space-y-3">
      <label
        className="cursor-pointer custom_selection text-[1.1rem]"
        htmlFor="copy"
      >
        Copy Password
      </label>
      <textarea
        className="w-full pl-3 text-[1.1rem] resize-none inline-block outline-none border custom_transition border-gray-400 rounded-[.4rem] pt-2 focus:border-blue-500 focus:border-[2px]"
        name="copy"
        id="copy"
        rows={6}
      ></textarea>
    </div>
  );
};
