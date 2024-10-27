import { Dispatch, ReactNode, SetStateAction } from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface GeneratorContextType {
  state: StateInitialValues;
  setState: Dispatch<SetStateAction<StateInitialValues>>;
}

interface StateInitialValues {
  passwordLength: string;
  includeSpecialCharacters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export type { ChildrenProps, StateInitialValues, GeneratorContextType };
