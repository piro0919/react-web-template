import * as React from 'react';
import ReactWebTemplate from '../../src';

class App extends React.Component {
  render() {
    return (
      <ReactWebTemplate footer={<div>footer</div>} header={<div>header</div>}>
        a
      </ReactWebTemplate>
    );
  }
}

export default App;
