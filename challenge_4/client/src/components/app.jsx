import React from 'react';
import Display from './display.jsx';
import checkWin from './../checkWin.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      gameOn: true,
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
     this.reset = this.reset.bind(this);
  }

  play(col) {
    if (this.state.gameOn) {
      let board = this.state.board;
  
      for (let i = board.length - 1; i >= 0; i--) {
        let cell = board[i][col];
        if (!cell) {
          board[i][col] = this.state.redTurn ? 'red' : 'blue';
            this.setState({redTurn: !this.state.redTurn, board: board})
          break
        }
      }
  
      if (checkWin(this.state.board)) {
        this.setState({gameOn: false})
      }
    }
  }

  reset() {
    this.setState({
      gameOn: true,
      redTurn: true,
      board: [
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
      ]
    })
  }

  render() { 
    return (
      <div>
        <Display board={this.state.board} play={this.play} />
        <br></br>
        <div id="reset">
          <button onClick={this.reset}>RESET</button>
        </div>
        
      </div>
    );
  }
}
 
export default App;

