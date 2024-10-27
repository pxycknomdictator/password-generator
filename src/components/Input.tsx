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
    }));
  };

  return (
    <form>
      <div className="space-y-3">
        <label
          className="text-[1.1rem] cursor-pointer custom_selection"
          htmlFor="number"
        >
          Enter password length
        </label>
        <input
          className="w-full py-2 pl-3 text-xl inline-block outline-none border custom_transition border-gray-400 rounded-[.4rem] focus:border-blue-500 focus:border-[2px]"
          type="number"
          name="number"
          id="number"
          onChange={handleChangeInputElement}
          value={globalState?.state.passwordLength}
        />
      </div>
    </form>
  );
};
