import { BaseComponent } from './../components/base-component'
import { PaintingsCard } from './../components/PaintingsCard';
import { locationResolver } from './../index'


export class PaintingsList extends BaseComponent {
  constructor() {
    (async () => {
      super('div', ['paintings-list'])

     let set = await this.setCategories()
     this.set = set
     this.element.append(this.set)
       
    this.element.addEventListener('click', (e) => this.setTarget(e))
    this.element.addEventListener('click', () => locationResolver('paintingsGame'))
 
  })();
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  setTarget(e) {
    localStorage.removeItem('number')
    let target = e.target.parentNode.querySelector(".category-name").innerText 
    localStorage.setItem('target', target);

    if (localStorage.getItem('number') === null) {
      localStorage.setItem('number', 0)
    }
    return target
  }

 async setCategories() {
    const res = await fetch('./images.json');
    const categories = await res.json()
    const array = []
    let arr = []
  
    for (let i = 1; i <= (Math.floor(categories.length / 2)); i++) {
     if (arr.length < 9) {
        arr.push(categories[i])
      } else {
      arr.push(categories[i])
      array.push(arr)
 
      arr = []}
    }
    const paintingsCards = array.map((el, index) => new PaintingsCard(index+1, el[0].imageNum))
    paintingsCards.forEach((card) => this.element.append(card.element))
  }

  async setArray() {
    const res = await fetch('./images.json');
    const categories = await res.json();
    const array = []
    let arr = []

    for (let i = 1; i <= (Math.floor(categories.length / 2)); i++) {
     if (arr.length < 9) {
        arr.push(categories[i])
      } else {
      array.push(arr)
      arr = []}
    }
    return array
  }
}