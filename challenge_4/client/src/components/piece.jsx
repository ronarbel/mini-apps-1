import React from 'react';

const Piece = props => {
  let data = [props.row, props.col];
  return (<td data={data} class={props.piece}></td>)
}

export default Piece;