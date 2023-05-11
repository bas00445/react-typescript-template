import { render, screen } from "@testing-library/react";

import * as Stories from "./Button.stories";
import { composeStories } from "@storybook/react";

const { Primary } = composeStories(Stories);

describe("<Button />", () => {
  describe("display", () => {
    it("should render ", () => {
      render(<Primary />);

      expect(screen.getByText("Button")).toBeInTheDocument();
    });
  });
});
