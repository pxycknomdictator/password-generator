import { Dispatch, ReactNode, SetStateAction } from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface GeneratorContextType {
  state: StateInitialValues;
  setState: Dispatch<SetStateAction<StateInitialValues>>;
  generatePassword: (newState: StateInitialValues) => void;
  copyToClipboard: () => void;
}

interface StateInitialValues {
  passwordLength: string;
  includeSpecialCharacters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  displayPassword: string;
  error: string;
  successMessage: string;
}

export type { ChildrenProps, StateInitialValues, GeneratorContextType };
