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
        footer={<div className="footer">footer</div>}
        header={<div className="header">header</div>}
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
