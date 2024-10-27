import { FC } from "react";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { CheckBoxes } from "./components/CheckBoxes";
import { GeneratePasswordButton } from "./components/GeneratePasswordButton";
import { CopyPassword } from "./components/CopyPassword";

export const App: FC = () => (
  <main className="w-screen h-screen grid place-items-center bg-[#f2f4f7]">
    <section className="w-full h-full cs:h-auto rounded-lg px-8 py-6 mx-auto cs:w-[70%] md:w-[69%] lg:w-1/2 bg-white custom_shadow">
      <Heading />
      <Input />
      <CheckBoxes />
      <GeneratePasswordButton />
      <CopyPassword />
    </section>
  </main>
);
