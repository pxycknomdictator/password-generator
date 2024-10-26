import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { GeneratorContextProvider } from "./store/GeneratorContextProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <GeneratorContextProvider>
    <App />
  </GeneratorContextProvider>
);
