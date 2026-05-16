import type { CSSProperties, ReactNode } from "react";

export type WebTemplateProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  leftNav?: ReactNode;
  rightNav?: ReactNode;
  className?: string;
  headerClassName?: string;
  footerClassName?: string;
  leftNavClassName?: string;
  rightNavClassName?: string;
  mainClassName?: string;
  style?: CSSProperties;
  unstyled?: boolean;
};

const ROOT_STYLE: CSSProperties = {
  display: "grid",
  gridTemplateAreas: `
    "header header header"
    "leftNav main rightNav"
    "footer footer footer"
  `,
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "auto 1fr auto",
  minHeight: "100vh",
};

const AREA_STYLE = {
  header: { gridArea: "header" },
  footer: { gridArea: "footer" },
  leftNav: { gridArea: "leftNav" },
  rightNav: { gridArea: "rightNav" },
  main: { gridArea: "main" },
} as const;

export function WebTemplate({
  children,
  header,
  footer,
  leftNav,
  rightNav,
  className,
  headerClassName,
  footerClassName,
  leftNavClassName,
  rightNavClassName,
  mainClassName,
  style,
  unstyled = false,
}: WebTemplateProps) {
  const rootStyle: CSSProperties | undefined = unstyled ? style : { ...ROOT_STYLE, ...style };

  return (
    <div
      data-web-template=""
      data-has-header={header ? "true" : undefined}
      data-has-footer={footer ? "true" : undefined}
      data-has-left-nav={leftNav ? "true" : undefined}
      data-has-right-nav={rightNav ? "true" : undefined}
      className={className}
      style={rootStyle}
    >
      {header ? (
        <header
          data-slot="header"
          className={headerClassName}
          style={unstyled ? undefined : AREA_STYLE.header}
        >
          {header}
        </header>
      ) : null}
      {leftNav ? (
        <nav
          data-slot="left-nav"
          className={leftNavClassName}
          style={unstyled ? undefined : AREA_STYLE.leftNav}
        >
          {leftNav}
        </nav>
      ) : null}
      <main
        data-slot="main"
        className={mainClassName}
        style={unstyled ? undefined : AREA_STYLE.main}
      >
        {children}
      </main>
      {rightNav ? (
        <nav
          data-slot="right-nav"
          className={rightNavClassName}
          style={unstyled ? undefined : AREA_STYLE.rightNav}
        >
          {rightNav}
        </nav>
      ) : null}
      {footer ? (
        <footer
          data-slot="footer"
          className={footerClassName}
          style={unstyled ? undefined : AREA_STYLE.footer}
        >
          {footer}
        </footer>
      ) : null}
    </div>
  );
}
