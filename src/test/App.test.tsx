import { render, screen } from "@testing-library/react";
import App from "../App";

const testComponent = <App></App>;

describe("App test", () => {
  test("App render test", () => {
    render(testComponent);
    expect(screen.getByTestId("main-app")).toBeInTheDocument();
  });
});
