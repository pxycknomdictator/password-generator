import { FC } from "react";

export const Input: FC = () => (
  <form>
    <div>
      <label htmlFor="number">Enter you password length</label>
      <input type="number" name="number" id="number" />
    </div>
  </form>
);
