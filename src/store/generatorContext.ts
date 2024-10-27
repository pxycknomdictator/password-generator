import { createContext } from "react";
import { GeneratorContextType } from "../interfaces/storeInterfaces";

export const generatorContext = createContext<GeneratorContextType>({
  state: {
    passwordLength: "",
    includeNumbers: false,
    includeSymbols: false,
    includeSpecialCharacters: false,
  },
  setState: () => {},
  generatePassword: () => {},
});
