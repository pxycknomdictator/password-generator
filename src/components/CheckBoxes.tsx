import { FC } from "react";

export const CheckBoxes: FC = () => {
  return (
    <section className="space-y-1 my-6">
      <div className="space-x-3">
        <input
          className="scale-110"
          type="checkbox"
          name="symbols"
          id="symbols"
        />
        <label className="text-[1.1rem]" htmlFor="symbols">
          Include Symbols
        </label>
      </div>
      <div className="space-x-3">
        <input
          className="scale-110"
          type="checkbox"
          name="numbers"
          id="numbers"
        />
        <label className="text-[1.1rem]" htmlFor="numbers">
          Include Numbers
        </label>
      </div>
      <div className="space-x-3">
        <input
          className="scale-110"
          type="checkbox"
          name="specialCharacters"
          id="specialCharacters"
        />
        <label className="text-[1.1rem]" htmlFor="specialCharacters">
          Include Special Characters
        </label>
      </div>
    </section>
  );
};
