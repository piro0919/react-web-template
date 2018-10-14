import debounce = require('lodash.debounce');
import * as React from 'react';
import Div from './styles';
import './styles/global';

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

interface ReactWebTemplateState {
  footerHeight: number;
  windowHeight: number;
}

class ReactWebTemplate extends React.Component<
  ReactWebTemplateProps,
  ReactWebTemplateState
> {
  static defaultProps = reactWebTemplateDefaultProps;

  private footerRef: React.RefObject<HTMLElement>;

  constructor(props: ReactWebTemplateProps) {
    super(props);

    const { innerHeight } = window;

    this.footerRef = React.createRef<HTMLElement>();
    this.onResizeWindow = this.onResizeWindow.bind(this);
    this.state = {
      footerHeight: 0,
      windowHeight: innerHeight
    };
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.onResizeWindow, 100));

    const { current } = this.footerRef;

    if (current && 'clientHeight' in current) {
      const { clientHeight } = current;

      this.setState({
        footerHeight: clientHeight
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onResizeWindow() {
    const { innerHeight } = window;

    this.setState({
      windowHeight: innerHeight
    });
  }

  render() {
    const {
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
    } = this.props;
    const { footerHeight, windowHeight } = this.state;

    return (
      <Div
        className={`react-web-template ${className}`}
        style={{ height: `${windowHeight}px` }}
      >
        {leftNav && (
          <nav className={`nav-left ${leftNavClassName}`}>{leftNav}</nav>
        )}
        {rightNav && (
          <nav className={`nav-right ${rightNavClassName}`}>{rightNav}</nav>
        )}
        <div className={`content ${contentClassName}`}>
          <div
            className={`wrapper ${wrapperClassName}`}
            style={{ minHeight: `${windowHeight - footerHeight}px` }}
          >
            {header && <header className={headerClassName}>{header}</header>}
            <main className={mainClassName} role="main">
              {children}
            </main>
          </div>
          {footer && (
            <footer className={footerClassName} ref={this.footerRef}>
              {footer}
            </footer>
          )}
        </div>
      </Div>
    );
  }
}

export default ReactWebTemplate;
