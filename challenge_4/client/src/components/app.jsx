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
        [null,null,null,'red',null,null,null,],
        [null,null,null,'blue',null,null,null,],
      ]
     }
  }
  render() { 
    return (<Display board={this.state.board} />);
  }
}
 
export default App;

