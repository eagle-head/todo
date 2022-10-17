import React, { FC, type PropsWithChildren, ReactElement } from "react";
import { render } from "@testing-library/react-native";
import { Provider as PaperProvider } from "react-native-paper";

type Options = Parameters<typeof render>[1];

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return <PaperProvider>{children}</PaperProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<Options, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";
export { customRender as render };
