import { FC } from "react";

export const CheckBoxes: FC = () => {
  return (
    <>
      <div>
        <input type="checkbox" name="symbols" id="symbols" />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <div>
        <input type="checkbox" name="numbers" id="numbers" />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="specialCharacters"
          id="specialCharacters"
        />
        <label htmlFor="specialCharacters">Include Special Characters</label>
      </div>
    </>
  );
};
