import { useContext } from "react";
import { generatorContext } from "../store/generatorContext";

export const useThisStateEveryWhere = () => {
  const GlobalStateSharing = useContext(generatorContext);
  if (!generatorContext) {
    return null;
  }
  return GlobalStateSharing;
};
