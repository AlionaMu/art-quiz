import { BaseComponent } from './base-component';
import { Modal } from './Modal'
import { answerWrong } from './../utils/answerWrong'
import { answerRight } from './../utils/answerRight'

export class CardContent extends BaseComponent {
  constructor(imagesArr, num, name, arr, author) {
    super('div', ['game-card']);
    this.element.innerHTML = `
      <div class="paintings-question">Какую из картин написал ${author}?</div>
      <div class="paintings-answers-wrapper">
        <img src="./images/${imagesArr[0]}.jpg" data-num="${imagesArr[0]}" class="paintings-answer">
        <img src="./images/${imagesArr[1]}.jpg" data-num="${imagesArr[1]}" class="paintings-answer">
        <img src="./images/${imagesArr[2]}.jpg" data-num="${imagesArr[2]}" class="paintings-answer">
        <img src="./images/${imagesArr[3]}.jpg" data-num="${imagesArr[3]}" class="paintings-answer">
      </div>
      `; 
  }
}

export class PaintingsGameCard extends BaseComponent {
  constructor(authorsArr, num, name, arr, author) {
    super('div', ['game-card']);
    this.one = true;
    
    this.card = new CardContent(authorsArr, num, name, arr, author)
    this.element.append(this.card.element)

    this.modal = new Modal(arr, num, author, name)
    this.element.append(this.modal.element) 

    this.element.addEventListener('click', (e) => this.checkAnswer(e, authorsArr, num, name, arr, author)); 
  }
  
  checkAnswer(e, authorsArr, num, name, arr, author) {
    if (this.one === true) {
    let target = e.target
    if(target.classList.contains('paintings-answer')) {
    if (target.dataset.num === num) {
      target.style.backgroundColor='#32a76e'
      answerRight(authorsArr, num, name, arr, author)
    } else {
      target.style.backgroundColor='#E5A587'
      answerWrong(authorsArr, num, name, arr, author)
    }
    }
    this.one = false
  }
  }

  getPaintingsInfo(state, num, author, name) {
    let content = `
    <img src="./icons/${state}.png" class="modal-icon"></img>
    <img src="./images/${num}.jpg" class="modal-image"></img>
    <div class="modal-name">${name}</div>
    <div class="modal-author">${author}</div>
    <button class="button modal-button">Continue</button>
  `
    return content
  }

  clear() {
    this.element.innerHTML = ''
    return this.element
  }
}
