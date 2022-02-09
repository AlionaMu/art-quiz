import { BaseComponent } from './../components/base-component'
import { locationResolver } from './../index'


export class ResultsMenu extends BaseComponent {
  constructor() {
    super('div', ['results-menu']);

    this.element.innerHTML = `
    <div class="results-menu__item" data-name="home">Home</div>
    <div class="results-menu__item" data-name="paintersCategories">Categories</div>
    `;

    this.element.addEventListener('click', (e) => locationResolver(e.target.dataset.name));
  }
}

export class ResultsContent extends BaseComponent {
  constructor() {
    super('div', ['results-content']);

    this.element.innerHTML = `
    <div>RESULT CONTENT</div>
    <div>RESULT WRAPPER</div>
    `;
  }
}

export class Results extends BaseComponent {
  constructor() {
    super('main', ['main', 'results']);

    this.menu = new ResultsMenu()
    this.element.append(this.menu.element)

    this.content = new ResultsContent()
    this.element.append(this.content.element)
  }
}