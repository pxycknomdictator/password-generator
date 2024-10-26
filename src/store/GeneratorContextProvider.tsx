import { FC } from "react";
import { generatorContext } from "./generatorContext";
import { ChildrenProps } from "../interfaces/storeInterfaces";

export const GeneratorContextProvider: FC<ChildrenProps> = ({ children }) => {
  return (
    <generatorContext.Provider value={{}}>{children}</generatorContext.Provider>
  );
};
