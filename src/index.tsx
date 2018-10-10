import * as React from 'react';
import Div from './styles';

export interface ReactWebTemplateProps {
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

class ReactWebTemplate extends React.Component<ReactWebTemplateProps> {
  static defaultProps: Partial<ReactWebTemplateProps> = {
    className: '',
    footer: null,
    header: null
  };

  render() {
    const { children, className, footer, header } = this.props;

    return (
      <Div className={`react-web-template ${className}`}>
        <div className="wrapper">
          {header ? <header className="header">{header}</header> : null}
          <main className="main">{children}</main>
        </div>
        {footer ? <footer className="footer">{footer}</footer> : null}
      </Div>
    );
  }
}

export default ReactWebTemplate;
