import { createContext } from "react";
import { IContext } from "../types";

export const PhoneItemContext = createContext<IContext>({
  state: { contacts: [] },
  dispatch: () => null,
});
