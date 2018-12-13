import React from 'react';

const Piece = props => {
  return (<td data={props.col} class={props.piece} onClick={ ()=>{ props.play(props.col) } }></td>)
}

export default Piece;