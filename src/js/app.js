import { createCeils, createImg, randomSpawnMonsters } from './helpers';

(() => {
  const board = document.querySelector('.board__content');
  const hit = document.querySelector('.hit');
  const miss = document.querySelector('.miss');
  const cursor = document.querySelector('.cursor');
  const gameover = document.querySelector('.gameover');

  const attackMonster = (e) => {
    const { currentTarget } = e;
    gameover.style.display = 'none';

    if (currentTarget.children.length > 0) {
      hit.innerText = +hit.innerText + 1;
      currentTarget.firstElementChild.remove();
      return;
    }
    miss.innerText = +miss.innerText + 1;

    if (miss.innerText > 5) {
      gameover.style.display = 'block';
      hit.innerText = '';
      miss.innerText = '';
    }
  };

  const mouseMoveInCeil = (e) => {
    cursor.style.display = 'block';
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  };
  board.addEventListener('mousemove', mouseMoveInCeil);

  createCeils(4).forEach((ceil) => {
    ceil.addEventListener('click', attackMonster);
    board.appendChild(ceil);
  });

  const ceils = document.querySelectorAll('.board__ceil');

  setInterval(() => {
    [...ceils].forEach((ceil) => {
      if (ceil.children.length >= 1) {
        ceil.firstElementChild.remove();
      }
    });

    randomSpawnMonsters([...ceils]).appendChild(createImg());
  }, 1000);
})();
