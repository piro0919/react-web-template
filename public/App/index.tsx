import debounce = require('lodash.debounce');
import * as React from 'react';
import ReactWebTemplate from './styles';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.onClickHeaderButton = this.onClickHeaderButton.bind(this);
    this.onClickLeftButton = this.onClickLeftButton.bind(this);
    this.onClickRightButton = this.onClickRightButton.bind(this);
    this.onResizeWindow = this.onResizeWindow.bind(this);
    this.state = {
      headerHeight: 100,
      isFitHeader: false,
      isOpenLeftNav: false,
      isOpenRightNav: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.onResizeWindow, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onClickHeaderButton() {
    const { isFitHeader } = this.state;

    this.setState({
      headerHeight: !isFitHeader ? innerHeight : 100,
      isFitHeader: !isFitHeader
    });
  }

  onClickLeftButton() {
    const { isOpenLeftNav } = this.state;

    this.setState({
      isOpenLeftNav: !isOpenLeftNav,
      isOpenRightNav: false
    });
  }

  onClickRightButton() {
    const { isOpenRightNav } = this.state;

    this.setState({ isOpenLeftNav: false, isOpenRightNav: !isOpenRightNav });
  }

  onResizeWindow() {
    const { isFitHeader } = this.state;
    const { innerHeight } = window;

    this.setState({
      headerHeight: isFitHeader ? innerHeight : 100
    });
  }

  render() {
    const {
      headerHeight,
      isFitHeader,
      isOpenLeftNav,
      isOpenRightNav
    } = this.state;

    return (
      <ReactWebTemplate
        className={`${isOpenLeftNav ? 'open-left-nav' : ''} ${
          isOpenRightNav ? 'open-right-nav' : ''
        }`}
        footer={<div className="footer">footer</div>}
        header={
          <div
            className="header"
            style={{
              height: `${headerHeight}px`
            }}
          >
            <span>header</span>
            <button onClick={this.onClickHeaderButton}>fit header</button>
          </div>
        }
        leftNav={<div className="left-nav">leftNav</div>}
        rightNav={<div className="right-nav">rightNav</div>}
      >
        <div className="main">
          <div className="buttons">
            <button onClick={this.onClickLeftButton}>Open leftNav</button>
            <button onClick={this.onClickRightButton}>Open rightNav</button>
          </div>
          <p>main</p>
          <p>main</p>
          <p>main</p>
          <p>main</p>
          <p>main</p>
        </div>
      </ReactWebTemplate>
    );
  }
}

export default App;
