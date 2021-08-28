/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
export const createCeils = (count) => {
  if (typeof count !== 'number') throw new Error('Не число!');

  const createdCoils = [];

  let i = 0;
  while (i < count) {
    const ceil = document.createElement('div');
    ceil.className = 'board__ceil';
    createdCoils.push(ceil);
    i++;
  }

  return createdCoils;
};

export const createImg = () => {
  const img = document.createElement('img');
  img.className = 'board__img';
  img.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/simplification/dom/pic/goblin.png';
  img.alt = 'monster';

  return img;
};

let prev;
export const randomSpawnMonsters = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);

  if (prev !== rand) {
    prev = rand;
    return arr[rand];
  }

  if (prev === rand) return randomSpawnMonsters([...arr]);
};
