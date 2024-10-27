import { FC } from "react";
import { useThisStateEveryWhere } from "../utils/consumer";
import { initialValues } from "../utils/initial";

export const ResetApp: FC = () => {
  const globalState = useThisStateEveryWhere();

  const handleResetApp = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    globalState?.setState(initialValues);
  };

  return (
    <div>
      <button
        className="inline-block text-[1rem] py-2 rounded-[.2rem] w-full sm:py-2 sm:text-[1.20rem] bg-red-500 hover:bg-red-600 text-white font-semibold"
        type="submit"
        onClick={handleResetApp}
      >
        Reset
      </button>
    </div>
  );
};
