import { BaseComponent } from './base-component';
import { Modal } from './Modal'
import { answerWrong } from './../utils/answerWrong'
import { answerRight } from './../utils/answerRight'

export class CardContent extends BaseComponent {
  constructor(authorsArr, num, name, arr, author) {
  //  super('div', ['game-card']);
  super('div', ['game-card']);
    this.element.innerHTML = `
      <img src="./images/${num}.jpg" class="game-image">
      <div class="answers-wrapper">
      <div class="answer" data-num="0">${authorsArr[0]}</div>
      <div class="answer" data-num="1">${authorsArr[1]}</div>
      <div class="answer" data-num="2">${authorsArr[2]}</div>
      <div class="answer" data-num="3">${authorsArr[3]}</div>
      </div>
      `;

      //this.element.addEventListener('click', (e) => this.checkAnswer(e, arr, num, author, name));  
  }
}

export class PaintersGameCard extends BaseComponent {
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
    if(target.classList.contains('answer')) {
    if (target.innerText === author) {
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

  getPaintersInfo(state, num, author, name) {
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
