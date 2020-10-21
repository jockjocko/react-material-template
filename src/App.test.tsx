import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Does not blow up", () => {
  const app = render(<App />);
  expect(app).not.toBe(undefined);
});
