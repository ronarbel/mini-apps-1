import React from 'react';

const Piece = props => {
  let piece = props.piece || 0;
  let data = props.row + ',' + props.col;
  return (<td data={data}>{piece}</td>)
}

export default Piece;