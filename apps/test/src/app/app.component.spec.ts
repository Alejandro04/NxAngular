import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/angular";
import { AppComponent } from "./app.component";

expect.extend(toHaveNoViolations);

describe("AppComponent", () => {
  it("should be accessible", async () => {
    const { container } = await render(AppComponent);

    expect(await axe(container)).toHaveNoViolations();
  });
});
