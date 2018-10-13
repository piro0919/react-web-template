import * as React from 'react';
import { Helmet } from 'react-helmet';
import Div from './styles';

export interface ReactWebTemplateProps {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  footer?: React.ReactNode;
  footerClassName?: string;
  header?: React.ReactNode;
  headerClassName?: string;
  leftNav?: React.ReactNode;
  leftNavClassName?: string;
  mainClassName?: string;
  rightNav?: React.ReactNode;
  rightNavClassName?: string;
  wrapperClassName?: string;
}

export const reactWebTemplateDefaultProps = {
  children: null,
  className: '',
  contentClassName: '',
  footer: null,
  footerClassName: '',
  header: null,
  headerClassName: '',
  leftNav: null,
  leftNavClassName: '',
  mainClassName: '',
  rightNav: null,
  rightNavClassName: '',
  wrapperClassName: ''
};

const ReactWebTemplate: React.SFC<ReactWebTemplateProps> = ({
  children,
  className,
  contentClassName,
  footer,
  footerClassName,
  header,
  headerClassName,
  leftNav,
  leftNavClassName,
  mainClassName,
  rightNav,
  rightNavClassName,
  wrapperClassName
}: ReactWebTemplateProps) => (
  <Div className={`react-web-template ${className}`}>
    <Helmet>
      <style type="text/css">
        {`
html {
  overflow: hidden;
}

body {
  margin: 0;
}
            `}
      </style>
    </Helmet>
    {leftNav && <nav className={`nav-left ${leftNavClassName}`}>{leftNav}</nav>}
    {rightNav && (
      <nav className={`nav-right ${rightNavClassName}`}>{rightNav}</nav>
    )}
    <div className={`content ${contentClassName}`}>
      <div className={`wrapper ${wrapperClassName}`}>
        {header && <header className={headerClassName}>{header}</header>}
        <main className={mainClassName} role="main">
          {children}
        </main>
      </div>
      {footer && <footer className={footerClassName}>{footer}</footer>}
    </div>
  </Div>
);

ReactWebTemplate.defaultProps = reactWebTemplateDefaultProps;

export default ReactWebTemplate;
