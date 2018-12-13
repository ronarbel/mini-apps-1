import React from 'react';
import Display from './display.jsx';
import checkWin from './../checkWin.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      redTurn: true,
      board: [
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
      ]
     }

     this.play = this.play.bind(this);
  }

  play(col) {
    let board = this.state.board;

    for (let i = board.length - 1; i >= 0; i--) {
      let cell = board[i][col];
      if (!cell) {
        board[i][col] = this.state.redTurn ? 'red' : 'blue';
          this.setState({redTurn: !this.state.redTurn, board: board})
        break
      }
    }

    console.log(checkWin());
  }

  render() { 
    return (<Display board={this.state.board} play={this.play}/>);
  }
}
 
export default App;

