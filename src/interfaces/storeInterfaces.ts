import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface StateInitialValues {
  passwordLength: string;
  includeSpecialCharacters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export type { ChildrenProps, StateInitialValues };
