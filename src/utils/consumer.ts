import { useContext } from "react";
import { generatorContext } from "../store/generatorContext";
import { GeneratorContextType } from "../interfaces/storeInterfaces";

export const useThisStateEveryWhere = (): GeneratorContextType | null => {
  const GlobalStateSharing = useContext(generatorContext);
  if (!generatorContext) {
    return null;
  }
  return GlobalStateSharing;
};
