// setupFile.js <-- this will run before the tests in jest.
import { setProjectAnnotations } from "@storybook/react";
import * as globalStorybookConfig from "./.storybook/preview"; // path of your preview.js file

import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// @ts-ignore
setProjectAnnotations(globalStorybookConfig);

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
