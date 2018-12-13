import React from 'react';
import Piece from './piece.jsx';

const Display = props => {

  const display = props.board.map((row, rowI) => {
    return (<tr data={rowI}>{row.map((cell, colI) => (<Piece piece={cell} col={colI} row={rowI}/>))}</tr>);
  });

  return (
    <table>
      <tbody>
        {display}
      </tbody>
    </table>
  );
};

export default Display;