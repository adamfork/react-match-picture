import React from 'react';

const Card = (props) => {
  const dragStart = (e) => {
    e.target.classList.add('dragging');
    if (e.target.parentNode.className === 'droppable') {
      e.target.parentNode.style.border = '3px dashed black';
    }
  };
  const dragEnd = (e) => {
    e.target.classList.remove('dragging');
  };
  return (
    <>
      {props.icon ? (
        <i
          className={props.className}
          id={props.id}
          draggable={props.draggable}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
        />
      ) : (
        <div
          id={props.id}
          className={props.className}
          draggable={props.draggable}
          data-animal={props.animal}
        ></div>
      )}
    </>
  );
};

export default Card;
