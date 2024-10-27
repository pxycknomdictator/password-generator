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

  return (
    <form>
      <div className="space-y-2">
        <label
          className="text-[1rem] cs:text-[1.1rem] cursor-pointer custom_selection"
          htmlFor="number"
        >
          Enter password length
        </label>
        <input
          className="w-full py-2 pl-3 text-xl inline-block outline-none border custom_transition border-gray-400 rounded-[.4rem] focus:border-blue-500 focus:border-[2.6px]"
          type="number"
          name="number"
          id="number"
          onChange={handleChangeInputElement}
          value={globalState?.state.passwordLength}
        />
        <span className="text-red-500 text-[.9rem] cs:text-[1.1rem]">
          {globalState?.state.error}
        </span>
      </div>
    </form>
  );
};
