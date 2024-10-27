import { FC, useState } from "react";
import { generatorContext } from "./generatorContext";
import {
  ChildrenProps,
  StateInitialValues,
} from "../interfaces/storeInterfaces";
import { randomNumberGenerator } from "../utils/random";
import { initialValues } from "../utils/initial";

export const GeneratorContextProvider: FC<ChildrenProps> = ({ children }) => {
  const [state, setState] = useState<StateInitialValues>(initialValues);

  const generatePassword = (newState: StateInitialValues) => {
    let mainString = "bXleEihQRAzjGTWyoNzqMkStHFDJxwYpLUSZVfgBCrvnacOEmdPjKqtI";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()-=+";
    const specialCharacters = "{}[]:;\"'<>,.?/|\\";

    if (Number(newState.passwordLength) < 8) {
      setState((prev) => ({
        ...prev,
        error: "Number should be between 8 - 50",
        displayPassword: "",
        includeNumbers: false,
        includeSpecialCharacters: false,
        includeSymbols: false,
      }));
      return null;
    }

    if (Number(newState.passwordLength) > 50) {
      setState((prev) => ({
        ...prev,
        error: "Number should be between 8 - 50",
        displayPassword: "",
        includeNumbers: false,
        includeSpecialCharacters: false,
        includeSymbols: false,
      }));
      return null;
    }

    let password: string = "";

    if (newState.includeNumbers) mainString += numbers;
    if (newState.includeSymbols) mainString += symbols;
    if (newState.includeSpecialCharacters) mainString += specialCharacters;

    for (let index = 0; index < Number(newState.passwordLength); index++) {
      const id = randomNumberGenerator(Number(mainString.length));
      password += mainString[id];
    }

    setState((prev) => ({ ...prev, displayPassword: password, error: "" }));
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(state.displayPassword);
  };

  return (
    <generatorContext.Provider
      value={{
        state,
        setState,
        generatePassword,
        copyToClipboard,
      }}
    >
      {children}
    </generatorContext.Provider>
  );
};
