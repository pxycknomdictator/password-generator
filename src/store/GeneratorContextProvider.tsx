import { generatorContext } from "./generatorContext";

export const GeneratorContextProvider = ({ children }) => {
  return (
    <generatorContext.Provider value={{}}>{children}</generatorContext.Provider>
  );
};
