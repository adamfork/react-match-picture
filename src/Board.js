import React, { useRef } from 'react';

const Board = (props) => {
  const board = useRef();
  const dragOver = (e) => {
    e.preventDefault();
    const box = e.target.getBoundingClientRect();
    const offset = e.clientX - box.left - box.width / 2;
    const card = document.querySelector('.dragging');

    if (e.target.id === 'board-1') {
      board.current.appendChild(card);
    }

    if (e.target.parentNode.id === 'board-1') {
      if (offset < 0) {
        e.target.parentNode.insertBefore(card, e.target);
      } else {
        e.target.parentNode.insertBefore(card, e.target.nextSibling);
      }
    }
  };
  const drop = (e) => {
    // e.preventDefault();
    const boardOne = document.getElementById('board-1');
    const card = document.querySelector('.dragging');
    if (
      e.target.parentNode.parentNode.id === 'board-2' &&
      e.target.classList.contains('draggable') === true &&
      e.target.id !== card.id
    ) {
      // console.log(e.target);
      if (e.target.parentNode.dataset.animal === card.id) {
        e.target.parentNode.style.border = '3px solid green';
      } else {
        e.target.parentNode.style.border = '3px solid red';
      }
      e.target.parentNode.appendChild(card);
      boardOne.appendChild(e.target.parentNode.firstChild);
    } else if (e.target.className === 'droppable') {
      // console.log(e.target.dataset.animal);
      e.target.appendChild(card);
      if (e.target.dataset.animal === card.id) {
        e.target.style.border = '3px solid green';
      } else {
        e.target.style.border = '3px solid red';
      }
    } else if (e.target.id === card.id) {
      if (e.target.parentNode.id !== 'board-1') {
        if (e.target.parentNode.dataset.animal === card.id) {
          e.target.parentNode.style.border = '3px solid green';
        } else {
          e.target.parentNode.style.border = '3px solid red';
        }
      }
    } else if (
      e.currentTarget.id !== 'board-1' &&
      e.currentTarget.id !== 'board-2'
    ) {
      boardOne.appendChild(card);
    }
  };
  const dragLeave = (e) => {
    const boardOne = document.getElementById('board-1');
    const card = document.querySelector('.dragging');

    if (e.currentTarget.id === 'board-2') {
      boardOne.appendChild(card);
    }
  };
  return (
    <div
      ref={board}
      id={props.id}
      className={props.className}
      onDragOver={dragOver}
      onDrop={drop}
      onDragLeave={dragLeave}
    >
      {props.children}
    </div>
  );
};

export default Board;
