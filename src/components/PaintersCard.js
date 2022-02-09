import { BaseComponent } from './base-component';


export class PaintersCard extends BaseComponent {
  constructor(i, num) {
    super('div', ['category-card']);

    this.element.innerHTML = `
    <div class="category-text">
      <div class="category-name">${i}</div>
      <div class="category-result">result</div>
      </div>
    <img src="./images/${num}.jpg" class="category-image">
    <img src="./icons/repeat.png" class="category-repeat">
    `;
  }
}
