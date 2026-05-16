import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WebTemplate } from "../src";

describe("WebTemplate", () => {
  it("renders main content", () => {
    render(
      <WebTemplate>
        <p>main</p>
      </WebTemplate>,
    );
    expect(screen.getByRole("main")).toHaveTextContent("main");
  });

  it("renders all slots when provided", () => {
    render(
      <WebTemplate header={<p>h</p>} footer={<p>f</p>} leftNav={<p>l</p>} rightNav={<p>r</p>}>
        <p>m</p>
      </WebTemplate>,
    );
    expect(screen.getByRole("banner")).toHaveTextContent("h");
    expect(screen.getByRole("contentinfo")).toHaveTextContent("f");
    expect(screen.getAllByRole("navigation")).toHaveLength(2);
    expect(screen.getByRole("main")).toHaveTextContent("m");
  });

  it("omits optional slots when not provided", () => {
    render(
      <WebTemplate>
        <p>m</p>
      </WebTemplate>,
    );
    expect(screen.queryByRole("banner")).toBeNull();
    expect(screen.queryByRole("contentinfo")).toBeNull();
    expect(screen.queryByRole("navigation")).toBeNull();
  });

  it("sets data attributes based on slot presence", () => {
    render(
      <WebTemplate header={<p>h</p>}>
        <p>m</p>
      </WebTemplate>,
    );
    const root = document.querySelector("[data-web-template]")!;
    expect(root).toHaveAttribute("data-has-header", "true");
    expect(root).not.toHaveAttribute("data-has-footer");
    expect(root).not.toHaveAttribute("data-has-left-nav");
    expect(root).not.toHaveAttribute("data-has-right-nav");
  });

  it("applies className to root and per-slot classes", () => {
    render(
      <WebTemplate
        className="root"
        headerClassName="h"
        footerClassName="f"
        leftNavClassName="l"
        rightNavClassName="r"
        mainClassName="m"
        header={<p>h</p>}
        footer={<p>f</p>}
        leftNav={<p>l</p>}
        rightNav={<p>r</p>}
      >
        <p>main</p>
      </WebTemplate>,
    );
    expect(document.querySelector("[data-web-template]")).toHaveClass("root");
    expect(screen.getByRole("banner")).toHaveClass("h");
    expect(screen.getByRole("contentinfo")).toHaveClass("f");
    expect(screen.getByRole("main")).toHaveClass("m");
  });

  it("emits no default styles when unstyled is true", () => {
    render(
      <WebTemplate unstyled header={<p>h</p>}>
        <p>m</p>
      </WebTemplate>,
    );
    const root = document.querySelector<HTMLElement>("[data-web-template]")!;
    expect(root.style.display).toBe("");
    expect(screen.getByRole("banner").getAttribute("style")).toBeNull();
  });

  it("applies default CSS Grid by default", () => {
    render(
      <WebTemplate>
        <p>m</p>
      </WebTemplate>,
    );
    const root = document.querySelector<HTMLElement>("[data-web-template]")!;
    expect(root.style.display).toBe("grid");
  });
});
