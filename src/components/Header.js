import { BaseComponent } from './base-component';

class SiteTitle extends BaseComponent {

  constructor() {
    super('h1', []);
    this.element.innerHTML = 'art quiz';
    //this.element.addEventListener('click', () => this.renderMainMenu());
  }
}

export class Header extends BaseComponent {

  constructor() {
    super('header', ['header']);

    const siteTitle = new SiteTitle();
    this.element.appendChild(siteTitle.element);
  }
}
