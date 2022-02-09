import { BaseComponent } from './../components/base-component'
import { locationResolver } from './../index'
import setTime from './../utils/setTime'
import setVolume from '../utils/setVolume';



export class SettingsMenu extends BaseComponent {
  constructor() {
    super('div', ['categories-menu']);

    this.element.innerHTML = `
    <div class="category-menu__item">Home</div>
    `;

    this.element.addEventListener('click', () => locationResolver('home'));
  }
}

class VolumeButton extends BaseComponent {
   
  constructor() {
    super('div', ['volume-button']);
    this.muted = (localStorage.getItem('volumeMuted') || 'Medium')
    this.element.innerHTML = `
    <div class="volume icono-volume${this.muted}"></div>
    `;
  }
}

class VolumeSlider extends BaseComponent {
  constructor() {
    super('div', ['volume-slider']);
    this.width = (localStorage.getItem('volumeLevel')*100 || 75 )
    this.element.innerHTML = `
    <div class="volume-percentage" style="width: ${this.width}%"></div>
    `;
    this.element.addEventListener('click', () => setVolume())
  }
}

class VolumeContainer extends BaseComponent {
  constructor() {
    super('div', ['volume-container', 'volume-container-line']);

    this.button = new VolumeButton()
    this.element.append(this.button.element)

    this.slider = new VolumeSlider();
    this.element.append(this.slider.element)
  }
}

class SwitchButton extends BaseComponent {
  constructor() {
    super('label', ['switch']);
    this.isPlay = false
    this.element.innerHTML = `
    <input type="checkbox">
    <span class="slider round"></span>`
  }
}

class SwitchText extends BaseComponent {
  constructor(text) {
    super('div', ['switch__text']);

    this.element.innerHTML = `${text}`
  }
}

class SwitchContainer extends BaseComponent {
  constructor() {
    super('div', ['switch-container']);

    this.text = new SwitchText('Off')
    this.element.append(this.text.element)

    this.button = new SwitchButton()
    this.element.append(this.button.element)

    this.text = new SwitchText('On')
    this.element.append(this.text.element)
  }
}

class SettingsTitle extends BaseComponent {
  constructor(title) {
    super('div', ['settings__title']);
    
    this.element.innerHTML = `${title}`
  }
}

class TimeContainer extends BaseComponent {
  constructor() {
    super('div', ['time-container']);
    
    this.element.innerHTML = `
    <button id="time-minus" class="button_time-minus time-button" type="button">–</button>
    <input type="number" min="5" max="30" value="5" readonly class="time-input" id="time-input">
    <button id="time-plus" class="button_time-plus time-button" type="button">+</button>
    `

    this.element.addEventListener('click', (e) => setTime(e))
  }
}

export class Settings extends BaseComponent {
  constructor() {
    super('main', ['main', 'settings']);

    this.menu = new SettingsMenu()
    this.element.append(this.menu.element)

    this.title = new SettingsTitle('Volume')
    this.element.append(this.title.element)

    this.container = new VolumeContainer()
    this.element.append(this.container.element)

    this.title = new SettingsTitle('Time game')
    this.element.append(this.title.element)

    this.button = new SwitchContainer()
    this.element.append(this.button.element)

    this.title = new SettingsTitle('Time to answer')
    this.element.append(this.title.element)

    this.timeContainer = new TimeContainer()
    this.element.append(this.timeContainer.element)
  }
}