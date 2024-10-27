import { FC } from "react";
import { Heading } from "./components/Heading";

export const App: FC = () => (
  <main className="w-screen h-screen grid place-items-center">
    <section>
      <Heading />
    </section>
  </main>
);
