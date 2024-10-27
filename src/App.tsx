import { FC } from "react";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { CheckBoxes } from "./components/CheckBoxes";
import { GeneratePasswordButton } from "./components/GeneratePasswordButton";
import { CopyPassword } from "./components/CopyPassword";

export const App: FC = () => (
  <main className="w-screen h-screen grid place-items-center">
    <section>
      <Heading />
      <Input />
      <CheckBoxes />
      <GeneratePasswordButton />
      <CopyPassword />
    </section>
  </main>
);
