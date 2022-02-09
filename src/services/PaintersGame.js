import { BaseComponent } from '../components/base-component';
import { PaintersCategories } from '../pages/PaintersCategories';
import { PaintersGameCard } from '../components/PaintersGameCard';
import { PaintersList } from '../pages/PaintersList';

import { getRandom } from './../utils/getRandom'
import { locationResolver } from './../index'


export class PaintersGameMenu extends BaseComponent {
  constructor() {
    super('div', ['categories-menu']);

    this.element.innerHTML = `
    <div class="category-menu__item" data-name="home">Home</div>
    <div class="category-menu__item" data-name="paintersCategories">Categories</div>
    <div class="category-menu__item" data-name="results">Results</div>
    `;

    this.element.addEventListener('click', (e) => locationResolver(e.target.dataset.name));
  }
}

export class Question extends BaseComponent {
  constructor() {
    super('div', ['question']);

    this.element.innerHTML = 'Who is the author of this picture?'
  }
}

export class Pagination extends BaseComponent {
  constructor() {
    super('span', ['carousel']);

    this.element.innerHTML = `
    <span class="carousel__item carousel_active"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    <span class="carousel__item"></span>
    `;
  }
}

export class PaintersGameList extends BaseComponent {
  constructor() {
    (async () => {
      super('div', ['game-list']);

     let game = await this.setGame()
     this.game = game
     this.element.append(this.game) 
  })();
  }

  async setGame() {
    let i
    let n
    localStorage.getItem('target') ? i = Number(localStorage.getItem('target')) : i = 1
    localStorage.getItem('number')? n = Number(localStorage.getItem('number')) : n = 0
    const paintersList = await new PaintersList()
    const array = await paintersList.setArray()
    const arr = getRandom(n)
    const answersArr = arr.map((el) => array[i-1][el])
    const authorsArr = answersArr.map((el) => el.author)
    const gameCards = array[i-1].map((el) => new PaintersGameCard(authorsArr, el.imageNum, el.name, answersArr, el.author))
    this.element.append(gameCards[Number(n)].element)
  }

  finishGame() {
    locationResolver('results')
    localStorage.removeItem('number')
    localStorage.removeItem('target')
  }
}

export class PaintersGame extends BaseComponent {
  constructor() {
    super('main', ['main', 'painters-game']);

    this.menu = new PaintersGameMenu()
    this.element.append(this.menu.element)

    this.text = new Question
    this.element.append(this.text.element)

    this.carousel = new Pagination
    this.element.append(this.carousel.element)

    this.list = new PaintersGameList()
    this.element.append(this.list.element)
  }
}