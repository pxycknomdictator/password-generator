import { FC } from "react";
import { useThisStateEveryWhere } from "../utils/consumer";

export const GeneratePasswordButton: FC = () => {
  const globalState = useThisStateEveryWhere();

  const handleGeneratePassword = (): void => {
    globalState?.generatePassword(globalState.state);
  };

  return (
    <div>
      <button
        className="inline-block text-[1rem] py-1.5 rounded-[.4rem] w-full sm:py-2 sm:text-[1.20rem] bg-blue-500 hover:bg-blue-600 text-white font-semibold"
        type="submit"
        onClick={handleGeneratePassword}
      >
        Generate Password
      </button>
    </div>
  );
};
