import React from 'react';
import './App.css';
import Board from './Board';
import Card from './Card';

const ANIMALS = [
  {
    className: 'fas fa-cat draggable cat',
    draggable: true,
    id: 'cat',
    icon: true,
  },
  {
    className: 'fas fa-dog draggable dog',
    draggable: true,
    id: 'dog',
    icon: true,
  },
  {
    className: 'fas fa-dove draggable bird',
    draggable: true,
    id: 'bird',
    icon: true,
  },
  {
    className: 'fas fa-frog draggable frog',
    draggable: true,
    id: 'frog',
    icon: true,
  },
  {
    className: 'fas fa-fish draggable fish',
    draggable: true,
    id: 'fish',
    icon: true,
  },
  {
    className: 'fas fa-spider draggable spider',
    draggable: true,
    id: 'spider',
    icon: true,
  },
];

const BOXES = [
  {
    className: 'droppable',
    id: 'fish-box',
    text: 'Fish',
    draggable: false,
    icon: false,
    animal: 'fish',
    animalText: 'fish-box-text',
  },
  {
    className: 'droppable',
    id: 'dog-box',
    text: 'Dog',
    draggable: false,
    icon: false,
    animal: 'dog',
    animalText: 'dog-box-text',
  },
  {
    className: 'droppable',
    id: 'spider-box',
    text: 'Spider',
    draggable: false,
    icon: false,
    animal: 'spider',
    animalText: 'spider-box-text',
  },
  {
    className: 'droppable',
    id: 'cat-box',
    text: 'Cat',
    draggable: false,
    icon: false,
    animal: 'cat',
    animalText: 'cat-box-text',
  },
  {
    className: 'droppable',
    id: 'bird-box',
    text: 'Bird',
    draggable: false,
    icon: false,
    animal: 'bird',
    animalText: 'bird-box-text',
  },
  {
    className: 'droppable',
    id: 'frog-box',
    text: 'Frog',
    draggable: false,
    icon: false,
    animal: 'frog',
    animalText: 'frog-box-text',
  },
];

function App() {
  return (
    <div className='container'>
      <Board id='board-1' className='draggable-container'>
        {ANIMALS.map((animal) => {
          return (
            <Card
              id={animal.id}
              key={animal.id}
              className={animal.className}
              draggable={animal.draggable}
              icon={animal.icon}
            />
          );
        })}
      </Board>
      <Board id='board-2' className='droppable-container'>
        {BOXES.map((box) => {
          return (
            <>
              <span className='decription' key={box.key}>
                {box.text}
              </span>
              <Card
                key={box.id}
                className={box.className}
                draggable={box.draggable}
                icon={box.icon}
                animal={box.animal}
              />
            </>
          );
        })}
      </Board>
    </div>
  );
}

export default App;
