import { FC } from "react";
import { useThisStateEveryWhere } from "../utils/consumer";

export const CheckBoxes: FC = () => {
  const globalState = useThisStateEveryWhere();

  const handleChangeCheckboxes = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    globalState?.setState((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <section className="space-y-1 my-6">
      <div className="space-x-3 w-fit">
        <input
          className="scale-110"
          type="checkbox"
          name="includeNumbers"
          id="includeNumbers"
          checked={globalState?.state.includeNumbers}
          onChange={handleChangeCheckboxes}
        />
        <label
          className="text-[1.1rem] custom_selection cursor-pointer"
          htmlFor="includeNumbers"
        >
          Include Numbers
        </label>
      </div>
      <div className="space-x-3 w-fit">
        <input
          className="scale-110"
          type="checkbox"
          name="includeSpecialCharacters"
          id="includeSpecialCharacters"
          checked={globalState?.state.includeSpecialCharacters}
          onChange={handleChangeCheckboxes}
        />
        <label
          className="text-[1.1rem] custom_selection cursor-pointer"
          htmlFor="includeSpecialCharacters"
        >
          Include Special Characters
        </label>
      </div>
      <div className="space-x-3 w-fit">
        <input
          className="scale-110"
          type="checkbox"
          name="includeSymbols"
          id="includeSymbols"
          checked={globalState?.state.includeSymbols}
          onChange={handleChangeCheckboxes}
        />
        <label
          className="text-[1.1rem] custom_selection cursor-pointer"
          htmlFor="includeSymbols"
        >
          Include Symbols
        </label>
      </div>
    </section>
  );
};
