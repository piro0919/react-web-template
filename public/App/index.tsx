import * as React from 'react';
import ReactWebTemplate from './styles';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.onClickLeftButton = this.onClickLeftButton.bind(this);
    this.onClickRightButton = this.onClickRightButton.bind(this);
    this.state = {
      isOpenLeftNav: false,
      isOpenRightNav: false
    };
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

  render() {
    const { isOpenLeftNav, isOpenRightNav } = this.state;

    return (
      <ReactWebTemplate
        className={`${isOpenLeftNav ? 'open-left-nav' : ''} ${
          isOpenRightNav ? 'open-right-nav' : ''
        }`}
        footer={<div className="footer">© 2018 kk-web</div>}
        header={<div className="header">react-web-template example</div>}
        leftNav={<div className="left-nav">leftNav</div>}
        rightNav={<div className="right-nav">rightNav</div>}
      >
        <div className="main">
          <div className="buttons">
            <button onClick={this.onClickLeftButton}>Open leftNav</button>
            <button onClick={this.onClickRightButton}>Open rightNav</button>
          </div>
          <p>This package makes it easy to create web site by react.</p>
          <p>You only have to specify the following components as needed.</p>
          <ul>
            <li>children (main component)</li>
            <li>footer</li>
            <li>header</li>
            <li>leftNav</li>
            <li>rightNav</li>
          </ul>
          <p>
            Also, if you need more fine adjustment, you can also add the
            following class name.
          </p>
          <ul>
            <li>className (add to ReactWebTemplate component)</li>
            <li>
              contentClassName (add to wrapper DOM of wrapper and footer DOM)
            </li>
            <li>footerClassName</li>
            <li>headerClassName</li>
            <li>leftNavClassName</li>
            <li>rightNavClassName</li>
            <li>
              scrollWrapperClassName (add to wrapper DOM has vertical scroll)
            </li>
            <li>
              wrapperClassName (add to wrapper DOM of header and main DOM)
            </li>
          </ul>
        </div>
      </ReactWebTemplate>
    );
  }
}

export default App;
