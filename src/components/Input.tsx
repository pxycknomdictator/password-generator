import { FC } from "react";
import { useThisStateEveryWhere } from "../utils/consumer";

export const Input: FC = () => {
  const globalState = useThisStateEveryWhere();

  const handleChangeInputElement = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    globalState?.setState((prev) => ({
      ...prev,
      passwordLength: event.target.value,
      error: "",
    }));
  };

  const handleGeneratePassword = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    globalState?.generatePassword(globalState.state);
  };

  return (
    <form onSubmit={handleGeneratePassword}>
      <div className="space-y-2">
        <label
          className="text-[1rem] cs:text-[1.1rem] cursor-pointer custom_selection"
          htmlFor="number"
        >
          Enter password length
        </label>
        <div className="flex justify-between rounded-[.4rem]">
          <input
            className="w-full py-2 pl-3 text-[1rem] cs:text-[1.1rem] inline-block border-y-[1px] border-l-[1px] outline-none custom_transition border-gray-400 focus:border-blue-500 focus:border-l-[2.6px] focus:border-y-[2.6px]"
            type="number"
            name="number"
            id="number"
            placeholder="Enter Number"
            onChange={handleChangeInputElement}
            value={globalState?.state.passwordLength}
          />
          <button
            type="submit"
            className="bg-blue-500 text-[1.1rem] px-3 hover:bg-blue-600 sm:px-4 text-white font-semibold"
          >
            Generate
          </button>
        </div>
      </div>
      <span className="text-red-500 font-semibold text-[.9rem] cs:text-[1.1rem]">
        {globalState?.state.error}
      </span>
    </form>
  );
};
