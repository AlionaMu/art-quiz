import { PaintersGameCard } from '../components/PaintersGameCard'
import { PaintersGameList } from '../services/PaintersGame'
import { PaintingsGameCard } from '../components/PaintingsGameCard'
import { PaintingsGameList } from '../services/PaintingsGame'
import win from './../assets/audio/win.wav'


export function answerRight(authorsArr, num, name, arr, author) {
  const paintersGameCard = new PaintersGameCard(authorsArr, num, name, arr, author)
  const paintingsGameCard = new PaintingsGameCard(authorsArr, num, name, arr, author)
  const modal = document.querySelector('.modal')
  const cover = document.querySelector('.cover')

  const audio = new Audio()
  audio.src = win
  let muted = localStorage.getItem('volumeMuted') 
  let volumeLevel = localStorage.getItem('volumeLevel') 
 
  if (volumeLevel) { audio.volume = volumeLevel }
  if (muted === 'Mute') { 
    audio.muted } else { audio.play() }

  cover.classList.remove('invisible');
  modal.classList.remove('invisible');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  let category = localStorage.getItem('category')
  if (category === 'painters') {
    modalContent.innerHTML = paintersGameCard.getPaintersInfo('win', num, author, name)
  } else {
    modalContent.innerHTML = paintingsGameCard.getPaintingsInfo('win', num, author, name)
  }
  
  modal.append(modalContent)
  const modalButton = document.querySelector('.modal-button');
  modalButton.addEventListener('click', () => renderNext(), { once: true })
}

function renderNext() {
  const modal = document.querySelector('.modal')
  const cover = document.querySelector('.cover')
  if (localStorage.getItem('category') === 'painters') {
    const game = document.querySelector('.painters-game')
    const paintersGameList = new PaintersGameList()

    cover.classList.add('invisible');
    modal.classList.add('invisible');
  
    let n = localStorage.getItem('number');
    if ( n < 9 ) {
      localStorage.setItem('number', Number(n)+1)
      let el = document.querySelector('.game-list');
      el.remove();
      const paintersGameList = new PaintersGameList()
      game.append(paintersGameList.element)
    } else {
      paintersGameList.finishGame()
    }
  } else {
    const game = document.querySelector('.paintings-game')
    const paintingsGameList = new PaintingsGameList()

    cover.classList.add('invisible');
    modal.classList.add('invisible');

    let n = localStorage.getItem('number');
    if ( n < 8 ) {
      localStorage.setItem('number', Number(n)+1)
      let el = document.querySelector('.paintings-game-list');
      el.remove();
      const paintingsGameList = new PaintingsGameList()
      game.append(paintingsGameList.element)
  } else {
    paintingsGameList.finishGame()
  }}}