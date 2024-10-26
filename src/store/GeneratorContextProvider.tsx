import { FC, useState } from "react";
import { generatorContext } from "./generatorContext";
import {
  ChildrenProps,
  StateInitialValues,
} from "../interfaces/storeInterfaces";

export const GeneratorContextProvider: FC<ChildrenProps> = ({ children }) => {
  const [state, setState] = useState<StateInitialValues>({
    passwordLength: "",
    includeNumbers: false,
    includeSymbols: false,
    includeSpecialCharacters: false,
  });

  return (
    <generatorContext.Provider value={{ state, setState }}>
      {children}
    </generatorContext.Provider>
  );
};
