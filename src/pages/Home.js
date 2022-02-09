import { BaseComponent } from './../components/base-component';
import { locationResolver } from './../index'


class Painters extends BaseComponent {
  constructor() {
    super('a', ['home__link', 'painters']);

    this.element.innerHTML = `
      <div class="home__link__title">художники</div>
    `;

    this.element.addEventListener('click', () => this.click());
  }

  click() {
    locationResolver('paintersCategories')
    localStorage.setItem('category', 'painters')
  }
}

class Paintings extends BaseComponent {
  constructor() {
    super('a', ['home__link', 'paintings']);

    this.element.innerHTML = `
      <div class="home__link__title">картины</div>
    `;

    this.element.addEventListener('click', () => this.click());
  }

  click() {
    locationResolver('paintingsCategories')
    localStorage.setItem('category', 'paintings')
  }
}

class SettingsButton extends BaseComponent {
  constructor() {
    super('button', ['button']);

    this.element.innerHTML = `настройки`;

    this.element.addEventListener('click', () => locationResolver('settings'));
  }
}

export class Home extends BaseComponent {
  constructor() {
    super('main', ['main', 'home']);

    this.painters = new Painters();
    this.element.append(this.painters.element);

    this.paintings = new Paintings();
    this.element.append(this.paintings.element);

    this.button = new SettingsButton();
    this.element.append(this.button.element)

    //this.element.addEventListener('click', () => locationResolver());
  }

  remove() {
    this.element.innerHTML = ''
  }
}
  