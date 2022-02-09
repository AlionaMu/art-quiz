import { BaseComponent } from '../components/base-component';
import { PaintingsCategories } from '../pages/PaintingsCategories';
import { PaintingsGameCard } from '../components/PaintingsGameCard';
import { PaintingsList } from '../pages/PaintingsList';

import { getRandom } from './../utils/getRandom'
import { locationResolver } from './../index'


export class PaintingsGameMenu extends BaseComponent {
  constructor() {
    super('div', ['categories-menu']);

    this.element.innerHTML = `
    <div class="category-menu__item" data-name="home">Home</div>
    <div class="category-menu__item" data-name="paintingsCategories">Categories</div>
    <div class="category-menu__item" data-name="results">Results</div>
    `;

    this.element.addEventListener('click', (e) => locationResolver(e.target.dataset.name));
  }
}

export class PaintingsGameList extends BaseComponent {
  constructor() {
    (async () => {
      super('div', ['paintings-game-list']);

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
    const paintingsList = await new PaintingsList()
    const array = await paintingsList.setArray()
   
    const arr = getRandom(n)
    const answersArr = arr.map((el) => array[i-1][el])
    
    const imagesArr = answersArr.map((el) => el.imageNum)
    const gameCards = array[i-1].map((el) => new PaintingsGameCard(imagesArr, el.imageNum, el.name, answersArr, el.author))
    this.element.append(gameCards[Number(n)].element)
   
  }

  finishGame() {
    locationResolver('results')
    localStorage.removeItem('number')
    localStorage.removeItem('target')
  }
}

export class PaintingsGame extends BaseComponent {
  constructor() {
    super('main', ['main', 'paintings-game']);

    this.menu = new PaintingsGameMenu()
    this.element.append(this.menu.element)

    this.list = new PaintingsGameList()
    this.element.append(this.list.element)
  }
}