import { FC } from "react";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { CheckBoxes } from "./components/CheckBoxes";
import { ResetApp } from "./components/ResetApp";
import { CopyPassword } from "./components/CopyPassword";

export const App: FC = () => (
  <main className="w-screen h-screen grid place-items-center bg-[#f2f4f7]">
    <section className="w-full h-full cs:h-auto rounded-lg px-4 cs:px-8 py-6 mx-auto cs:w-[90%] md:w-[80%] lg:w-1/2 bg-white custom_shadow">
      <Heading />
      <Input />
      <CheckBoxes />
      <ResetApp />
      <CopyPassword />
    </section>
  </main>
);
