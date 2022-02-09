import { BaseComponent } from './../components/base-component';
import { PaintersList } from './../pages/PaintersList';
import { locationResolver } from './../index'


export class PaintersMenu extends BaseComponent {
  constructor() {
    super('div', ['categories-menu']);

    this.element.innerHTML = `
    <div class="category-menu__item">Home</div>
    <div class="category-menu__item">Results</div>
    `;

    this.element.addEventListener('click', (e) => this.clickMenu(e));
  }

  clickMenu(e) {
   
    let target = e.target
    console.log('click', target.innerText)
    if (target.innerText === 'Results') {
      locationResolver('results')
    } 
    else { locationResolver('home') }
  }
}

export class PaintersCategories extends BaseComponent {
  constructor() {
    super('main', ['main', 'painters-categories']);

    this.menu = new PaintersMenu()
    this.element.append(this.menu.element)

    this.paintersList = new PaintersList()
    this.element.append(this.paintersList.element)
  }
}
