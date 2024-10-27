import { FC } from "react";

export const Input: FC = () => (
  <form>
    <div className="space-y-3">
      <label className="text-[1.1rem]" htmlFor="number">
        Enter password length
      </label>
      <input
        className="w-full py-2 pl-3 text-xl inline-block outline-none border custom_transition border-gray-400 rounded-[.4rem] focus:border-blue-500 focus:border-[3px]"
        type="number"
        name="number"
        id="number"
      />
    </div>
  </form>
);
