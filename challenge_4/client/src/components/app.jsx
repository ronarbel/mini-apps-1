import React from 'react';
import Display from './display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: [
        [null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,],
        [null,null,null,1,null,null,null,],
        [null,null,null,3,null,null,null,],
      ]
     }
  }
  render() { 
    return (<Display board={this.state.board} />);
  }
}
 
export default App;

