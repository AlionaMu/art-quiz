/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");


 //const main = document.querySelector('main');

class App {
  constructor(rootElement) {
    this.header = new _components_header__WEBPACK_IMPORTED_MODULE_0__.Header();
    rootElement.append(this.header.element);
    this.main = new _pages_Home__WEBPACK_IMPORTED_MODULE_2__.Home();
    rootElement.append(this.main.element);
    /*this.modal = new Modal();
    this.rootElement.appendChild(this.modal.element);*/

    this.footer = new _components_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer();
    rootElement.append(this.footer.element); //this.rootElement.addEventListener('click', (e) => mainClickHandler(e));
  }

}

/***/ }),

/***/ "./src/components/Cover.js":
/*!*********************************!*\
  !*** ./src/components/Cover.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cover": () => (/* binding */ Cover)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.js");

class Cover extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['cover', 'invisible']);
  }

}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.js");

class Footer extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('footer', ['footer']);
    this.element.innerHTML = `
    <a class="github" href="https://github.com/AlionaMu" target="_blank" rel="noopener noreferrer"></a>
    <span class="year">2021</span>
    <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener">
      <span class="rss-year">'21</span>
    </a>
    `;
  }

}

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");

class Modal extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['modal', 'invisible']);
  }

}

/***/ }),

/***/ "./src/components/PaintersCard.js":
/*!****************************************!*\
  !*** ./src/components/PaintersCard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintersCard": () => (/* binding */ PaintersCard)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.js");

class PaintersCard extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
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

/***/ }),

/***/ "./src/components/PaintersGameCard.js":
/*!********************************************!*\
  !*** ./src/components/PaintersGameCard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardContent": () => (/* binding */ CardContent),
/* harmony export */   "PaintersGameCard": () => (/* binding */ PaintersGameCard)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.js");
/* harmony import */ var _utils_answerWrong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/answerWrong */ "./src/utils/answerWrong.js");
/* harmony import */ var _utils_answerRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/answerRight */ "./src/utils/answerRight.js");




class CardContent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
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
      `; //this.element.addEventListener('click', (e) => this.checkAnswer(e, arr, num, author, name));  
  }

}
class PaintersGameCard extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(authorsArr, num, name, arr, author) {
    super('div', ['game-card']);
    this.one = true;
    this.card = new CardContent(authorsArr, num, name, arr, author);
    this.element.append(this.card.element);
    this.modal = new _Modal__WEBPACK_IMPORTED_MODULE_1__.Modal(arr, num, author, name);
    this.element.append(this.modal.element);
    this.element.addEventListener('click', e => this.checkAnswer(e, authorsArr, num, name, arr, author));
  }

  checkAnswer(e, authorsArr, num, name, arr, author) {
    if (this.one === true) {
      let target = e.target;

      if (target.classList.contains('answer')) {
        if (target.innerText === author) {
          target.style.backgroundColor = '#32a76e';
          (0,_utils_answerRight__WEBPACK_IMPORTED_MODULE_3__.answerRight)(authorsArr, num, name, arr, author);
        } else {
          target.style.backgroundColor = '#E5A587';
          (0,_utils_answerWrong__WEBPACK_IMPORTED_MODULE_2__.answerWrong)(authorsArr, num, name, arr, author);
        }
      }

      this.one = false;
    }
  }

  getPaintersInfo(state, num, author, name) {
    let content = `
    <img src="./icons/${state}.png" class="modal-icon"></img>
    <img src="./images/${num}.jpg" class="modal-image"></img>
    <div class="modal-name">${name}</div>
    <div class="modal-author">${author}</div>
    <button class="button modal-button">Continue</button>
  `;
    return content;
  }

  clear() {
    this.element.innerHTML = '';
    return this.element;
  }

}

/***/ }),

/***/ "./src/components/PaintingsCard.js":
/*!*****************************************!*\
  !*** ./src/components/PaintingsCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintingsCard": () => (/* binding */ PaintingsCard)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.js");

class PaintingsCard extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
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

/***/ }),

/***/ "./src/components/PaintingsGameCard.js":
/*!*********************************************!*\
  !*** ./src/components/PaintingsGameCard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardContent": () => (/* binding */ CardContent),
/* harmony export */   "PaintingsGameCard": () => (/* binding */ PaintingsGameCard)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.js");
/* harmony import */ var _utils_answerWrong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/answerWrong */ "./src/utils/answerWrong.js");
/* harmony import */ var _utils_answerRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/answerRight */ "./src/utils/answerRight.js");




class CardContent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(imagesArr, num, name, arr, author) {
    super('div', ['game-card']);
    this.element.innerHTML = `
      <div class="paintings-question">Какую из картин написал ${author}?</div>
      <div class="paintings-answers-wrapper">
        <img src="./images/${imagesArr[0]}.jpg" data-num="${imagesArr[0]}" class="paintings-answer">
        <img src="./images/${imagesArr[1]}.jpg" data-num="${imagesArr[1]}" class="paintings-answer">
        <img src="./images/${imagesArr[2]}.jpg" data-num="${imagesArr[2]}" class="paintings-answer">
        <img src="./images/${imagesArr[3]}.jpg" data-num="${imagesArr[3]}" class="paintings-answer">
      </div>
      `;
  }

}
class PaintingsGameCard extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(authorsArr, num, name, arr, author) {
    super('div', ['game-card']);
    this.one = true;
    this.card = new CardContent(authorsArr, num, name, arr, author);
    this.element.append(this.card.element);
    this.modal = new _Modal__WEBPACK_IMPORTED_MODULE_1__.Modal(arr, num, author, name);
    this.element.append(this.modal.element);
    this.element.addEventListener('click', e => this.checkAnswer(e, authorsArr, num, name, arr, author));
  }

  checkAnswer(e, authorsArr, num, name, arr, author) {
    if (this.one === true) {
      let target = e.target;

      if (target.classList.contains('paintings-answer')) {
        if (target.dataset.num === num) {
          target.style.backgroundColor = '#32a76e';
          (0,_utils_answerRight__WEBPACK_IMPORTED_MODULE_3__.answerRight)(authorsArr, num, name, arr, author);
        } else {
          target.style.backgroundColor = '#E5A587';
          (0,_utils_answerWrong__WEBPACK_IMPORTED_MODULE_2__.answerWrong)(authorsArr, num, name, arr, author);
        }
      }

      this.one = false;
    }
  }

  getPaintingsInfo(state, num, author, name) {
    let content = `
    <img src="./icons/${state}.png" class="modal-icon"></img>
    <img src="./images/${num}.jpg" class="modal-image"></img>
    <div class="modal-name">${name}</div>
    <div class="modal-author">${author}</div>
    <button class="button modal-button">Continue</button>
  `;
    return content;
  }

  clear() {
    this.element.innerHTML = '';
    return this.element;
  }

}

/***/ }),

/***/ "./src/components/base-component.js":
/*!******************************************!*\
  !*** ./src/components/base-component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
class BaseComponent {
  constructor(tag = 'div', styles) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }

}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.js");


class SiteTitle extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('h1', []);
    this.element.innerHTML = 'art quiz'; //this.element.addEventListener('click', () => this.renderMainMenu());
  }

}

class Header extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('header', ['header']);
    const siteTitle = new SiteTitle();
    this.element.appendChild(siteTitle.element);
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationResolver": () => (/* binding */ locationResolver)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _pages_PaintersCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/PaintersCategories */ "./src/pages/PaintersCategories.js");
/* harmony import */ var _pages_PaintingsCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/PaintingsCategories */ "./src/pages/PaintingsCategories.js");
/* harmony import */ var _services_PaintersGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/PaintersGame */ "./src/services/PaintersGame.js");
/* harmony import */ var _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/PaintingsGame */ "./src/services/PaintingsGame.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Settings */ "./src/pages/Settings.js");
/* harmony import */ var _pages_Results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Results */ "./src/pages/Results.js");
/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Home.js */ "./src/pages/Home.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Footer.js */ "./src/components/Footer.js");
/* harmony import */ var _components_Cover_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Cover.js */ "./src/components/Cover.js");











const appElement = document.getElementById('app');
const locationResolver = (location, elem) => {
  const home = new _pages_Home_js__WEBPACK_IMPORTED_MODULE_8__.Home();
  const settings = new _pages_Settings__WEBPACK_IMPORTED_MODULE_6__.Settings();
  const results = new _pages_Results__WEBPACK_IMPORTED_MODULE_7__.Results();
  const paintersCategories = new _pages_PaintersCategories__WEBPACK_IMPORTED_MODULE_2__.PaintersCategories();
  const paintingsCategories = new _pages_PaintingsCategories__WEBPACK_IMPORTED_MODULE_3__.PaintingsCategories();
  const paintersGame = new _services_PaintersGame__WEBPACK_IMPORTED_MODULE_4__.PaintersGame();
  const paintingsGame = new _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_5__.PaintingsGame();
  const main = document.querySelector('main');
  const footerEl = document.querySelector('footer');
  const footer = new _components_Footer_js__WEBPACK_IMPORTED_MODULE_9__.Footer();
  const cover = new _components_Cover_js__WEBPACK_IMPORTED_MODULE_10__.Cover();
  appElement.removeChild(main);
  appElement.removeChild(footerEl);

  switch (location) {
    case 'home':
      appElement.appendChild(home.element);
      break;

    case 'settings':
      appElement.appendChild(settings.element);
      break;

    case 'paintersCategories':
      appElement.appendChild(paintersCategories.element);
      break;

    case 'paintingsCategories':
      appElement.appendChild(paintingsCategories.element);
      break;

    case 'paintersGame':
      appElement.appendChild(paintersGame.element);
      break;

    case 'paintingsGame':
      appElement.appendChild(paintingsGame.element);
      break;

    case 'results':
      appElement.appendChild(results.element);
      break;
  }

  appElement.appendChild(footer.element);
  appElement.appendChild(cover.element);
};

const initApp = () => {
  if (!appElement) throw Error('App root element not found');
  new _app__WEBPACK_IMPORTED_MODULE_1__.App(appElement);
  localStorage.setItem('time', '5');
};

window.addEventListener('load', () => initApp());

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../index */ "./src/index.js");



class Painters extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('a', ['home__link', 'painters']);
    this.element.innerHTML = `
      <div class="home__link__title">художники</div>
    `;
    this.element.addEventListener('click', () => this.click());
  }

  click() {
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationResolver)('paintersCategories');
    localStorage.setItem('category', 'painters');
  }

}

class Paintings extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('a', ['home__link', 'paintings']);
    this.element.innerHTML = `
      <div class="home__link__title">картины</div>
    `;
    this.element.addEventListener('click', () => this.click());
  }

  click() {
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationResolver)('paintingsCategories');
    localStorage.setItem('category', 'paintings');
  }

}

class SettingsButton extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('button', ['button']);
    this.element.innerHTML = `настройки`;
    this.element.addEventListener('click', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationResolver)('settings'));
  }

}

class Home extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('main', ['main', 'home']);
    this.painters = new Painters();
    this.element.append(this.painters.element);
    this.paintings = new Paintings();
    this.element.append(this.paintings.element);
    this.button = new SettingsButton();
    this.element.append(this.button.element); //this.element.addEventListener('click', () => locationResolver());
  }

  remove() {
    this.element.innerHTML = '';
  }

}

/***/ }),

/***/ "./src/pages/PaintersCategories.js":
/*!*****************************************!*\
  !*** ./src/pages/PaintersCategories.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintersMenu": () => (/* binding */ PaintersMenu),
/* harmony export */   "PaintersCategories": () => (/* binding */ PaintersCategories)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _pages_PaintersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pages/PaintersList */ "./src/pages/PaintersList.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../index */ "./src/index.js");



class PaintersMenu extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['categories-menu']);
    this.element.innerHTML = `
    <div class="category-menu__item">Home</div>
    <div class="category-menu__item">Results</div>
    `;
    this.element.addEventListener('click', e => this.clickMenu(e));
  }

  clickMenu(e) {
    let target = e.target;
    console.log('click', target.innerText);

    if (target.innerText === 'Results') {
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.locationResolver)('results');
    } else {
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.locationResolver)('home');
    }
  }

}
class PaintersCategories extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('main', ['main', 'painters-categories']);
    this.menu = new PaintersMenu();
    this.element.append(this.menu.element);
    this.paintersList = new _pages_PaintersList__WEBPACK_IMPORTED_MODULE_1__.PaintersList();
    this.element.append(this.paintersList.element);
  }

}

/***/ }),

/***/ "./src/pages/PaintersList.js":
/*!***********************************!*\
  !*** ./src/pages/PaintersList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintersList": () => (/* binding */ PaintersList)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _components_PaintersCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/PaintersCard */ "./src/components/PaintersCard.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../index */ "./src/index.js");



class PaintersList extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    (async () => {
      super('div', ['painters-list']);
      let set = await this.setCategories();
      this.set = set;
      this.element.append(this.set);
      this.element.addEventListener('click', e => this.setTarget(e));
      this.element.addEventListener('click', () => (0,_index__WEBPACK_IMPORTED_MODULE_2__.locationResolver)('paintersGame'));
    })();
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  setTarget(e) {
    localStorage.removeItem('number');
    let target = e.target.parentNode.querySelector(".category-name").innerText;
    localStorage.setItem('target', target);
    console.log('localStorage.getItem, number', localStorage.getItem('number'));

    if (localStorage.getItem('number') === null) {
      localStorage.setItem('number', 0);
    }

    return target;
  }

  async setCategories() {
    const res = await fetch('./images.json');
    const categories = await res.json();
    const array = [];
    let arr = [];

    for (let i = 1; i <= Math.floor(categories.length / 2); i++) {
      if (arr.length < 9) {
        arr.push(categories[i]);
      } else {
        arr.push(categories[i]);
        array.push(arr);
        arr = [];
      }
    }

    const paintersCards = array.map((el, index) => new _components_PaintersCard__WEBPACK_IMPORTED_MODULE_1__.PaintersCard(index + 1, el[0].imageNum)); //console.log('ppppp', paintersCards)

    paintersCards.forEach(card => this.element.append(card.element));
  }

  async setArray() {
    const res = await fetch('./images.json');
    const categories = await res.json();
    const array = [];
    let arr = [];

    for (let i = 1; i <= Math.floor(categories.length / 2); i++) {
      if (arr.length < 9) {
        arr.push(categories[i]);
      } else {
        arr.push(categories[i]);
        array.push(arr);
        arr = [];
      }
    }

    return array;
  }

}

/***/ }),

/***/ "./src/pages/PaintingsCategories.js":
/*!******************************************!*\
  !*** ./src/pages/PaintingsCategories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintingsMenu": () => (/* binding */ PaintingsMenu),
/* harmony export */   "PaintingsCategories": () => (/* binding */ PaintingsCategories)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _pages_PaintingsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pages/PaintingsList */ "./src/pages/PaintingsList.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../index */ "./src/index.js");



class PaintingsMenu extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['categories-menu']);
    this.element.innerHTML = `
    <div class="category-menu__item">Home</div>
    <div class="category-menu__item">Results</div>
    `;
    this.element.addEventListener('click', e => this.clickMenu(e));
  }

  clickMenu(e) {
    let target = e.target;
    console.log('click', target.innerText);

    if (target.innerText === 'Results') {
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.locationResolver)('results');
    } else {
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.locationResolver)('home');
    }
  }

}
class PaintingsCategories extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('main', ['main', 'paintings-categories']);
    this.menu = new PaintingsMenu();
    this.element.append(this.menu.element);
    this.paintersList = new _pages_PaintingsList__WEBPACK_IMPORTED_MODULE_1__.PaintingsList();
    this.element.append(this.paintersList.element);
  }

}

/***/ }),

/***/ "./src/pages/PaintingsList.js":
/*!************************************!*\
  !*** ./src/pages/PaintingsList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintingsList": () => (/* binding */ PaintingsList)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _components_PaintingsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/PaintingsCard */ "./src/components/PaintingsCard.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../index */ "./src/index.js");



class PaintingsList extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    (async () => {
      super('div', ['paintings-list']);
      let set = await this.setCategories();
      this.set = set;
      this.element.append(this.set);
      this.element.addEventListener('click', e => this.setTarget(e));
      this.element.addEventListener('click', () => (0,_index__WEBPACK_IMPORTED_MODULE_2__.locationResolver)('paintingsGame'));
    })();
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  setTarget(e) {
    localStorage.removeItem('number');
    let target = e.target.parentNode.querySelector(".category-name").innerText;
    localStorage.setItem('target', target);

    if (localStorage.getItem('number') === null) {
      localStorage.setItem('number', 0);
    }

    return target;
  }

  async setCategories() {
    const res = await fetch('./images.json');
    const categories = await res.json();
    const array = [];
    let arr = [];

    for (let i = 1; i <= Math.floor(categories.length / 2); i++) {
      if (arr.length < 9) {
        arr.push(categories[i]);
      } else {
        arr.push(categories[i]);
        array.push(arr);
        arr = [];
      }
    }

    const paintingsCards = array.map((el, index) => new _components_PaintingsCard__WEBPACK_IMPORTED_MODULE_1__.PaintingsCard(index + 1, el[0].imageNum));
    paintingsCards.forEach(card => this.element.append(card.element));
  }

  async setArray() {
    const res = await fetch('./images.json');
    const categories = await res.json();
    const array = [];
    let arr = [];

    for (let i = 1; i <= Math.floor(categories.length / 2); i++) {
      if (arr.length < 9) {
        arr.push(categories[i]);
      } else {
        array.push(arr);
        arr = [];
      }
    }

    return array;
  }

}

/***/ }),

/***/ "./src/pages/Results.js":
/*!******************************!*\
  !*** ./src/pages/Results.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsMenu": () => (/* binding */ ResultsMenu),
/* harmony export */   "ResultsContent": () => (/* binding */ ResultsContent),
/* harmony export */   "Results": () => (/* binding */ Results)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../index */ "./src/index.js");


class ResultsMenu extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['results-menu']);
    this.element.innerHTML = `
    <div class="results-menu__item" data-name="home">Home</div>
    <div class="results-menu__item" data-name="paintersCategories">Categories</div>
    `;
    this.element.addEventListener('click', e => (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationResolver)(e.target.dataset.name));
  }

}
class ResultsContent extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['results-content']);
    this.element.innerHTML = `
    <div>RESULT CONTENT</div>
    <div>RESULT WRAPPER</div>
    `;
  }

}
class Results extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('main', ['main', 'results']);
    this.menu = new ResultsMenu();
    this.element.append(this.menu.element);
    this.content = new ResultsContent();
    this.element.append(this.content.element);
  }

}

/***/ }),

/***/ "./src/pages/Settings.js":
/*!*******************************!*\
  !*** ./src/pages/Settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsMenu": () => (/* binding */ SettingsMenu),
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../index */ "./src/index.js");
/* harmony import */ var _utils_setTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/setTime */ "./src/utils/setTime.js");
/* harmony import */ var _utils_setVolume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/setVolume */ "./src/utils/setVolume.js");




class SettingsMenu extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['categories-menu']);
    this.element.innerHTML = `
    <div class="category-menu__item">Home</div>
    `;
    this.element.addEventListener('click', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.locationResolver)('home'));
  }

}

class VolumeButton extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['volume-button']);
    this.muted = localStorage.getItem('volumeMuted') || 'Medium';
    this.element.innerHTML = `
    <div class="volume icono-volume${this.muted}"></div>
    `;
  }

}

class VolumeSlider extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['volume-slider']);
    this.width = localStorage.getItem('volumeLevel') * 100 || 75;
    this.element.innerHTML = `
    <div class="volume-percentage" style="width: ${this.width}%"></div>
    `;
    this.element.addEventListener('click', () => (0,_utils_setVolume__WEBPACK_IMPORTED_MODULE_3__["default"])());
  }

}

class VolumeContainer extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['volume-container', 'volume-container-line']);
    this.button = new VolumeButton();
    this.element.append(this.button.element);
    this.slider = new VolumeSlider();
    this.element.append(this.slider.element);
  }

}

class SwitchButton extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('label', ['switch']);
    this.isPlay = false;
    this.element.innerHTML = `
    <input type="checkbox">
    <span class="slider round"></span>`;
  }

}

class SwitchText extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(text) {
    super('div', ['switch__text']);
    this.element.innerHTML = `${text}`;
  }

}

class SwitchContainer extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['switch-container']);
    this.text = new SwitchText('Off');
    this.element.append(this.text.element);
    this.button = new SwitchButton();
    this.element.append(this.button.element);
    this.text = new SwitchText('On');
    this.element.append(this.text.element);
  }

}

class SettingsTitle extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(title) {
    super('div', ['settings__title']);
    this.element.innerHTML = `${title}`;
  }

}

class TimeContainer extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['time-container']);
    this.element.innerHTML = `
    <button id="time-minus" class="button_time-minus time-button" type="button">–</button>
    <input type="number" min="5" max="30" value="5" readonly class="time-input" id="time-input">
    <button id="time-plus" class="button_time-plus time-button" type="button">+</button>
    `;
    this.element.addEventListener('click', e => (0,_utils_setTime__WEBPACK_IMPORTED_MODULE_2__["default"])(e));
  }

}

class Settings extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('main', ['main', 'settings']);
    this.menu = new SettingsMenu();
    this.element.append(this.menu.element);
    this.title = new SettingsTitle('Volume');
    this.element.append(this.title.element);
    this.container = new VolumeContainer();
    this.element.append(this.container.element);
    this.title = new SettingsTitle('Time game');
    this.element.append(this.title.element);
    this.button = new SwitchContainer();
    this.element.append(this.button.element);
    this.title = new SettingsTitle('Time to answer');
    this.element.append(this.title.element);
    this.timeContainer = new TimeContainer();
    this.element.append(this.timeContainer.element);
  }

}

/***/ }),

/***/ "./src/services/PaintersGame.js":
/*!**************************************!*\
  !*** ./src/services/PaintersGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintersGameMenu": () => (/* binding */ PaintersGameMenu),
/* harmony export */   "Question": () => (/* binding */ Question),
/* harmony export */   "Pagination": () => (/* binding */ Pagination),
/* harmony export */   "PaintersGameList": () => (/* binding */ PaintersGameList),
/* harmony export */   "PaintersGame": () => (/* binding */ PaintersGame)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _pages_PaintersCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/PaintersCategories */ "./src/pages/PaintersCategories.js");
/* harmony import */ var _components_PaintersGameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PaintersGameCard */ "./src/components/PaintersGameCard.js");
/* harmony import */ var _pages_PaintersList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/PaintersList */ "./src/pages/PaintersList.js");
/* harmony import */ var _utils_getRandom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/getRandom */ "./src/utils/getRandom.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../index */ "./src/index.js");






class PaintersGameMenu extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['categories-menu']);
    this.element.innerHTML = `
    <div class="category-menu__item" data-name="home">Home</div>
    <div class="category-menu__item" data-name="paintersCategories">Categories</div>
    <div class="category-menu__item" data-name="results">Results</div>
    `;
    this.element.addEventListener('click', e => (0,_index__WEBPACK_IMPORTED_MODULE_5__.locationResolver)(e.target.dataset.name));
  }

}
class Question extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['question']);
    this.element.innerHTML = 'Who is the author of this picture?';
  }

}
class Pagination extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
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
class PaintersGameList extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    (async () => {
      super('div', ['game-list']);
      let game = await this.setGame();
      this.game = game;
      this.element.append(this.game);
    })();
  }

  async setGame() {
    let i;
    let n;
    localStorage.getItem('target') ? i = Number(localStorage.getItem('target')) : i = 1;
    localStorage.getItem('number') ? n = Number(localStorage.getItem('number')) : n = 0;
    const paintersList = await new _pages_PaintersList__WEBPACK_IMPORTED_MODULE_3__.PaintersList();
    const array = await paintersList.setArray();
    const arr = (0,_utils_getRandom__WEBPACK_IMPORTED_MODULE_4__.getRandom)(n);
    const answersArr = arr.map(el => array[i - 1][el]);
    const authorsArr = answersArr.map(el => el.author);
    const gameCards = array[i - 1].map(el => new _components_PaintersGameCard__WEBPACK_IMPORTED_MODULE_2__.PaintersGameCard(authorsArr, el.imageNum, el.name, answersArr, el.author));
    this.element.append(gameCards[Number(n)].element);
  }

  finishGame() {
    (0,_index__WEBPACK_IMPORTED_MODULE_5__.locationResolver)('results');
    localStorage.removeItem('number');
    localStorage.removeItem('target');
  }

}
class PaintersGame extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('main', ['main', 'painters-game']);
    this.menu = new PaintersGameMenu();
    this.element.append(this.menu.element);
    this.text = new Question();
    this.element.append(this.text.element);
    this.carousel = new Pagination();
    this.element.append(this.carousel.element);
    this.list = new PaintersGameList();
    this.element.append(this.list.element);
  }

}

/***/ }),

/***/ "./src/services/PaintingsGame.js":
/*!***************************************!*\
  !*** ./src/services/PaintingsGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaintingsGameMenu": () => (/* binding */ PaintingsGameMenu),
/* harmony export */   "PaintingsGameList": () => (/* binding */ PaintingsGameList),
/* harmony export */   "PaintingsGame": () => (/* binding */ PaintingsGame)
/* harmony export */ });
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-component */ "./src/components/base-component.js");
/* harmony import */ var _pages_PaintingsCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/PaintingsCategories */ "./src/pages/PaintingsCategories.js");
/* harmony import */ var _components_PaintingsGameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PaintingsGameCard */ "./src/components/PaintingsGameCard.js");
/* harmony import */ var _pages_PaintingsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/PaintingsList */ "./src/pages/PaintingsList.js");
/* harmony import */ var _utils_getRandom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/getRandom */ "./src/utils/getRandom.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../index */ "./src/index.js");






class PaintingsGameMenu extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('div', ['categories-menu']);
    this.element.innerHTML = `
    <div class="category-menu__item" data-name="home">Home</div>
    <div class="category-menu__item" data-name="paintingsCategories">Categories</div>
    <div class="category-menu__item" data-name="results">Results</div>
    `;
    this.element.addEventListener('click', e => (0,_index__WEBPACK_IMPORTED_MODULE_5__.locationResolver)(e.target.dataset.name));
  }

}
class PaintingsGameList extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    (async () => {
      super('div', ['paintings-game-list']);
      let game = await this.setGame();
      this.game = game;
      this.element.append(this.game);
    })();
  }

  async setGame() {
    let i;
    let n;
    localStorage.getItem('target') ? i = Number(localStorage.getItem('target')) : i = 1;
    localStorage.getItem('number') ? n = Number(localStorage.getItem('number')) : n = 0;
    const paintingsList = await new _pages_PaintingsList__WEBPACK_IMPORTED_MODULE_3__.PaintingsList();
    const array = await paintingsList.setArray();
    const arr = (0,_utils_getRandom__WEBPACK_IMPORTED_MODULE_4__.getRandom)(n);
    const answersArr = arr.map(el => array[i - 1][el]);
    const imagesArr = answersArr.map(el => el.imageNum);
    const gameCards = array[i - 1].map(el => new _components_PaintingsGameCard__WEBPACK_IMPORTED_MODULE_2__.PaintingsGameCard(imagesArr, el.imageNum, el.name, answersArr, el.author));
    this.element.append(gameCards[Number(n)].element);
  }

  finishGame() {
    (0,_index__WEBPACK_IMPORTED_MODULE_5__.locationResolver)('results');
    localStorage.removeItem('number');
    localStorage.removeItem('target');
  }

}
class PaintingsGame extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor() {
    super('main', ['main', 'paintings-game']);
    this.menu = new PaintingsGameMenu();
    this.element.append(this.menu.element);
    this.list = new PaintingsGameList();
    this.element.append(this.list.element);
  }

}

/***/ }),

/***/ "./src/utils/answerRight.js":
/*!**********************************!*\
  !*** ./src/utils/answerRight.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answerRight": () => (/* binding */ answerRight)
/* harmony export */ });
/* harmony import */ var _components_PaintersGameCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PaintersGameCard */ "./src/components/PaintersGameCard.js");
/* harmony import */ var _services_PaintersGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/PaintersGame */ "./src/services/PaintersGame.js");
/* harmony import */ var _components_PaintingsGameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PaintingsGameCard */ "./src/components/PaintingsGameCard.js");
/* harmony import */ var _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/PaintingsGame */ "./src/services/PaintingsGame.js");
/* harmony import */ var _assets_audio_win_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/audio/win.wav */ "./src/assets/audio/win.wav");





function answerRight(authorsArr, num, name, arr, author) {
  const paintersGameCard = new _components_PaintersGameCard__WEBPACK_IMPORTED_MODULE_0__.PaintersGameCard(authorsArr, num, name, arr, author);
  const paintingsGameCard = new _components_PaintingsGameCard__WEBPACK_IMPORTED_MODULE_2__.PaintingsGameCard(authorsArr, num, name, arr, author);
  const modal = document.querySelector('.modal');
  const cover = document.querySelector('.cover');
  const audio = new Audio();
  audio.src = _assets_audio_win_wav__WEBPACK_IMPORTED_MODULE_4__;
  let muted = localStorage.getItem('volumeMuted');
  let volumeLevel = localStorage.getItem('volumeLevel');

  if (volumeLevel) {
    audio.volume = volumeLevel;
  }

  if (muted === 'Mute') {
    audio.muted;
  } else {
    audio.play();
  }

  cover.classList.remove('invisible');
  modal.classList.remove('invisible');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  let category = localStorage.getItem('category');

  if (category === 'painters') {
    modalContent.innerHTML = paintersGameCard.getPaintersInfo('win', num, author, name);
  } else {
    modalContent.innerHTML = paintingsGameCard.getPaintingsInfo('win', num, author, name);
  }

  modal.append(modalContent);
  const modalButton = document.querySelector('.modal-button');
  modalButton.addEventListener('click', () => renderNext(), {
    once: true
  });
}

function renderNext() {
  const modal = document.querySelector('.modal');
  const cover = document.querySelector('.cover');

  if (localStorage.getItem('category') === 'painters') {
    const game = document.querySelector('.painters-game');
    const paintersGameList = new _services_PaintersGame__WEBPACK_IMPORTED_MODULE_1__.PaintersGameList();
    cover.classList.add('invisible');
    modal.classList.add('invisible');
    let n = localStorage.getItem('number');

    if (n < 9) {
      localStorage.setItem('number', Number(n) + 1);
      let el = document.querySelector('.game-list');
      el.remove();
      const paintersGameList = new _services_PaintersGame__WEBPACK_IMPORTED_MODULE_1__.PaintersGameList();
      game.append(paintersGameList.element);
    } else {
      paintersGameList.finishGame();
    }
  } else {
    const game = document.querySelector('.paintings-game');
    const paintingsGameList = new _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_3__.PaintingsGameList();
    cover.classList.add('invisible');
    modal.classList.add('invisible');
    let n = localStorage.getItem('number');

    if (n < 8) {
      localStorage.setItem('number', Number(n) + 1);
      let el = document.querySelector('.paintings-game-list');
      el.remove();
      const paintingsGameList = new _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_3__.PaintingsGameList();
      game.append(paintingsGameList.element);
    } else {
      paintingsGameList.finishGame();
    }
  }
}

/***/ }),

/***/ "./src/utils/answerWrong.js":
/*!**********************************!*\
  !*** ./src/utils/answerWrong.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answerWrong": () => (/* binding */ answerWrong)
/* harmony export */ });
/* harmony import */ var _components_PaintersGameCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PaintersGameCard */ "./src/components/PaintersGameCard.js");
/* harmony import */ var _services_PaintersGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/PaintersGame */ "./src/services/PaintersGame.js");
/* harmony import */ var _components_PaintingsGameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PaintingsGameCard */ "./src/components/PaintingsGameCard.js");
/* harmony import */ var _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/PaintingsGame */ "./src/services/PaintingsGame.js");
/* harmony import */ var _assets_audio_lose_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/audio/lose.wav */ "./src/assets/audio/lose.wav");





function answerWrong(authorsArr, num, name, arr, author) {
  const paintersGameCard = new _components_PaintersGameCard__WEBPACK_IMPORTED_MODULE_0__.PaintersGameCard(authorsArr, num, name, arr, author);
  const paintingsGameCard = new _components_PaintingsGameCard__WEBPACK_IMPORTED_MODULE_2__.PaintingsGameCard(authorsArr, num, name, arr, author);
  const modal = document.querySelector('.modal');
  const cover = document.querySelector('.cover');
  const audio = new Audio();
  let muted = localStorage.getItem('volumeMuted');
  let volumeLevel = localStorage.getItem('volumeLevel');
  audio.src = _assets_audio_lose_wav__WEBPACK_IMPORTED_MODULE_4__;

  if (volumeLevel) {
    audio.volume = volumeLevel;
  }

  if (muted === 'Mute') {
    audio.muted;
  } else {
    audio.play();
  }

  cover.classList.remove('invisible');
  modal.classList.remove('invisible');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  let category = localStorage.getItem('category');

  if (category === 'painters') {
    modalContent.innerHTML = paintersGameCard.getPaintersInfo('lose', num, author, name);
  } else {
    modalContent.innerHTML = paintingsGameCard.getPaintingsInfo('lose', num, author, name);
  }

  modal.append(modalContent);
  const modalButton = document.querySelector('.modal-button');
  modalButton.addEventListener('click', () => renderNext(), {
    once: true
  });
}

function renderNext() {
  const modal = document.querySelector('.modal');
  const cover = document.querySelector('.cover');

  if (localStorage.getItem('category') === 'painters') {
    const game = document.querySelector('.painters-game');
    const paintersGameList = new _services_PaintersGame__WEBPACK_IMPORTED_MODULE_1__.PaintersGameList();
    cover.classList.add('invisible');
    modal.classList.add('invisible');
    let n = localStorage.getItem('number');

    if (n < 9) {
      localStorage.setItem('number', Number(n) + 1);
      let el = document.querySelector('.game-list');
      el.remove();
      const paintersGameList = new _services_PaintersGame__WEBPACK_IMPORTED_MODULE_1__.PaintersGameList();
      game.append(paintersGameList.element);
    } else {
      paintersGameList.finishGame();
    }
  } else {
    const game = document.querySelector('.paintings-game');
    const paintingsGameList = new _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_3__.PaintingsGameList();
    cover.classList.add('invisible');
    modal.classList.add('invisible');
    let n = localStorage.getItem('number');

    if (n < 8) {
      localStorage.setItem('number', Number(n) + 1);
      let el = document.querySelector('.paintings-game-list');
      el.remove();
      const paintingsGameList = new _services_PaintingsGame__WEBPACK_IMPORTED_MODULE_3__.PaintingsGameList();
      game.append(paintingsGameList.element);
    } else {
      paintingsGameList.finishGame();
    }
  }
}

/***/ }),

/***/ "./src/utils/getRandom.js":
/*!********************************!*\
  !*** ./src/utils/getRandom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandom": () => (/* binding */ getRandom)
/* harmony export */ });
function getRandom(answer) {
  let arr = [answer];

  while (arr.length < 4) {
    let r = Math.floor(Math.random() * 8) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

/***/ }),

/***/ "./src/utils/setTime.js":
/*!******************************!*\
  !*** ./src/utils/setTime.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTime)
/* harmony export */ });
function setTime(e) {
  const timeInput = document.getElementById('time-input');
  let time = localStorage.getItem('time');
  let target = e.target;

  if (target.id === 'time-minus') {
    if (time === '5') {
      return false;
    } else {
      time = Number(time) - 5;
      localStorage.setItem('time', time);
    }
  }

  if (target.id === 'time-plus') {
    if (time === '30') {
      return false;
    } else {
      time = Number(time) + 5;
      localStorage.setItem('time', time);
    }
  }

  timeInput.value = time;
}

/***/ }),

/***/ "./src/utils/setVolume.js":
/*!********************************!*\
  !*** ./src/utils/setVolume.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setVolume)
/* harmony export */ });
function setVolume() {
  const volumeButton = document.querySelector(".volume-button");
  const volumeSlider = document.querySelector(".volume-slider");
  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    localStorage.setItem('volumeLevel', newVolume);
    document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
  }, true);
  volumeButton.addEventListener("click", () => {
    const volumeEl = document.querySelector(".volume-container .volume");
    let muted = localStorage.getItem('volumeMuted');

    if (muted) {
      if (muted === 'Mute') {
        localStorage.setItem('volumeMuted', 'Medium');
      } else {
        localStorage.setItem('volumeMuted', 'Mute');
      }
    } else {
      localStorage.setItem('volumeMuted', 'Mute');
    }

    if (muted === 'Medium') {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  }, true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Arial-MT.woff */ "./src/assets/fonts/Arial-MT.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Roboto-Thin.ttf */ "./src/assets/fonts/Roboto-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/img/1.jpg */ "./src/assets/images/img/1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/img/2.jpg */ "./src/assets/images/img/2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/icons/github.svg */ "./src/assets/icons/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/icons/rss.svg */ "./src/assets/icons/rss.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Arial-MT\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* Путь к файлу со шрифтом */\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  /* Путь к файлу со шрифтом */\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  text-align: center;\n  background-color: #A4D0BB;\n}\n\n@media (min-width: 1100px) {\n  body {\n    margin: 0 20vw;\n  }\n}\n@media (min-width: 800px) {\n  body {\n    margin: 0 15vw;\n  }\n}\n.header {\n  padding: 20px;\n  color: #79A1B0;\n  text-transform: uppercase;\n}\n\n.home, .settings {\n  min-height: calc(100vh - 165px);\n}\n\n.home, .settings {\n  display: flex;\n  flex-direction: column;\n}\n\n.home, .painters-categories, .paintings-categories {\n  align-items: center;\n  padding: 20px;\n}\n\n.settings {\n  align-items: flex-start;\n  justify-content: space-around;\n  padding: 40px;\n}\n\n.home__link {\n  height: 25vh;\n  width: 340px;\n  margin-bottom: 10px;\n  padding: 100px 80px 5px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  background: #E5A587;\n  transition: box-shadow 0.25s linear, transform 0.7s, -webkit-transform 0.7s;\n}\n.home__link:focus {\n  outline: none;\n}\n.home__link:hover {\n  background-color: #DFCDBF;\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, 0.1);\n}\n\n.home__link__title {\n  width: 180px;\n  height: 40px;\n  padding: 8px;\n  border-radius: 12px;\n  border: 2px solid #EAEAEA;\n  color: #EAEAEA;\n  font-family: \"Roboto\";\n  font-weight: 700;\n}\n.home__link__title:focus {\n  outline: none;\n}\n.home__link__title:hover {\n  background-color: #79A1B0;\n  border: 2px solid #79A1B0;\n  color: #EAEAEA;\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, 0.1);\n}\n\n.painters {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.paintings {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.button {\n  font-family: \"Roboto\";\n  width: 180px;\n  height: 40px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s;\n  letter-spacing: 0.9px;\n  border-radius: 12px;\n  border: 2px solid #79A1B0;\n  color: #79A1B0;\n  background-color: transparent;\n}\n.button:focus {\n  outline: none;\n}\n.button:hover {\n  background-color: #79A1B0;\n  border: 2px solid #79A1B0;\n  color: #EAEAEA;\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, 0.05);\n}\n\n.settings__title {\n  font-size: 20px;\n  text-transform: capitalize;\n}\n\n.volume-container {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.volume-container .volume-button {\n  height: 26px;\n  display: flex;\n  align-items: center;\n}\n.volume-container .volume-button .volume {\n  transform: scale(0.7);\n}\n.volume-container .volume-slider {\n  width: 150px;\n  height: 5px;\n  background: #EAEAEA;\n  box-shadow: 0 0 15px #000a;\n  border-radius: 3px;\n  transition: 0.25s;\n}\n.volume-container .volume-slider .volume-percentage {\n  background: #79A1B0;\n  height: 100%;\n  width: 75%;\n}\n\n.switch-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 27px;\n  margin: 7px;\n}\n\n.switch__text {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  display: none;\n}\n\n/* The slider */\n.slider {\n  color: aliceblue;\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #79A1B0;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 19px;\n  width: 19px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #EAEAEA;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #DFCDBF;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #DFCDBF;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.time-button {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: transparent;\n  color: #79A1B0;\n  background-color: #DFCDBF;\n  cursor: pointer;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 255, 0.05);\n}\n.time-button:hover {\n  background-color: #79A1B0;\n  color: #DFCDBF;\n}\n\n.time-input {\n  width: 70px;\n  height: 22px;\n  border-radius: 12px;\n  border: transparent;\n  margin: 0 6px;\n  outline: none;\n  text-align: center;\n  padding-left: 15px;\n  color: #79A1B0;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 255, 0.05);\n}\n\n.footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px 40px;\n  color: #79A1B0;\n  align-items: center;\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n}\n\n.github {\n  display: block;\n  width: 45px;\n  height: 45px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: 35px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  transition: 0.3s;\n  text-decoration: unset;\n}\n\n.github:hover {\n  transform: scale(1.1);\n}\n\n.rss {\n  display: block;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif;\n  width: 86px;\n  height: 32px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-right: 111px;\n}\n\n.rss-year {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 21px;\n  letter-spacing: -2px;\n  color: #79A1B0;\n  line-height: 0.8;\n  font-weight: 900;\n  transition: 0.3s;\n}\n\n.rss:hover .rss-year {\n  right: -5px;\n  letter-spacing: 0;\n}\n\n.year {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.categories-menu, .results-menu {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n}\n\n.category-menu__item, .results-menu__item {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #EAEAEA;\n}\n.category-menu__item:hover, .results-menu__item:hover {\n  color: #79A1B0;\n  transform: scale(1.1);\n  border-bottom: 1px solid #79A1B0;\n}\n\n.painters-list, .paintings-list {\n  display: flex;\n  max-width: 1600px;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 13px;\n}\n\n.category-image {\n  width: 150px;\n  height: 150px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.category-card:hover {\n  cursor: pointer;\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, 0.2);\n}\n\n.category-card {\n  position: relative;\n  height: 164px;\n  margin-bottom: 20px;\n  background-color: #EAEAEA;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.category-text {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 2px 12px;\n  font-size: 14px;\n  color: #79A1B0;\n}\n\n.category-repeat {\n  position: absolute;\n  left: calc(50% - 12px);\n  top: calc(100% - 41px);\n  background-color: #EAEAEA;\n  border-radius: 50%;\n  padding: 3px;\n  transition: all 0.3s;\n}\n.category-repeat:hover {\n  transform: scale(1.1);\n}\n\n.game-image:hover {\n  cursor: pointer;\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, 0.2);\n}\n\n.game-image {\n  width: 330px;\n  border-radius: 10px;\n}\n\n.question, .paintings-question {\n  font-size: 20px;\n  color: #79A1B0;\n  margin: 20px 10px;\n}\n\n.answers-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  row-gap: 5px;\n  transition: all 0.5s ease-in-out;\n}\n\n@media (min-width: 410px) {\n  .answers-wrapper {\n    justify-items: center;\n    padding: 5px 15px;\n  }\n}\n@media (min-width: 500px) {\n  .answers-wrapper {\n    padding: 5px 15vw;\n  }\n}\n@media (min-width: 980px) {\n  .answers-wrapper {\n    padding: 5px 18vw;\n    row-gap: 12px;\n  }\n}\n@media (min-width: 1100px) {\n  .answers-wrapper {\n    padding: 5px 20vw;\n    row-gap: 12px;\n  }\n}\n@media (min-width: 1280px) {\n  .answers-wrapper {\n    padding: 5px 22vw;\n  }\n}\n.answer, .paintings-answer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n}\n.answer:hover, .paintings-answer:hover {\n  cursor: pointer;\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, 0.2);\n}\n\n.answer {\n  width: 160px;\n  height: 45px;\n  border: 1px solid #EAEAEA;\n  padding: 3px;\n}\n\n.paintings-answer {\n  width: 160px;\n  height: 160px;\n  margin: 2px;\n}\n.paintings-answer:hover {\n  cursor: pointer;\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, 0.2);\n}\n\n.answer_clicked {\n  background-color: #79A1B0;\n}\n\n.carousel {\n  display: flex;\n  flex-direction: row;\n  width: 200px;\n  justify-content: space-between;\n  position: absolute;\n  left: calc(50% - 100px);\n  top: 470px;\n  z-index: 10;\n}\n\n.carousel__item {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #EAEAEA;\n  cursor: pointer;\n}\n\n.carousel_active {\n  background-color: #E5A587;\n}\n\n.invisible {\n  display: none;\n}\n\n.cover {\n  position: fixed;\n  top: 0rem;\n  left: 0rem;\n  background-color: rgba(41, 41, 41, 0.6);\n  z-index: 10;\n  width: 100vw;\n  height: 100vh;\n  cursor: pointer;\n}\n\n.modal {\n  width: 250px;\n  height: 320px;\n  position: fixed;\n  top: 25%;\n  left: calc(50% - 125px);\n  z-index: 100;\n  padding: 10px;\n  background-color: #e2e0e0;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);\n  border-radius: 8px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.modal-icon {\n  width: 30px;\n  margin-bottom: 10px;\n}\n\n.modal-image {\n  width: 150px;\n  border-radius: 12px;\n  margin-bottom: 5px;\n}\n\n.modal-name, .modal-author {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.cover {\n  position: fixed;\n  top: 0rem;\n  left: 0rem;\n  background-color: rgba(41, 41, 41, 0.6);\n  z-index: 10;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n}\n\n.paintings-answers-wrapper {\n  display: flex;\n  padding: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  transition: all 0.5s ease-in-out;\n}\n\n@media (min-width: 500px) {\n  .paintings-answers-wrapper {\n    padding: 10px 80px;\n  }\n}\n@media (min-width: 690px) {\n  .paintings-answer {\n    width: 220px;\n    height: 220px;\n    margin: 7px;\n  }\n}\n@media (min-width: 1050px) {\n  .paintings-answers-wrapper {\n    padding: 10px 100px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$bg-color: #A4D0BB;\r\n$button-color: #E5A587;\r\n$button-hover: #d3b197;\r\n$font-color: #EAEAEA;\r\n$add-color: #DFCDBF;\r\n$bright-color:#79A1B0;\r\n\r\n@font-face {\r\n  font-family: 'Arial-MT';\r\n  src: url(\"./assets/fonts/Arial-MT.woff\"); /* Путь к файлу со шрифтом */\r\n }\r\n\r\n @font-face {\r\n  font-family: 'Roboto';\r\n  src: url(\"./assets/fonts/Roboto-Thin.ttf\"); /* Путь к файлу со шрифтом */\r\n }\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: $bg-color;\r\n}\r\n@media (min-width: 1100px) {\r\n  body {\r\n    margin: 0 20vw;\r\n  }\r\n}\r\n@media (min-width: 800px) {\r\n  body {\r\n    margin: 0 15vw;\r\n  }\r\n}\r\n\r\n.header {\r\n  padding: 20px;\r\n  color: $bright-color;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.home, .settings {\r\n  min-height: calc(100vh - 165px);\r\n}\r\n\r\n.home, .settings {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.home, .painters-categories, .paintings-categories {\r\n  align-items: center; \r\n  padding: 20px;   \r\n}\r\n\r\n.settings {\r\n  align-items: flex-start;\r\n  justify-content: space-around;   \r\n  padding: 40px;\r\n}\r\n\r\n.home__link {\r\n  height: 25vh;\r\n  width: 340px;\r\n  margin-bottom: 10px;\r\n  padding: 100px 80px 5px;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  transition: all .3s;\r\n  background: $button-color;\r\n  transition: box-shadow .25s linear,transform .7s,-webkit-transform .7s;\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n  &:hover {\r\n    background-color: $add-color;\r\n    box-shadow: 1px 2px 4px 4px rgb(0 0 255 / 10%);\r\n    //opacity: 0.8;\r\n  }\r\n}\r\n\r\n.home__link__title {\r\n  width: 180px;\r\n  height: 40px;\r\n  padding: 8px;\r\n  border-radius: 12px;\r\n  border: 2px solid #EAEAEA;\r\n  color: #EAEAEA;\r\n  font-family: 'Roboto';\r\n  font-weight: 700;\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n  &:hover {\r\n    background-color: $bright-color;\r\n    border: 2px solid $bright-color;\r\n    color: $font-color;\r\n    box-shadow: 1px 2px 4px 4px rgb(0 0 255 / 10%);\r\n  }\r\n}\r\n\r\n.painters {\r\n  background-image: url('./assets/images/img/1.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.paintings {\r\n  background-image: url('./assets/images/img/2.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.button {\r\n  font-family: 'Roboto';\r\n  width: 180px;\r\n  height: 40px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  transition: all .3s;\r\n  letter-spacing: 0.9px;\r\n  border-radius: 12px;\r\n  border: 2px solid $bright-color;\r\n  color: $bright-color;\r\n  background-color: transparent;\r\n  &:focus {\r\n      outline: none;\r\n  }\r\n  &:hover {\r\n    background-color: $bright-color;\r\n    border: 2px solid $bright-color;\r\n    color: $font-color;\r\n    box-shadow: 1px 2px 4px 4px rgb(0 0 255 / 5%);\r\n}\r\n}\r\n\r\n// Settings\r\n\r\n.settings__title {\r\n  font-size: 20px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.volume-container {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  .volume-button {\r\n    height: 26px;\r\n    display: flex;\r\n    align-items: center;\r\n    .volume {\r\n      transform: scale(0.7);\r\n    }\r\n  }\r\n  .volume-slider {\r\n    width: 150px;\r\n    height: 5px;\r\n    background: $font-color;\r\n    box-shadow: 0 0 15px #000a;\r\n    border-radius: 3px;\r\n    transition: .25s;\r\n    .volume-percentage {\r\n      background: $bright-color;\r\n      height: 100%;\r\n      width: 75%;\r\n    }\r\n  }\r\n}\r\n\r\n// Settings Switch-button\r\n\r\n.switch-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 52px;\r\n  height: 27px;\r\n  margin: 7px;\r\n}\r\n\r\n.switch__text {\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {display:none;}\r\n\r\n/* The slider */\r\n.slider {\r\n  color: aliceblue;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: $bright-color;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 19px;\r\n  width: 19px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: $font-color;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: $add-color;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px $add-color;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.time-button {\r\n  width: 22px;\r\n  height: 22px;\r\n  border-radius: 50%;\r\n  border: transparent;\r\n  color: $bright-color;\r\n  background-color: $add-color;\r\n  cursor: pointer;\r\n  box-shadow: 2px 2px 2px 2px rgb(0 0 255 / 5%);\r\n  &:hover {\r\n    background-color: $bright-color;\r\n    color: $add-color;\r\n  }\r\n}\r\n\r\n.time-input {\r\n  width: 70px;\r\n  height: 22px;\r\n  border-radius: 12px;\r\n  border: transparent;\r\n  margin: 0 6px;\r\n  outline: none;\r\n  text-align: center;\r\n  padding-left: 15px;\r\n  color: $bright-color;\r\n  box-shadow: 2px 2px 2px 2px rgb(0 0 255 / 5%);\r\n}\r\n\r\n\r\n// Footer\r\n\r\n.footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 20px 40px;\r\n  color: $bright-color;\r\n\r\n  align-items: center;\r\n  width: 100%;\r\n  max-width: 1920px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.github {\r\n  display: block;\r\n  width: 45px;\r\n  height: 45px;\r\n\r\n  background-image:  url('../src/assets/icons/github.svg'); \r\n  background-size: 35px;\r\n  background-repeat: no-repeat;\r\n  background-position: left center;\r\n  transition: 0.3s;\r\n  text-decoration: unset;\r\n}\r\n.github:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.rss {\r\n  display: block;\r\n  position: relative;\r\n  font-family: 'Open Sans', sans-serif;\r\n  width: 86px;\r\n  height: 32px;\r\n  background-image: url('../src/assets/icons/rss.svg');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: left center;\r\n  padding-right: 111px;\r\n}\r\n\r\n.rss-year {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  font-size: 21px;\r\n  letter-spacing: -2px;\r\n  color: $bright-color;\r\n  line-height: 0.8;\r\n  font-weight: 900;\r\n  transition: 0.3s;\r\n}\r\n.rss:hover .rss-year {\r\n  right: -5px;\r\n  letter-spacing: 0;\r\n}\r\n\r\n.year {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n\r\n// Painters Categories\r\n\r\n.categories-menu, .results-menu {\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.category-menu__item, .results-menu__item {\r\n  margin-left: 20px;\r\n  margin-bottom: 10px;\r\n  border-bottom: 1px solid $font-color;\r\n  &:hover {\r\n    color: $bright-color;\r\n    transform: scale(1.1);\r\n    border-bottom: 1px solid $bright-color;\r\n  }\r\n}\r\n\r\n.painters-list, .paintings-list {\r\n  display: flex;\r\n  max-width: 1600px;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  column-gap: 13px;\r\n}\r\n\r\n.category-image {\r\nwidth: 150px;\r\nheight: 150px;\r\nborder-bottom-right-radius: 10px;\r\nborder-bottom-left-radius: 10px;\r\n//border-radius: 9px; \r\n//transition: box-shadow .25s linear,-webkit-transform .7s;\r\n//transition: box-shadow .25s linear,transform .7s;\r\n//transition: box-shadow .25s linear,transform .7s,-webkit-transform .7s\r\n}\r\n\r\n.category-card:hover {\r\ncursor: pointer;\r\nbox-shadow: 1px 2px 4px 4px rgba(0, 0, 255, .2);\r\n}\r\n\r\n.category-card {\r\n  position: relative;\r\n  //max-width: 150px;\r\n  height: 164px;\r\n  margin-bottom: 20px;\r\n  background-color: $font-color;\r\n  border-top-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\n\r\n.category-text {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 2px 12px;\r\n  font-size: 14px;\r\n  color: $bright-color;\r\n}\r\n\r\n.category-repeat {\r\n  position: absolute;\r\n  left: calc(50% - 12px);\r\n  top: calc(100% - 41px);\r\n  background-color: $font-color;\r\n  border-radius: 50%;\r\n  padding: 3px;\r\n  transition: all .3s;\r\n  &:hover {\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n// Painters Game\r\n\r\n.game-image:hover {\r\n  cursor: pointer;\r\n  box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, .2);\r\n}\r\n\r\n.game-image {\r\n  width: 330px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.question, .paintings-question {\r\n  font-size: 20px;\r\n  color: $bright-color;\r\n  margin: 20px 10px;\r\n}\r\n\r\n.answers-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  row-gap: 5px;\r\n  //transform: translateX(100%);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n@media (min-width: 410px) {\r\n  .answers-wrapper {\r\n    justify-items: center;\r\n    padding: 5px 15px;\r\n  }\r\n}\r\n@media (min-width: 500px) {\r\n  .answers-wrapper {\r\n    padding: 5px 15vw;\r\n  }\r\n}\r\n@media (min-width: 980px) {\r\n  .answers-wrapper {\r\n    padding: 5px 18vw;\r\n    row-gap: 12px;\r\n  }\r\n}\r\n@media (min-width: 1100px) {\r\n  .answers-wrapper {\r\n    padding: 5px 20vw;\r\n    row-gap: 12px;\r\n  }\r\n}\r\n@media (min-width: 1280px) {\r\n  .answers-wrapper {\r\n    padding: 5px 22vw;\r\n  }\r\n}\r\n\r\n.answer, .paintings-answer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n  &:hover {\r\n    cursor: pointer;\r\n    box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, .2);\r\n  }\r\n}\r\n\r\n.answer {\r\n  width: 160px;\r\n  height: 45px;\r\n  border: 1px solid $font-color;\r\n  padding: 3px;\r\n}\r\n\r\n.paintings-answer {\r\n  width: 160px;\r\n  height: 160px;\r\n  margin: 2px;\r\n  &:hover {\r\n    cursor: pointer;\r\n    box-shadow: 1px 2px 4px 4px rgba(0, 0, 255, .2);\r\n  }\r\n}\r\n\r\n.answer_clicked {\r\n  background-color: $bright-color;\r\n}\r\n\r\n// Pagination \r\n\r\n.carousel {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 200px;\r\n  justify-content: space-between;\r\n  position: absolute;\r\n  left: calc(50% - 100px);\r\n  top: 470px;\r\n  z-index: 10;\r\n}\r\n\r\n.carousel__item {\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background-color: $font-color;\r\n  cursor: pointer;\r\n}\r\n\r\n.carousel_active {\r\n  background-color: $button-color;\r\n}\r\n\r\n// Modal\r\n\r\n.invisible {\r\n  display: none;\r\n}\r\n\r\n.cover {\r\n  position: fixed;\r\n  top: 0rem;\r\n  left: 0rem;\r\n  background-color: rgba(41, 41, 41, 0.6);\r\n  z-index: 10;\r\n  width: 100vw;\r\n  height: 100vh;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.modal {\r\n  width: 250px;\r\n  height: 320px;\r\n  position: fixed;\r\n  top: 25%;\r\n  left: calc(50% - 125px);\r\n  z-index: 100;\r\n  padding: 10px;\r\n  background-color: #e2e0e0;\r\n  box-shadow: 0px 1px 5px rgb(0 0 0 / 20%), 0px 3px 4px rgb(0 0 0 / 12%), 0px 2px 4px rgb(0 0 0 / 14%);\r\n  border-radius: 8px;\r\n}\r\n\r\n.modal-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.modal-icon {\r\n  width: 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.modal-image {\r\n  width: 150px;\r\n  border-radius: 12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.modal-name, .modal-author {\r\n  font-size: 14px;\r\n  margin-bottom: 5px;\r\n  //color: $bright-color;\r\n}\r\n\r\n.cover {\r\n  position: fixed;\r\n  top: 0rem;\r\n  left: 0rem;\r\n  background-color: rgba(41, 41, 41, 0.6);\r\n  z-index: 10;\r\n  width: 100vw;\r\n  height: 100vh;\r\n\r\n  //cursor: pointer;\r\n  pointer-events: none\r\n}\r\n\r\n// Paintings Game \r\n\r\n.paintings-answers-wrapper {\r\n  display: flex;\r\n  padding: 10px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n@media (min-width: 500px) {\r\n  .paintings-answers-wrapper {\r\n    padding: 10px 80px;\r\n  }\r\n}\r\n@media (min-width: 690px) {\r\n  .paintings-answer {\r\n    width: 220px;\r\n    height: 220px;\r\n    margin: 7px;\r\n  }\r\n}\r\n@media (min-width: 1050px) {\r\n  .paintings-answers-wrapper {\r\n    padding: 10px 100px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/audio/lose.wav":
/*!***********************************!*\
  !*** ./src/assets/audio/lose.wav ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3de9312c65780be13f90.wav";

/***/ }),

/***/ "./src/assets/audio/win.wav":
/*!**********************************!*\
  !*** ./src/assets/audio/win.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe95e484c435a6154d9c.wav";

/***/ }),

/***/ "./src/assets/fonts/Arial-MT.woff":
/*!****************************************!*\
  !*** ./src/assets/fonts/Arial-MT.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bacabc50aec871480dcb.woff";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Thin.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Roboto-Thin.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1711b41f3ae4cb322eea.ttf";

/***/ }),

/***/ "./src/assets/icons/github.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc74f8984089214db89a.svg";

/***/ }),

/***/ "./src/assets/icons/rss.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/rss.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9c0a577ccc9295d4310.svg";

/***/ }),

/***/ "./src/assets/images/img/1.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/img/1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e8147b13e499a652922.jpg";

/***/ }),

/***/ "./src/assets/images/img/2.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/img/2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7bf7dab374980bdc480.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSw0Q0FBNEMsMkJBQTJCLDJCQUEyQix5QkFBeUIsd0JBQXdCLDBCQUEwQixvQkFBb0IsOEJBQThCLGtEQUFrRCxtQ0FBbUMscUJBQXFCLDRCQUE0QixvREFBb0QsbUNBQW1DLFdBQVcsNkJBQTZCLGdCQUFnQixpQkFBaUIsS0FBSyxjQUFjLHdDQUF3QyxzQkFBc0IsdUJBQXVCLGtCQUFrQix5QkFBeUIsa0NBQWtDLEtBQUssZ0NBQWdDLFlBQVksdUJBQXVCLE9BQU8sS0FBSywrQkFBK0IsWUFBWSx1QkFBdUIsT0FBTyxLQUFLLGlCQUFpQixvQkFBb0IsMkJBQTJCLGdDQUFnQyxLQUFLLDBCQUEwQixzQ0FBc0MsS0FBSywwQkFBMEIsb0JBQW9CLDZCQUE2QixLQUFLLDREQUE0RCwyQkFBMkIsdUJBQXVCLEtBQUssbUJBQW1CLDhCQUE4Qix1Q0FBdUMsb0JBQW9CLEtBQUsscUJBQXFCLG1CQUFtQixtQkFBbUIsMEJBQTBCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDBCQUEwQixnQ0FBZ0MsNkVBQTZFLGVBQWUsc0JBQXNCLE9BQU8sZUFBZSxxQ0FBcUMsdURBQXVELHVCQUF1QixPQUFPLEtBQUssNEJBQTRCLG1CQUFtQixtQkFBbUIsbUJBQW1CLDBCQUEwQixnQ0FBZ0MscUJBQXFCLDRCQUE0Qix1QkFBdUIsZUFBZSxzQkFBc0IsT0FBTyxlQUFlLHdDQUF3Qyx3Q0FBd0MsMkJBQTJCLHVEQUF1RCxPQUFPLEtBQUssbUJBQW1CLHlEQUF5RCw2QkFBNkIsbUNBQW1DLEtBQUssb0JBQW9CLHlEQUF5RCw2QkFBNkIsbUNBQW1DLEtBQUssaUJBQWlCLDRCQUE0QixtQkFBbUIsbUJBQW1CLHNCQUFzQixzQkFBc0IsMEJBQTBCLDRCQUE0QiwwQkFBMEIsc0NBQXNDLDJCQUEyQixvQ0FBb0MsZUFBZSx3QkFBd0IsT0FBTyxlQUFlLHdDQUF3Qyx3Q0FBd0MsMkJBQTJCLHNEQUFzRCxLQUFLLEtBQUssNkNBQTZDLHNCQUFzQixpQ0FBaUMsS0FBSywyQkFBMkIsc0JBQXNCLGtCQUFrQixvQkFBb0IsMEJBQTBCLHNCQUFzQixxQkFBcUIsc0JBQXNCLDRCQUE0QixpQkFBaUIsZ0NBQWdDLFNBQVMsT0FBTyxzQkFBc0IscUJBQXFCLG9CQUFvQixnQ0FBZ0MsbUNBQW1DLDJCQUEyQix5QkFBeUIsNEJBQTRCLG9DQUFvQyx1QkFBdUIscUJBQXFCLFNBQVMsT0FBTyxLQUFLLDREQUE0RCxvQkFBb0IsMEJBQTBCLDBCQUEwQixLQUFLLGlCQUFpQix5QkFBeUIsNEJBQTRCLGtCQUFrQixtQkFBbUIsa0JBQWtCLEtBQUssdUJBQXVCLHNCQUFzQix1QkFBdUIsS0FBSywyREFBMkQsY0FBYyxxQ0FBcUMsdUJBQXVCLHlCQUF5QixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLHNDQUFzQyw4QkFBOEIsc0JBQXNCLEtBQUssd0JBQXdCLHlCQUF5QixvQkFBb0IsbUJBQW1CLGtCQUFrQixnQkFBZ0Isa0JBQWtCLG9DQUFvQyw4QkFBOEIsc0JBQXNCLEtBQUssaUNBQWlDLG1DQUFtQyxLQUFLLCtCQUErQixxQ0FBcUMsS0FBSyx3Q0FBd0MsMENBQTBDLHNDQUFzQyxrQ0FBa0MsS0FBSyxnREFBZ0QsMEJBQTBCLEtBQUssOEJBQThCLHlCQUF5QixLQUFLLHNCQUFzQixrQkFBa0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIsMkJBQTJCLG1DQUFtQyxzQkFBc0Isb0RBQW9ELGVBQWUsd0NBQXdDLDBCQUEwQixPQUFPLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDBCQUEwQixvQkFBb0Isb0JBQW9CLHlCQUF5Qix5QkFBeUIsMkJBQTJCLG9EQUFvRCxLQUFLLHNDQUFzQyxvQkFBb0IsMEJBQTBCLHFDQUFxQyx5QkFBeUIsMkJBQTJCLDhCQUE4QixrQkFBa0Isd0JBQXdCLHFCQUFxQixLQUFLLHFCQUFxQixxQkFBcUIsa0JBQWtCLG1CQUFtQixvRUFBb0UsNEJBQTRCLG1DQUFtQyx1Q0FBdUMsdUJBQXVCLDZCQUE2QixLQUFLLG1CQUFtQiw0QkFBNEIsS0FBSyxjQUFjLHFCQUFxQix5QkFBeUIsMkNBQTJDLGtCQUFrQixtQkFBbUIsMkRBQTJELCtCQUErQixtQ0FBbUMsdUNBQXVDLDJCQUEyQixLQUFLLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGVBQWUsc0JBQXNCLDJCQUEyQiwyQkFBMkIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsS0FBSywwQkFBMEIsa0JBQWtCLHdCQUF3QixLQUFLLGVBQWUsc0JBQXNCLHVCQUF1QixLQUFLLHVFQUF1RSxzQkFBc0Isb0JBQW9CLDBCQUEwQixLQUFLLG1EQUFtRCx3QkFBd0IsMEJBQTBCLDJDQUEyQyxlQUFlLDZCQUE2Qiw4QkFBOEIsK0NBQStDLE9BQU8sS0FBSyx5Q0FBeUMsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLHVCQUF1QixLQUFLLHlCQUF5QixpQkFBaUIsa0JBQWtCLHFDQUFxQyxvQ0FBb0MsMEJBQTBCLCtEQUErRCx1REFBdUQsaUZBQWlGLDhCQUE4QixvQkFBb0Isb0RBQW9ELEtBQUssd0JBQXdCLHlCQUF5Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixvQ0FBb0Msb0NBQW9DLG1DQUFtQyxLQUFLLHdCQUF3QixvQkFBb0IsMEJBQTBCLHFDQUFxQyx3QkFBd0Isc0JBQXNCLDJCQUEyQixLQUFLLDBCQUEwQix5QkFBeUIsNkJBQTZCLDZCQUE2QixvQ0FBb0MseUJBQXlCLG1CQUFtQiwwQkFBMEIsZUFBZSw4QkFBOEIsT0FBTyxLQUFLLG1EQUFtRCxzQkFBc0Isc0RBQXNELEtBQUsscUJBQXFCLG1CQUFtQiwwQkFBMEIsS0FBSyx3Q0FBd0Msc0JBQXNCLDJCQUEyQix3QkFBd0IsS0FBSywwQkFBMEIsb0JBQW9CLDRDQUE0Qyx5Q0FBeUMsbUJBQW1CLG9DQUFvQyx1Q0FBdUMsS0FBSywrQkFBK0Isd0JBQXdCLDhCQUE4QiwwQkFBMEIsT0FBTyxLQUFLLCtCQUErQix3QkFBd0IsMEJBQTBCLE9BQU8sS0FBSywrQkFBK0Isd0JBQXdCLDBCQUEwQixzQkFBc0IsT0FBTyxLQUFLLGdDQUFnQyx3QkFBd0IsMEJBQTBCLHNCQUFzQixPQUFPLEtBQUssZ0NBQWdDLHdCQUF3QiwwQkFBMEIsT0FBTyxLQUFLLG9DQUFvQyxvQkFBb0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsZUFBZSx3QkFBd0Isd0RBQXdELE9BQU8sS0FBSyxpQkFBaUIsbUJBQW1CLG1CQUFtQixvQ0FBb0MsbUJBQW1CLEtBQUssMkJBQTJCLG1CQUFtQixvQkFBb0Isa0JBQWtCLGVBQWUsd0JBQXdCLHdEQUF3RCxPQUFPLEtBQUsseUJBQXlCLHNDQUFzQyxLQUFLLHlDQUF5QyxvQkFBb0IsMEJBQTBCLG1CQUFtQixxQ0FBcUMseUJBQXlCLDhCQUE4QixpQkFBaUIsa0JBQWtCLEtBQUsseUJBQXlCLGlCQUFpQixrQkFBa0IseUJBQXlCLG9DQUFvQyxzQkFBc0IsS0FBSywwQkFBMEIsc0NBQXNDLEtBQUssb0NBQW9DLG9CQUFvQixLQUFLLGdCQUFnQixzQkFBc0IsZ0JBQWdCLGlCQUFpQiw4Q0FBOEMsa0JBQWtCLG1CQUFtQixvQkFBb0IsMEJBQTBCLEtBQUssZ0JBQWdCLG1CQUFtQixvQkFBb0Isc0JBQXNCLGVBQWUsOEJBQThCLG1CQUFtQixvQkFBb0IsZ0NBQWdDLDJHQUEyRyx5QkFBeUIsS0FBSyx3QkFBd0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxxQkFBcUIsa0JBQWtCLDBCQUEwQixLQUFLLHNCQUFzQixtQkFBbUIsMEJBQTBCLHlCQUF5QixLQUFLLG9DQUFvQyxzQkFBc0IseUJBQXlCLDZCQUE2QixLQUFLLGdCQUFnQixzQkFBc0IsZ0JBQWdCLGlCQUFpQiw4Q0FBOEMsa0JBQWtCLG1CQUFtQixvQkFBb0IsNEJBQTRCLCtCQUErQiw4REFBOEQsb0JBQW9CLG9CQUFvQixzQkFBc0IsOEJBQThCLHVDQUF1QyxLQUFLLCtCQUErQixrQ0FBa0MsMkJBQTJCLE9BQU8sS0FBSywrQkFBK0IseUJBQXlCLHFCQUFxQixzQkFBc0Isb0JBQW9CLE9BQU8sS0FBSyxnQ0FBZ0Msa0NBQWtDLDRCQUE0QixPQUFPLEtBQUssbUJBQW1CO0FBQzc0M0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNwQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9jb21wb25lbnRzL0NvdmVyLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvY29tcG9uZW50cy9QYWludGVyc0NhcmQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvY29tcG9uZW50cy9QYWludGVyc0dhbWVDYXJkLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2NvbXBvbmVudHMvUGFpbnRpbmdzQ2FyZC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9jb21wb25lbnRzL1BhaW50aW5nc0dhbWVDYXJkLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9wYWdlcy9QYWludGVyc0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvcGFnZXMvUGFpbnRlcnNMaXN0LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3BhZ2VzL1BhaW50aW5nc0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9zcmMvcGFnZXMvUGFpbnRpbmdzTGlzdC5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9wYWdlcy9SZXN1bHRzLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3BhZ2VzL1NldHRpbmdzLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3NlcnZpY2VzL1BhaW50ZXJzR2FtZS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9zZXJ2aWNlcy9QYWludGluZ3NHYW1lLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2Fuc3dlclJpZ2h0LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2Fuc3dlcldyb25nLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL2dldFJhbmRvbS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy91dGlscy9zZXRUaW1lLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vc3JjL3V0aWxzL3NldFZvbHVtZS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2FydC1xdWl6Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FydC1xdWl6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FydC1xdWl6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hcnQtcXVpei93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXJ0LXF1aXovd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4vcGFnZXMvSG9tZSc7XHJcblxyXG4vL2NvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICByb290RWxlbWVudC5hcHBlbmQodGhpcy5oZWFkZXIuZWxlbWVudClcclxuXHJcbiAgICB0aGlzLm1haW4gPSBuZXcgSG9tZSgpO1xyXG4gICAgcm9vdEVsZW1lbnQuYXBwZW5kKHRoaXMubWFpbi5lbGVtZW50KTtcclxuXHJcbiAgICAgLyp0aGlzLm1vZGFsID0gbmV3IE1vZGFsKCk7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubW9kYWwuZWxlbWVudCk7Ki9cclxuXHJcbiAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgIHJvb3RFbGVtZW50LmFwcGVuZCh0aGlzLmZvb3Rlci5lbGVtZW50KTtcclxuXHJcbiAgICAvL3RoaXMucm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gbWFpbkNsaWNrSGFuZGxlcihlKSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jb21wb25lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb3ZlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnY292ZXInLCAnaW52aXNpYmxlJ10pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdmb290ZXInLCBbJ2Zvb3RlciddKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGEgY2xhc3M9XCJnaXRodWJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FsaW9uYU11XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPjwvYT5cclxuICAgIDxzcGFuIGNsYXNzPVwieWVhclwiPjIwMjE8L3NwYW4+XHJcbiAgICA8YSBjbGFzcz1cInJzc1wiIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInJzcy15ZWFyXCI+JzIxPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignZGl2JywgWydtb2RhbCcsICdpbnZpc2libGUnXSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFpbnRlcnNDYXJkIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoaSwgbnVtKSB7XHJcbiAgICBzdXBlcignZGl2JywgWydjYXRlZ29yeS1jYXJkJ10pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdGV4dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbmFtZVwiPiR7aX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXJlc3VsdFwiPnJlc3VsdDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvJHtudW19LmpwZ1wiIGNsYXNzPVwiY2F0ZWdvcnktaW1hZ2VcIj5cclxuICAgIDxpbWcgc3JjPVwiLi9pY29ucy9yZXBlYXQucG5nXCIgY2xhc3M9XCJjYXRlZ29yeS1yZXBlYXRcIj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL01vZGFsJ1xyXG5pbXBvcnQgeyBhbnN3ZXJXcm9uZyB9IGZyb20gJy4vLi4vdXRpbHMvYW5zd2VyV3JvbmcnXHJcbmltcG9ydCB7IGFuc3dlclJpZ2h0IH0gZnJvbSAnLi8uLi91dGlscy9hbnN3ZXJSaWdodCdcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29udGVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGF1dGhvcnNBcnIsIG51bSwgbmFtZSwgYXJyLCBhdXRob3IpIHtcclxuICAvLyAgc3VwZXIoJ2RpdicsIFsnZ2FtZS1jYXJkJ10pO1xyXG4gIHN1cGVyKCdkaXYnLCBbJ2dhbWUtY2FyZCddKTtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvJHtudW19LmpwZ1wiIGNsYXNzPVwiZ2FtZS1pbWFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW5zd2Vycy13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJcIiBkYXRhLW51bT1cIjBcIj4ke2F1dGhvcnNBcnJbMF19PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJcIiBkYXRhLW51bT1cIjFcIj4ke2F1dGhvcnNBcnJbMV19PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJcIiBkYXRhLW51bT1cIjJcIj4ke2F1dGhvcnNBcnJbMl19PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJcIiBkYXRhLW51bT1cIjNcIj4ke2F1dGhvcnNBcnJbM119PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgLy90aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jaGVja0Fuc3dlcihlLCBhcnIsIG51bSwgYXV0aG9yLCBuYW1lKSk7ICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWludGVyc0dhbWVDYXJkIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcikge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnZ2FtZS1jYXJkJ10pO1xyXG4gICAgdGhpcy5vbmUgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aGlzLmNhcmQgPSBuZXcgQ2FyZENvbnRlbnQoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcilcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5jYXJkLmVsZW1lbnQpXHJcblxyXG4gICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbChhcnIsIG51bSwgYXV0aG9yLCBuYW1lKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLm1vZGFsLmVsZW1lbnQpIFxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNoZWNrQW5zd2VyKGUsIGF1dGhvcnNBcnIsIG51bSwgbmFtZSwgYXJyLCBhdXRob3IpKTsgXHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrQW5zd2VyKGUsIGF1dGhvcnNBcnIsIG51bSwgbmFtZSwgYXJyLCBhdXRob3IpIHtcclxuICAgIGlmICh0aGlzLm9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnN3ZXInKSkge1xyXG4gICAgaWYgKHRhcmdldC5pbm5lclRleHQgPT09IGF1dGhvcikge1xyXG4gICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPScjMzJhNzZlJ1xyXG4gICAgICBhbnN3ZXJSaWdodChhdXRob3JzQXJyLCBudW0sIG5hbWUsIGFyciwgYXV0aG9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcj0nI0U1QTU4NydcclxuICAgICAgYW5zd2VyV3JvbmcoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcilcclxuICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub25lID0gZmFsc2VcclxuICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYWludGVyc0luZm8oc3RhdGUsIG51bSwgYXV0aG9yLCBuYW1lKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGBcclxuICAgIDxpbWcgc3JjPVwiLi9pY29ucy8ke3N0YXRlfS5wbmdcIiBjbGFzcz1cIm1vZGFsLWljb25cIj48L2ltZz5cclxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvJHtudW19LmpwZ1wiIGNsYXNzPVwibW9kYWwtaW1hZ2VcIj48L2ltZz5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYW1lXCI+JHtuYW1lfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWF1dGhvclwiPiR7YXV0aG9yfTwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBtb2RhbC1idXR0b25cIj5Db250aW51ZTwvYnV0dG9uPlxyXG4gIGBcclxuICAgIHJldHVybiBjb250ZW50XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNvbXBvbmVudCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50aW5nc0NhcmQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihpLCBudW0pIHtcclxuICAgIHN1cGVyKCdkaXYnLCBbJ2NhdGVnb3J5LWNhcmQnXSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS10ZXh0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1uYW1lXCI+JHtpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktcmVzdWx0XCI+cmVzdWx0PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGltZyBzcmM9XCIuL2ltYWdlcy8ke251bX0uanBnXCIgY2xhc3M9XCJjYXRlZ29yeS1pbWFnZVwiPlxyXG4gICAgPGltZyBzcmM9XCIuL2ljb25zL3JlcGVhdC5wbmdcIiBjbGFzcz1cImNhdGVnb3J5LXJlcGVhdFwiPlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnXHJcbmltcG9ydCB7IGFuc3dlcldyb25nIH0gZnJvbSAnLi8uLi91dGlscy9hbnN3ZXJXcm9uZydcclxuaW1wb3J0IHsgYW5zd2VyUmlnaHQgfSBmcm9tICcuLy4uL3V0aWxzL2Fuc3dlclJpZ2h0J1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRDb250ZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoaW1hZ2VzQXJyLCBudW0sIG5hbWUsIGFyciwgYXV0aG9yKSB7XHJcbiAgICBzdXBlcignZGl2JywgWydnYW1lLWNhcmQnXSk7XHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFpbnRpbmdzLXF1ZXN0aW9uXCI+0JrQsNC60YPRjiDQuNC3INC60LDRgNGC0LjQvSDQvdCw0L/QuNGB0LDQuyAke2F1dGhvcn0/PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYWludGluZ3MtYW5zd2Vycy13cmFwcGVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy8ke2ltYWdlc0FyclswXX0uanBnXCIgZGF0YS1udW09XCIke2ltYWdlc0FyclswXX1cIiBjbGFzcz1cInBhaW50aW5ncy1hbnN3ZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzLyR7aW1hZ2VzQXJyWzFdfS5qcGdcIiBkYXRhLW51bT1cIiR7aW1hZ2VzQXJyWzFdfVwiIGNsYXNzPVwicGFpbnRpbmdzLWFuc3dlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvJHtpbWFnZXNBcnJbMl19LmpwZ1wiIGRhdGEtbnVtPVwiJHtpbWFnZXNBcnJbMl19XCIgY2xhc3M9XCJwYWludGluZ3MtYW5zd2VyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy8ke2ltYWdlc0FyclszXX0uanBnXCIgZGF0YS1udW09XCIke2ltYWdlc0FyclszXX1cIiBjbGFzcz1cInBhaW50aW5ncy1hbnN3ZXJcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7IFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50aW5nc0dhbWVDYXJkIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcikge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnZ2FtZS1jYXJkJ10pO1xyXG4gICAgdGhpcy5vbmUgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aGlzLmNhcmQgPSBuZXcgQ2FyZENvbnRlbnQoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcilcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5jYXJkLmVsZW1lbnQpXHJcblxyXG4gICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbChhcnIsIG51bSwgYXV0aG9yLCBuYW1lKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLm1vZGFsLmVsZW1lbnQpIFxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNoZWNrQW5zd2VyKGUsIGF1dGhvcnNBcnIsIG51bSwgbmFtZSwgYXJyLCBhdXRob3IpKTsgXHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrQW5zd2VyKGUsIGF1dGhvcnNBcnIsIG51bSwgbmFtZSwgYXJyLCBhdXRob3IpIHtcclxuICAgIGlmICh0aGlzLm9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWludGluZ3MtYW5zd2VyJykpIHtcclxuICAgIGlmICh0YXJnZXQuZGF0YXNldC5udW0gPT09IG51bSkge1xyXG4gICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPScjMzJhNzZlJ1xyXG4gICAgICBhbnN3ZXJSaWdodChhdXRob3JzQXJyLCBudW0sIG5hbWUsIGFyciwgYXV0aG9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcj0nI0U1QTU4NydcclxuICAgICAgYW5zd2VyV3JvbmcoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcilcclxuICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub25lID0gZmFsc2VcclxuICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYWludGluZ3NJbmZvKHN0YXRlLCBudW0sIGF1dGhvciwgbmFtZSkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBgXHJcbiAgICA8aW1nIHNyYz1cIi4vaWNvbnMvJHtzdGF0ZX0ucG5nXCIgY2xhc3M9XCJtb2RhbC1pY29uXCI+PC9pbWc+XHJcbiAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzLyR7bnVtfS5qcGdcIiBjbGFzcz1cIm1vZGFsLWltYWdlXCI+PC9pbWc+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbmFtZVwiPiR7bmFtZX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1hdXRob3JcIj4ke2F1dGhvcn08L2Rpdj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbW9kYWwtYnV0dG9uXCI+Q29udGludWU8L2J1dHRvbj5cclxuICBgXHJcbiAgICByZXR1cm4gY29udGVudFxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJydcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YWcgPSAnZGl2Jywgc3R5bGVzKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5zdHlsZXMpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcclxuXHJcbmNsYXNzIFNpdGVUaXRsZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdoMScsIFtdKTtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnYXJ0IHF1aXonO1xyXG4gICAgLy90aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbmRlck1haW5NZW51KCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdoZWFkZXInLCBbJ2hlYWRlciddKTtcclxuXHJcbiAgICBjb25zdCBzaXRlVGl0bGUgPSBuZXcgU2l0ZVRpdGxlKCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc2l0ZVRpdGxlLmVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcclxuXHJcbmltcG9ydCB7IFBhaW50ZXJzQ2F0ZWdvcmllcyB9IGZyb20gJy4vcGFnZXMvUGFpbnRlcnNDYXRlZ29yaWVzJ1xyXG5pbXBvcnQgeyBQYWludGluZ3NDYXRlZ29yaWVzIH0gZnJvbSAnLi9wYWdlcy9QYWludGluZ3NDYXRlZ29yaWVzJ1xyXG5pbXBvcnQgeyBQYWludGVyc0dhbWUgfSBmcm9tICcuL3NlcnZpY2VzL1BhaW50ZXJzR2FtZSdcclxuaW1wb3J0IHsgUGFpbnRpbmdzR2FtZSB9IGZyb20gJy4vc2VydmljZXMvUGFpbnRpbmdzR2FtZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9wYWdlcy9TZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJlc3VsdHMgfSBmcm9tICcuL3BhZ2VzL1Jlc3VsdHMnO1xyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9wYWdlcy9Ib21lLmpzJ1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyLmpzJ1xyXG5pbXBvcnQgeyBDb3ZlciB9IGZyb20gJy4vY29tcG9uZW50cy9Db3Zlci5qcydcclxuXHJcbmNvbnN0IGFwcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuXHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvblJlc29sdmVyID0gKGxvY2F0aW9uLCBlbGVtKSA9PiB7XHJcblxyXG4gIGNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKVxyXG4gIGNvbnN0IHJlc3VsdHMgPSBuZXcgUmVzdWx0cygpXHJcbiAgY29uc3QgcGFpbnRlcnNDYXRlZ29yaWVzID0gbmV3IFBhaW50ZXJzQ2F0ZWdvcmllcygpXHJcbiAgY29uc3QgcGFpbnRpbmdzQ2F0ZWdvcmllcyA9IG5ldyBQYWludGluZ3NDYXRlZ29yaWVzKClcclxuICBjb25zdCBwYWludGVyc0dhbWUgPSBuZXcgUGFpbnRlcnNHYW1lKCkgXHJcbiAgY29uc3QgcGFpbnRpbmdzR2FtZSA9IG5ldyBQYWludGluZ3NHYW1lKCkgXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxyXG4gIGNvbnN0IGZvb3RlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcclxuICBjb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyKClcclxuICBjb25zdCBjb3ZlciA9IG5ldyBDb3ZlcigpXHJcblxyXG4gIGFwcEVsZW1lbnQucmVtb3ZlQ2hpbGQobWFpbilcclxuICBhcHBFbGVtZW50LnJlbW92ZUNoaWxkKGZvb3RlckVsKVxyXG4gIHN3aXRjaCAobG9jYXRpb24pIHtcclxuICAgIGNhc2UgJ2hvbWUnOlxyXG4gICAgICBhcHBFbGVtZW50LmFwcGVuZENoaWxkKGhvbWUuZWxlbWVudClcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3NldHRpbmdzJzpcclxuICAgICAgYXBwRWxlbWVudC5hcHBlbmRDaGlsZChzZXR0aW5ncy5lbGVtZW50KVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAncGFpbnRlcnNDYXRlZ29yaWVzJzpcclxuICAgICAgYXBwRWxlbWVudC5hcHBlbmRDaGlsZChwYWludGVyc0NhdGVnb3JpZXMuZWxlbWVudClcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3BhaW50aW5nc0NhdGVnb3JpZXMnOlxyXG4gICAgICBhcHBFbGVtZW50LmFwcGVuZENoaWxkKHBhaW50aW5nc0NhdGVnb3JpZXMuZWxlbWVudClcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3BhaW50ZXJzR2FtZSc6XHJcbiAgICAgIGFwcEVsZW1lbnQuYXBwZW5kQ2hpbGQocGFpbnRlcnNHYW1lLmVsZW1lbnQpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdwYWludGluZ3NHYW1lJzpcclxuICAgICAgYXBwRWxlbWVudC5hcHBlbmRDaGlsZChwYWludGluZ3NHYW1lLmVsZW1lbnQpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdyZXN1bHRzJzpcclxuICAgICAgYXBwRWxlbWVudC5hcHBlbmRDaGlsZChyZXN1bHRzLmVsZW1lbnQpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG4gIGFwcEVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyLmVsZW1lbnQpXHJcbiAgYXBwRWxlbWVudC5hcHBlbmRDaGlsZChjb3Zlci5lbGVtZW50KVxyXG59O1xyXG5cclxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcclxuICBpZiAoIWFwcEVsZW1lbnQpIHRocm93IEVycm9yKCdBcHAgcm9vdCBlbGVtZW50IG5vdCBmb3VuZCcpO1xyXG4gIG5ldyBBcHAoYXBwRWxlbWVudCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWUnLCAnNScpXHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGluaXRBcHAoKSk7IiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGxvY2F0aW9uUmVzb2x2ZXIgfSBmcm9tICcuLy4uL2luZGV4J1xyXG5cclxuXHJcbmNsYXNzIFBhaW50ZXJzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignYScsIFsnaG9tZV9fbGluaycsICdwYWludGVycyddKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9tZV9fbGlua19fdGl0bGVcIj7RhdGD0LTQvtC20L3QuNC60Lg8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbGljaygpKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKCkge1xyXG4gICAgbG9jYXRpb25SZXNvbHZlcigncGFpbnRlcnNDYXRlZ29yaWVzJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yeScsICdwYWludGVycycpXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQYWludGluZ3MgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdhJywgWydob21lX19saW5rJywgJ3BhaW50aW5ncyddKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9tZV9fbGlua19fdGl0bGVcIj7QutCw0YDRgtC40L3RizwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsaWNrKCkpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2soKSB7XHJcbiAgICBsb2NhdGlvblJlc29sdmVyKCdwYWludGluZ3NDYXRlZ29yaWVzJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yeScsICdwYWludGluZ3MnKVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdidXR0b24nLCBbJ2J1dHRvbiddKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYNC90LDRgdGC0YDQvtC50LrQuGA7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb25SZXNvbHZlcignc2V0dGluZ3MnKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ21haW4nLCBbJ21haW4nLCAnaG9tZSddKTtcclxuXHJcbiAgICB0aGlzLnBhaW50ZXJzID0gbmV3IFBhaW50ZXJzKCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMucGFpbnRlcnMuZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5wYWludGluZ3MgPSBuZXcgUGFpbnRpbmdzKCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMucGFpbnRpbmdzLmVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uID0gbmV3IFNldHRpbmdzQnV0dG9uKCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuYnV0dG9uLmVsZW1lbnQpXHJcblxyXG4gICAgLy90aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2NhdGlvblJlc29sdmVyKCkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnXHJcbiAgfVxyXG59XHJcbiAgIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhaW50ZXJzTGlzdCB9IGZyb20gJy4vLi4vcGFnZXMvUGFpbnRlcnNMaXN0JztcclxuaW1wb3J0IHsgbG9jYXRpb25SZXNvbHZlciB9IGZyb20gJy4vLi4vaW5kZXgnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50ZXJzTWVudSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnY2F0ZWdvcmllcy1tZW51J10pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbWVudV9faXRlbVwiPkhvbWU8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1tZW51X19pdGVtXCI+UmVzdWx0czwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jbGlja01lbnUoZSkpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tNZW51KGUpIHtcclxuICAgXHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycsIHRhcmdldC5pbm5lclRleHQpXHJcbiAgICBpZiAodGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1Jlc3VsdHMnKSB7XHJcbiAgICAgIGxvY2F0aW9uUmVzb2x2ZXIoJ3Jlc3VsdHMnKVxyXG4gICAgfSBcclxuICAgIGVsc2UgeyBsb2NhdGlvblJlc29sdmVyKCdob21lJykgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50ZXJzQ2F0ZWdvcmllcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ21haW4nLCBbJ21haW4nLCAncGFpbnRlcnMtY2F0ZWdvcmllcyddKTtcclxuXHJcbiAgICB0aGlzLm1lbnUgPSBuZXcgUGFpbnRlcnNNZW51KClcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5tZW51LmVsZW1lbnQpXHJcblxyXG4gICAgdGhpcy5wYWludGVyc0xpc3QgPSBuZXcgUGFpbnRlcnNMaXN0KClcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5wYWludGVyc0xpc3QuZWxlbWVudClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCdcclxuaW1wb3J0IHsgUGFpbnRlcnNDYXJkIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL1BhaW50ZXJzQ2FyZCc7XHJcbmltcG9ydCB7IGxvY2F0aW9uUmVzb2x2ZXIgfSBmcm9tICcuLy4uL2luZGV4J1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWludGVyc0xpc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHN1cGVyKCdkaXYnLCBbJ3BhaW50ZXJzLWxpc3QnXSlcclxuXHJcbiAgICAgbGV0IHNldCA9IGF3YWl0IHRoaXMuc2V0Q2F0ZWdvcmllcygpXHJcbiAgICAgdGhpcy5zZXQgPSBzZXRcclxuICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuc2V0KVxyXG4gICAgICAgXHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRUYXJnZXQoZSkpXHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2NhdGlvblJlc29sdmVyKCdwYWludGVyc0dhbWUnKSlcclxuIFxyXG4gIH0pKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIHNldFRhcmdldChlKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbnVtYmVyJylcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktbmFtZVwiKS5pbm5lclRleHQgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFyZ2V0JywgdGFyZ2V0KTtcclxuICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UuZ2V0SXRlbSwgbnVtYmVyJyxsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtYmVyJykpXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bWJlcicpID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdudW1iZXInLCAwKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldFxyXG4gIH1cclxuXHJcbiBhc3luYyBzZXRDYXRlZ29yaWVzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy4vaW1hZ2VzLmpzb24nKTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICBsZXQgYXJyID0gW11cclxuICBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IChNYXRoLmZsb29yKGNhdGVnb3JpZXMubGVuZ3RoIC8gMikpOyBpKyspIHtcclxuICAgICBpZiAoYXJyLmxlbmd0aCA8IDkpIHtcclxuICAgICAgICBhcnIucHVzaChjYXRlZ29yaWVzW2ldKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICBhcnIucHVzaChjYXRlZ29yaWVzW2ldKVxyXG4gICAgICBhcnJheS5wdXNoKGFycilcclxuICAgICAgYXJyID0gW119XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWludGVyc0NhcmRzID0gYXJyYXkubWFwKChlbCwgaW5kZXgpID0+IG5ldyBQYWludGVyc0NhcmQoaW5kZXgrMSwgZWxbMF0uaW1hZ2VOdW0pKVxyXG4gICAgLy9jb25zb2xlLmxvZygncHBwcHAnLCBwYWludGVyc0NhcmRzKVxyXG4gICAgcGFpbnRlcnNDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB0aGlzLmVsZW1lbnQuYXBwZW5kKGNhcmQuZWxlbWVudCkpXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRBcnJheSgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcuL2ltYWdlcy5qc29uJyk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnN0IGFycmF5ID0gW11cclxuICAgIGxldCBhcnIgPSBbXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IChNYXRoLmZsb29yKGNhdGVnb3JpZXMubGVuZ3RoIC8gMikpOyBpKyspIHtcclxuICAgICBpZiAoYXJyLmxlbmd0aCA8IDkpIHtcclxuICAgICAgICBhcnIucHVzaChjYXRlZ29yaWVzW2ldKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICBhcnIucHVzaChjYXRlZ29yaWVzW2ldKVxyXG4gICAgICBhcnJheS5wdXNoKGFycilcclxuICAgICAgYXJyID0gW119XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFpbnRpbmdzTGlzdCB9IGZyb20gJy4vLi4vcGFnZXMvUGFpbnRpbmdzTGlzdCc7XHJcbmltcG9ydCB7IGxvY2F0aW9uUmVzb2x2ZXIgfSBmcm9tICcuLy4uL2luZGV4J1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWludGluZ3NNZW51IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignZGl2JywgWydjYXRlZ29yaWVzLW1lbnUnXSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1tZW51X19pdGVtXCI+SG9tZTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LW1lbnVfX2l0ZW1cIj5SZXN1bHRzPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNsaWNrTWVudShlKSk7XHJcbiAgfVxyXG5cclxuICBjbGlja01lbnUoZSkge1xyXG4gICBcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJywgdGFyZ2V0LmlubmVyVGV4dClcclxuICAgIGlmICh0YXJnZXQuaW5uZXJUZXh0ID09PSAnUmVzdWx0cycpIHtcclxuICAgICAgbG9jYXRpb25SZXNvbHZlcigncmVzdWx0cycpXHJcbiAgICB9IFxyXG4gICAgZWxzZSB7IGxvY2F0aW9uUmVzb2x2ZXIoJ2hvbWUnKSB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFpbnRpbmdzQ2F0ZWdvcmllcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ21haW4nLCBbJ21haW4nLCAncGFpbnRpbmdzLWNhdGVnb3JpZXMnXSk7XHJcblxyXG4gICAgdGhpcy5tZW51ID0gbmV3IFBhaW50aW5nc01lbnUoKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLm1lbnUuZWxlbWVudClcclxuXHJcbiAgICB0aGlzLnBhaW50ZXJzTGlzdCA9IG5ldyBQYWludGluZ3NMaXN0KClcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5wYWludGVyc0xpc3QuZWxlbWVudClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCdcclxuaW1wb3J0IHsgUGFpbnRpbmdzQ2FyZCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9QYWludGluZ3NDYXJkJztcclxuaW1wb3J0IHsgbG9jYXRpb25SZXNvbHZlciB9IGZyb20gJy4vLi4vaW5kZXgnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50aW5nc0xpc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHN1cGVyKCdkaXYnLCBbJ3BhaW50aW5ncy1saXN0J10pXHJcblxyXG4gICAgIGxldCBzZXQgPSBhd2FpdCB0aGlzLnNldENhdGVnb3JpZXMoKVxyXG4gICAgIHRoaXMuc2V0ID0gc2V0XHJcbiAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLnNldClcclxuICAgICAgIFxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0VGFyZ2V0KGUpKVxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb25SZXNvbHZlcigncGFpbnRpbmdzR2FtZScpKVxyXG4gXHJcbiAgfSkoKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5jYXJkcyA9IFtdO1xyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc2V0VGFyZ2V0KGUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdudW1iZXInKVxyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeS1uYW1lXCIpLmlubmVyVGV4dCBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXJnZXQnLCB0YXJnZXQpO1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtYmVyJykgPT09IG51bGwpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ251bWJlcicsIDApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0XHJcbiAgfVxyXG5cclxuIGFzeW5jIHNldENhdGVnb3JpZXMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnLi9pbWFnZXMuanNvbicpO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnN0IGFycmF5ID0gW11cclxuICAgIGxldCBhcnIgPSBbXVxyXG4gIFxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gKE1hdGguZmxvb3IoY2F0ZWdvcmllcy5sZW5ndGggLyAyKSk7IGkrKykge1xyXG4gICAgIGlmIChhcnIubGVuZ3RoIDwgOSkge1xyXG4gICAgICAgIGFyci5wdXNoKGNhdGVnb3JpZXNbaV0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGFyci5wdXNoKGNhdGVnb3JpZXNbaV0pXHJcbiAgICAgIGFycmF5LnB1c2goYXJyKVxyXG4gXHJcbiAgICAgIGFyciA9IFtdfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcGFpbnRpbmdzQ2FyZHMgPSBhcnJheS5tYXAoKGVsLCBpbmRleCkgPT4gbmV3IFBhaW50aW5nc0NhcmQoaW5kZXgrMSwgZWxbMF0uaW1hZ2VOdW0pKVxyXG4gICAgcGFpbnRpbmdzQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gdGhpcy5lbGVtZW50LmFwcGVuZChjYXJkLmVsZW1lbnQpKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QXJyYXkoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnLi9pbWFnZXMuanNvbicpO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICBsZXQgYXJyID0gW11cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAoTWF0aC5mbG9vcihjYXRlZ29yaWVzLmxlbmd0aCAvIDIpKTsgaSsrKSB7XHJcbiAgICAgaWYgKGFyci5sZW5ndGggPCA5KSB7XHJcbiAgICAgICAgYXJyLnB1c2goY2F0ZWdvcmllc1tpXSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgYXJyYXkucHVzaChhcnIpXHJcbiAgICAgIGFyciA9IFtdfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCdcclxuaW1wb3J0IHsgbG9jYXRpb25SZXNvbHZlciB9IGZyb20gJy4vLi4vaW5kZXgnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdHNNZW51IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignZGl2JywgWydyZXN1bHRzLW1lbnUnXSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRzLW1lbnVfX2l0ZW1cIiBkYXRhLW5hbWU9XCJob21lXCI+SG9tZTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdHMtbWVudV9faXRlbVwiIGRhdGEtbmFtZT1cInBhaW50ZXJzQ2F0ZWdvcmllc1wiPkNhdGVnb3JpZXM8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGxvY2F0aW9uUmVzb2x2ZXIoZS50YXJnZXQuZGF0YXNldC5uYW1lKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c0NvbnRlbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdkaXYnLCBbJ3Jlc3VsdHMtY29udGVudCddKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdj5SRVNVTFQgQ09OVEVOVDwvZGl2PlxyXG4gICAgPGRpdj5SRVNVTFQgV1JBUFBFUjwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignbWFpbicsIFsnbWFpbicsICdyZXN1bHRzJ10pO1xyXG5cclxuICAgIHRoaXMubWVudSA9IG5ldyBSZXN1bHRzTWVudSgpXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMubWVudS5lbGVtZW50KVxyXG5cclxuICAgIHRoaXMuY29udGVudCA9IG5ldyBSZXN1bHRzQ29udGVudCgpXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC5lbGVtZW50KVxyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQnXHJcbmltcG9ydCB7IGxvY2F0aW9uUmVzb2x2ZXIgfSBmcm9tICcuLy4uL2luZGV4J1xyXG5pbXBvcnQgc2V0VGltZSBmcm9tICcuLy4uL3V0aWxzL3NldFRpbWUnXHJcbmltcG9ydCBzZXRWb2x1bWUgZnJvbSAnLi4vdXRpbHMvc2V0Vm9sdW1lJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzTWVudSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnY2F0ZWdvcmllcy1tZW51J10pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbWVudV9faXRlbVwiPkhvbWU8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb25SZXNvbHZlcignaG9tZScpKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFZvbHVtZUJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdkaXYnLCBbJ3ZvbHVtZS1idXR0b24nXSk7XHJcbiAgICB0aGlzLm11dGVkID0gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2b2x1bWVNdXRlZCcpIHx8ICdNZWRpdW0nKVxyXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWUgaWNvbm8tdm9sdW1lJHt0aGlzLm11dGVkfVwiPjwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFZvbHVtZVNsaWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsndm9sdW1lLXNsaWRlciddKTtcclxuICAgIHRoaXMud2lkdGggPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZvbHVtZUxldmVsJykqMTAwIHx8IDc1IClcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidm9sdW1lLXBlcmNlbnRhZ2VcIiBzdHlsZT1cIndpZHRoOiAke3RoaXMud2lkdGh9JVwiPjwvZGl2PlxyXG4gICAgYDtcclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFZvbHVtZSgpKVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVm9sdW1lQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignZGl2JywgWyd2b2x1bWUtY29udGFpbmVyJywgJ3ZvbHVtZS1jb250YWluZXItbGluZSddKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbiA9IG5ldyBWb2x1bWVCdXR0b24oKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmJ1dHRvbi5lbGVtZW50KVxyXG5cclxuICAgIHRoaXMuc2xpZGVyID0gbmV3IFZvbHVtZVNsaWRlcigpO1xyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLnNsaWRlci5lbGVtZW50KVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgU3dpdGNoQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignbGFiZWwnLCBbJ3N3aXRjaCddKTtcclxuICAgIHRoaXMuaXNQbGF5ID0gZmFsc2VcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5gXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTd2l0Y2hUZXh0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IodGV4dCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnc3dpdGNoX190ZXh0J10pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgJHt0ZXh0fWBcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFN3aXRjaENvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnc3dpdGNoLWNvbnRhaW5lciddKTtcclxuXHJcbiAgICB0aGlzLnRleHQgPSBuZXcgU3dpdGNoVGV4dCgnT2ZmJylcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy50ZXh0LmVsZW1lbnQpXHJcblxyXG4gICAgdGhpcy5idXR0b24gPSBuZXcgU3dpdGNoQnV0dG9uKClcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5idXR0b24uZWxlbWVudClcclxuXHJcbiAgICB0aGlzLnRleHQgPSBuZXcgU3dpdGNoVGV4dCgnT24nKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLnRleHQuZWxlbWVudClcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzVGl0bGUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnc2V0dGluZ3NfX3RpdGxlJ10pO1xyXG4gICAgXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGl0bGV9YFxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGltZUNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsndGltZS1jb250YWluZXInXSk7XHJcbiAgICBcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8YnV0dG9uIGlkPVwidGltZS1taW51c1wiIGNsYXNzPVwiYnV0dG9uX3RpbWUtbWludXMgdGltZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+4oCTPC9idXR0b24+XHJcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjVcIiBtYXg9XCIzMFwiIHZhbHVlPVwiNVwiIHJlYWRvbmx5IGNsYXNzPVwidGltZS1pbnB1dFwiIGlkPVwidGltZS1pbnB1dFwiPlxyXG4gICAgPGJ1dHRvbiBpZD1cInRpbWUtcGx1c1wiIGNsYXNzPVwiYnV0dG9uX3RpbWUtcGx1cyB0aW1lLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj4rPC9idXR0b24+XHJcbiAgICBgXHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHNldFRpbWUoZSkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdtYWluJywgWydtYWluJywgJ3NldHRpbmdzJ10pO1xyXG5cclxuICAgIHRoaXMubWVudSA9IG5ldyBTZXR0aW5nc01lbnUoKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLm1lbnUuZWxlbWVudClcclxuXHJcbiAgICB0aGlzLnRpdGxlID0gbmV3IFNldHRpbmdzVGl0bGUoJ1ZvbHVtZScpXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMudGl0bGUuZWxlbWVudClcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBWb2x1bWVDb250YWluZXIoKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmNvbnRhaW5lci5lbGVtZW50KVxyXG5cclxuICAgIHRoaXMudGl0bGUgPSBuZXcgU2V0dGluZ3NUaXRsZSgnVGltZSBnYW1lJylcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy50aXRsZS5lbGVtZW50KVxyXG5cclxuICAgIHRoaXMuYnV0dG9uID0gbmV3IFN3aXRjaENvbnRhaW5lcigpXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuYnV0dG9uLmVsZW1lbnQpXHJcblxyXG4gICAgdGhpcy50aXRsZSA9IG5ldyBTZXR0aW5nc1RpdGxlKCdUaW1lIHRvIGFuc3dlcicpXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMudGl0bGUuZWxlbWVudClcclxuXHJcbiAgICB0aGlzLnRpbWVDb250YWluZXIgPSBuZXcgVGltZUNvbnRhaW5lcigpXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMudGltZUNvbnRhaW5lci5lbGVtZW50KVxyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFpbnRlcnNDYXRlZ29yaWVzIH0gZnJvbSAnLi4vcGFnZXMvUGFpbnRlcnNDYXRlZ29yaWVzJztcclxuaW1wb3J0IHsgUGFpbnRlcnNHYW1lQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFpbnRlcnNHYW1lQ2FyZCc7XHJcbmltcG9ydCB7IFBhaW50ZXJzTGlzdCB9IGZyb20gJy4uL3BhZ2VzL1BhaW50ZXJzTGlzdCc7XHJcblxyXG5pbXBvcnQgeyBnZXRSYW5kb20gfSBmcm9tICcuLy4uL3V0aWxzL2dldFJhbmRvbSdcclxuaW1wb3J0IHsgbG9jYXRpb25SZXNvbHZlciB9IGZyb20gJy4vLi4vaW5kZXgnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50ZXJzR2FtZU1lbnUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdkaXYnLCBbJ2NhdGVnb3JpZXMtbWVudSddKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LW1lbnVfX2l0ZW1cIiBkYXRhLW5hbWU9XCJob21lXCI+SG9tZTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LW1lbnVfX2l0ZW1cIiBkYXRhLW5hbWU9XCJwYWludGVyc0NhdGVnb3JpZXNcIj5DYXRlZ29yaWVzPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbWVudV9faXRlbVwiIGRhdGEtbmFtZT1cInJlc3VsdHNcIj5SZXN1bHRzPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBsb2NhdGlvblJlc29sdmVyKGUudGFyZ2V0LmRhdGFzZXQubmFtZSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignZGl2JywgWydxdWVzdGlvbiddKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJ1dobyBpcyB0aGUgYXV0aG9yIG9mIHRoaXMgcGljdHVyZT8nXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ3NwYW4nLCBbJ2Nhcm91c2VsJ10pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsX19pdGVtIGNhcm91c2VsX2FjdGl2ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWxfX2l0ZW1cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsX19pdGVtXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYXJvdXNlbF9faXRlbVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWxfX2l0ZW1cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsX19pdGVtXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYXJvdXNlbF9faXRlbVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWxfX2l0ZW1cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsX19pdGVtXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYXJvdXNlbF9faXRlbVwiPjwvc3Bhbj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFpbnRlcnNHYW1lTGlzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgc3VwZXIoJ2RpdicsIFsnZ2FtZS1saXN0J10pO1xyXG5cclxuICAgICBsZXQgZ2FtZSA9IGF3YWl0IHRoaXMuc2V0R2FtZSgpXHJcbiAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5nYW1lKSBcclxuICB9KSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0R2FtZSgpIHtcclxuICAgIGxldCBpXHJcbiAgICBsZXQgblxyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhcmdldCcpID8gaSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFyZ2V0JykpIDogaSA9IDFcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdudW1iZXInKT8gbiA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtYmVyJykpIDogbiA9IDBcclxuICAgIGNvbnN0IHBhaW50ZXJzTGlzdCA9IGF3YWl0IG5ldyBQYWludGVyc0xpc3QoKVxyXG4gICAgY29uc3QgYXJyYXkgPSBhd2FpdCBwYWludGVyc0xpc3Quc2V0QXJyYXkoKVxyXG4gICAgY29uc3QgYXJyID0gZ2V0UmFuZG9tKG4pXHJcbiAgICBjb25zdCBhbnN3ZXJzQXJyID0gYXJyLm1hcCgoZWwpID0+IGFycmF5W2ktMV1bZWxdKVxyXG4gICAgY29uc3QgYXV0aG9yc0FyciA9IGFuc3dlcnNBcnIubWFwKChlbCkgPT4gZWwuYXV0aG9yKVxyXG4gICAgY29uc3QgZ2FtZUNhcmRzID0gYXJyYXlbaS0xXS5tYXAoKGVsKSA9PiBuZXcgUGFpbnRlcnNHYW1lQ2FyZChhdXRob3JzQXJyLCBlbC5pbWFnZU51bSwgZWwubmFtZSwgYW5zd2Vyc0FyciwgZWwuYXV0aG9yKSlcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZ2FtZUNhcmRzW051bWJlcihuKV0uZWxlbWVudClcclxuICB9XHJcblxyXG4gIGZpbmlzaEdhbWUoKSB7XHJcbiAgICBsb2NhdGlvblJlc29sdmVyKCdyZXN1bHRzJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdudW1iZXInKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RhcmdldCcpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFpbnRlcnNHYW1lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignbWFpbicsIFsnbWFpbicsICdwYWludGVycy1nYW1lJ10pO1xyXG5cclxuICAgIHRoaXMubWVudSA9IG5ldyBQYWludGVyc0dhbWVNZW51KClcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5tZW51LmVsZW1lbnQpXHJcblxyXG4gICAgdGhpcy50ZXh0ID0gbmV3IFF1ZXN0aW9uXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMudGV4dC5lbGVtZW50KVxyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWwgPSBuZXcgUGFnaW5hdGlvblxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmNhcm91c2VsLmVsZW1lbnQpXHJcblxyXG4gICAgdGhpcy5saXN0ID0gbmV3IFBhaW50ZXJzR2FtZUxpc3QoKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmxpc3QuZWxlbWVudClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhaW50aW5nc0NhdGVnb3JpZXMgfSBmcm9tICcuLi9wYWdlcy9QYWludGluZ3NDYXRlZ29yaWVzJztcclxuaW1wb3J0IHsgUGFpbnRpbmdzR2FtZUNhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhaW50aW5nc0dhbWVDYXJkJztcclxuaW1wb3J0IHsgUGFpbnRpbmdzTGlzdCB9IGZyb20gJy4uL3BhZ2VzL1BhaW50aW5nc0xpc3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0UmFuZG9tIH0gZnJvbSAnLi8uLi91dGlscy9nZXRSYW5kb20nXHJcbmltcG9ydCB7IGxvY2F0aW9uUmVzb2x2ZXIgfSBmcm9tICcuLy4uL2luZGV4J1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWludGluZ3NHYW1lTWVudSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2RpdicsIFsnY2F0ZWdvcmllcy1tZW51J10pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbWVudV9faXRlbVwiIGRhdGEtbmFtZT1cImhvbWVcIj5Ib21lPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbWVudV9faXRlbVwiIGRhdGEtbmFtZT1cInBhaW50aW5nc0NhdGVnb3JpZXNcIj5DYXRlZ29yaWVzPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbWVudV9faXRlbVwiIGRhdGEtbmFtZT1cInJlc3VsdHNcIj5SZXN1bHRzPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBsb2NhdGlvblJlc29sdmVyKGUudGFyZ2V0LmRhdGFzZXQubmFtZSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50aW5nc0dhbWVMaXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzdXBlcignZGl2JywgWydwYWludGluZ3MtZ2FtZS1saXN0J10pO1xyXG5cclxuICAgICBsZXQgZ2FtZSA9IGF3YWl0IHRoaXMuc2V0R2FtZSgpXHJcbiAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgIHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5nYW1lKSBcclxuICB9KSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0R2FtZSgpIHtcclxuICAgIGxldCBpXHJcbiAgICBsZXQgblxyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhcmdldCcpID8gaSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFyZ2V0JykpIDogaSA9IDFcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdudW1iZXInKT8gbiA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtYmVyJykpIDogbiA9IDBcclxuICAgIGNvbnN0IHBhaW50aW5nc0xpc3QgPSBhd2FpdCBuZXcgUGFpbnRpbmdzTGlzdCgpXHJcbiAgICBjb25zdCBhcnJheSA9IGF3YWl0IHBhaW50aW5nc0xpc3Quc2V0QXJyYXkoKVxyXG4gICBcclxuICAgIGNvbnN0IGFyciA9IGdldFJhbmRvbShuKVxyXG4gICAgY29uc3QgYW5zd2Vyc0FyciA9IGFyci5tYXAoKGVsKSA9PiBhcnJheVtpLTFdW2VsXSlcclxuICAgIFxyXG4gICAgY29uc3QgaW1hZ2VzQXJyID0gYW5zd2Vyc0Fyci5tYXAoKGVsKSA9PiBlbC5pbWFnZU51bSlcclxuICAgIGNvbnN0IGdhbWVDYXJkcyA9IGFycmF5W2ktMV0ubWFwKChlbCkgPT4gbmV3IFBhaW50aW5nc0dhbWVDYXJkKGltYWdlc0FyciwgZWwuaW1hZ2VOdW0sIGVsLm5hbWUsIGFuc3dlcnNBcnIsIGVsLmF1dGhvcikpXHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGdhbWVDYXJkc1tOdW1iZXIobildLmVsZW1lbnQpXHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgZmluaXNoR2FtZSgpIHtcclxuICAgIGxvY2F0aW9uUmVzb2x2ZXIoJ3Jlc3VsdHMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ251bWJlcicpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFyZ2V0JylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWludGluZ3NHYW1lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignbWFpbicsIFsnbWFpbicsICdwYWludGluZ3MtZ2FtZSddKTtcclxuXHJcbiAgICB0aGlzLm1lbnUgPSBuZXcgUGFpbnRpbmdzR2FtZU1lbnUoKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLm1lbnUuZWxlbWVudClcclxuXHJcbiAgICB0aGlzLmxpc3QgPSBuZXcgUGFpbnRpbmdzR2FtZUxpc3QoKVxyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmxpc3QuZWxlbWVudClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQYWludGVyc0dhbWVDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWludGVyc0dhbWVDYXJkJ1xyXG5pbXBvcnQgeyBQYWludGVyc0dhbWVMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvUGFpbnRlcnNHYW1lJ1xyXG5pbXBvcnQgeyBQYWludGluZ3NHYW1lQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFpbnRpbmdzR2FtZUNhcmQnXHJcbmltcG9ydCB7IFBhaW50aW5nc0dhbWVMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvUGFpbnRpbmdzR2FtZSdcclxuaW1wb3J0IHdpbiBmcm9tICcuLy4uL2Fzc2V0cy9hdWRpby93aW4ud2F2J1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbnN3ZXJSaWdodChhdXRob3JzQXJyLCBudW0sIG5hbWUsIGFyciwgYXV0aG9yKSB7XHJcbiAgY29uc3QgcGFpbnRlcnNHYW1lQ2FyZCA9IG5ldyBQYWludGVyc0dhbWVDYXJkKGF1dGhvcnNBcnIsIG51bSwgbmFtZSwgYXJyLCBhdXRob3IpXHJcbiAgY29uc3QgcGFpbnRpbmdzR2FtZUNhcmQgPSBuZXcgUGFpbnRpbmdzR2FtZUNhcmQoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcilcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKVxyXG5cclxuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgYXVkaW8uc3JjID0gd2luXHJcbiAgbGV0IG11dGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZvbHVtZU11dGVkJykgXHJcbiAgbGV0IHZvbHVtZUxldmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZvbHVtZUxldmVsJykgXHJcbiBcclxuICBpZiAodm9sdW1lTGV2ZWwpIHsgYXVkaW8udm9sdW1lID0gdm9sdW1lTGV2ZWwgfVxyXG4gIGlmIChtdXRlZCA9PT0gJ011dGUnKSB7IFxyXG4gICAgYXVkaW8ubXV0ZWQgfSBlbHNlIHsgYXVkaW8ucGxheSgpIH1cclxuXHJcbiAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcblxyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XHJcbiAgbGV0IGNhdGVnb3J5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3J5JylcclxuICBpZiAoY2F0ZWdvcnkgPT09ICdwYWludGVycycpIHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBwYWludGVyc0dhbWVDYXJkLmdldFBhaW50ZXJzSW5mbygnd2luJywgbnVtLCBhdXRob3IsIG5hbWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBwYWludGluZ3NHYW1lQ2FyZC5nZXRQYWludGluZ3NJbmZvKCd3aW4nLCBudW0sIGF1dGhvciwgbmFtZSlcclxuICB9XHJcbiAgXHJcbiAgbW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudClcclxuICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1idXR0b24nKTtcclxuICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlck5leHQoKSwgeyBvbmNlOiB0cnVlIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5leHQoKSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJylcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3J5JykgPT09ICdwYWludGVycycpIHtcclxuICAgIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFpbnRlcnMtZ2FtZScpXHJcbiAgICBjb25zdCBwYWludGVyc0dhbWVMaXN0ID0gbmV3IFBhaW50ZXJzR2FtZUxpc3QoKVxyXG5cclxuICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgXHJcbiAgICBsZXQgbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdudW1iZXInKTtcclxuICAgIGlmICggbiA8IDkgKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdudW1iZXInLCBOdW1iZXIobikrMSlcclxuICAgICAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbGlzdCcpO1xyXG4gICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgY29uc3QgcGFpbnRlcnNHYW1lTGlzdCA9IG5ldyBQYWludGVyc0dhbWVMaXN0KClcclxuICAgICAgZ2FtZS5hcHBlbmQocGFpbnRlcnNHYW1lTGlzdC5lbGVtZW50KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFpbnRlcnNHYW1lTGlzdC5maW5pc2hHYW1lKClcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWludGluZ3MtZ2FtZScpXHJcbiAgICBjb25zdCBwYWludGluZ3NHYW1lTGlzdCA9IG5ldyBQYWludGluZ3NHYW1lTGlzdCgpXHJcblxyXG4gICAgY292ZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcclxuXHJcbiAgICBsZXQgbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdudW1iZXInKTtcclxuICAgIGlmICggbiA8IDggKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdudW1iZXInLCBOdW1iZXIobikrMSlcclxuICAgICAgbGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhaW50aW5ncy1nYW1lLWxpc3QnKTtcclxuICAgICAgZWwucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IHBhaW50aW5nc0dhbWVMaXN0ID0gbmV3IFBhaW50aW5nc0dhbWVMaXN0KClcclxuICAgICAgZ2FtZS5hcHBlbmQocGFpbnRpbmdzR2FtZUxpc3QuZWxlbWVudClcclxuICB9IGVsc2Uge1xyXG4gICAgcGFpbnRpbmdzR2FtZUxpc3QuZmluaXNoR2FtZSgpXHJcbiAgfX19IiwiaW1wb3J0IHsgUGFpbnRlcnNHYW1lQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFpbnRlcnNHYW1lQ2FyZCdcclxuaW1wb3J0IHsgUGFpbnRlcnNHYW1lTGlzdCB9IGZyb20gJy4uL3NlcnZpY2VzL1BhaW50ZXJzR2FtZSdcclxuaW1wb3J0IHsgUGFpbnRpbmdzR2FtZUNhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhaW50aW5nc0dhbWVDYXJkJ1xyXG5pbXBvcnQgeyBQYWludGluZ3NHYW1lTGlzdCB9IGZyb20gJy4uL3NlcnZpY2VzL1BhaW50aW5nc0dhbWUnXHJcbmltcG9ydCBsb3NlIGZyb20gJy4vLi4vYXNzZXRzL2F1ZGlvL2xvc2Uud2F2J1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbnN3ZXJXcm9uZyhhdXRob3JzQXJyLCBudW0sIG5hbWUsIGFyciwgYXV0aG9yKSB7XHJcbiAgY29uc3QgcGFpbnRlcnNHYW1lQ2FyZCA9IG5ldyBQYWludGVyc0dhbWVDYXJkKGF1dGhvcnNBcnIsIG51bSwgbmFtZSwgYXJyLCBhdXRob3IpXHJcbiAgY29uc3QgcGFpbnRpbmdzR2FtZUNhcmQgPSBuZXcgUGFpbnRpbmdzR2FtZUNhcmQoYXV0aG9yc0FyciwgbnVtLCBuYW1lLCBhcnIsIGF1dGhvcilcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKVxyXG5cclxuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgbGV0IG11dGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZvbHVtZU11dGVkJykgXHJcbiAgbGV0IHZvbHVtZUxldmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZvbHVtZUxldmVsJykgXHJcbiAgYXVkaW8uc3JjID0gbG9zZVxyXG4gIGlmICh2b2x1bWVMZXZlbCkgeyBhdWRpby52b2x1bWUgPSB2b2x1bWVMZXZlbCB9XHJcbiAgaWYgKG11dGVkID09PSAnTXV0ZScpIHsgXHJcbiAgICBhdWRpby5tdXRlZCB9IGVsc2UgeyBhdWRpby5wbGF5KCkgfVxyXG5cclxuICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuXHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcclxuICBsZXQgY2F0ZWdvcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcnknKVxyXG4gIGlmIChjYXRlZ29yeSA9PT0gJ3BhaW50ZXJzJykge1xyXG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IHBhaW50ZXJzR2FtZUNhcmQuZ2V0UGFpbnRlcnNJbmZvKCdsb3NlJywgbnVtLCBhdXRob3IsIG5hbWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBwYWludGluZ3NHYW1lQ2FyZC5nZXRQYWludGluZ3NJbmZvKCdsb3NlJywgbnVtLCBhdXRob3IsIG5hbWUpXHJcbiAgfVxyXG4gIFxyXG4gIG1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpXHJcbiAgY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYnV0dG9uJyk7XHJcbiAgbW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJOZXh0KCksIHsgb25jZTogdHJ1ZSB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZXh0KCkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yeScpID09PSAncGFpbnRlcnMnKSB7XHJcbiAgICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhaW50ZXJzLWdhbWUnKVxyXG4gICAgY29uc3QgcGFpbnRlcnNHYW1lTGlzdCA9IG5ldyBQYWludGVyc0dhbWVMaXN0KClcclxuXHJcbiAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gIFxyXG4gICAgbGV0IG4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtYmVyJyk7XHJcbiAgICBpZiAoIG4gPCA5ICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbnVtYmVyJywgTnVtYmVyKG4pKzEpXHJcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWxpc3QnKTtcclxuICAgICAgZWwucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IHBhaW50ZXJzR2FtZUxpc3QgPSBuZXcgUGFpbnRlcnNHYW1lTGlzdCgpXHJcbiAgICAgIGdhbWUuYXBwZW5kKHBhaW50ZXJzR2FtZUxpc3QuZWxlbWVudClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhaW50ZXJzR2FtZUxpc3QuZmluaXNoR2FtZSgpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFpbnRpbmdzLWdhbWUnKVxyXG4gICAgY29uc3QgcGFpbnRpbmdzR2FtZUxpc3QgPSBuZXcgUGFpbnRpbmdzR2FtZUxpc3QoKVxyXG5cclxuICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcblxyXG4gICAgbGV0IG4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtYmVyJyk7XHJcbiAgICBpZiAoIG4gPCA4ICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbnVtYmVyJywgTnVtYmVyKG4pKzEpXHJcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWludGluZ3MtZ2FtZS1saXN0Jyk7XHJcbiAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBwYWludGluZ3NHYW1lTGlzdCA9IG5ldyBQYWludGluZ3NHYW1lTGlzdCgpXHJcbiAgICAgIGdhbWUuYXBwZW5kKHBhaW50aW5nc0dhbWVMaXN0LmVsZW1lbnQpXHJcbiAgfSBlbHNlIHtcclxuICAgIHBhaW50aW5nc0dhbWVMaXN0LmZpbmlzaEdhbWUoKVxyXG4gIH19fSIsImV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb20oYW5zd2VyKSB7XHJcbiBcclxuICBsZXQgYXJyID0gW2Fuc3dlcl07XHJcbiAgd2hpbGUoYXJyLmxlbmd0aCA8IDQpe1xyXG4gICAgbGV0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSArIDE7XHJcbiAgICBpZihhcnIuaW5kZXhPZihyKSA9PT0gLTEpIGFyci5wdXNoKHIpO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICBsZXQgdGVtcCA9IGFycltpXTtcclxuICAgIGFycltpXSA9IGFycltqXTtcclxuICAgIGFycltqXSA9IHRlbXA7XHJcbiAgfVxyXG4gIHJldHVybiBhcnJcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRpbWUoZSkge1xyXG4gIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLWlucHV0JylcclxuICBsZXQgdGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJylcclxuICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcclxuXHJcbiAgaWYoIHRhcmdldC5pZCA9PT0gJ3RpbWUtbWludXMnKSB7XHJcbiAgICBpZih0aW1lID09PSAnNScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZSA9IE51bWJlcih0aW1lKSAtIDVcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWUnLCB0aW1lKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoIHRhcmdldC5pZCA9PT0gJ3RpbWUtcGx1cycpIHtcclxuICAgIGlmKHRpbWUgPT09ICczMCcpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZSA9IE51bWJlcih0aW1lKSArIDVcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWUnLCB0aW1lKVxyXG4gICAgfVxyXG4gIH1cclxuICB0aW1lSW5wdXQudmFsdWUgPSB0aW1lXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRWb2x1bWUoKSB7XHJcbiAgY29uc3Qgdm9sdW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtYnV0dG9uXCIpXHJcbiAgY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtc2xpZGVyXCIpXHJcblxyXG4gIHZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVyV2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh2b2x1bWVTbGlkZXIpLndpZHRoXHJcbiAgICBjb25zdCBuZXdWb2x1bWUgPSBlLm9mZnNldFggLyBwYXJzZUludChzbGlkZXJXaWR0aClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2b2x1bWVMZXZlbCcsIG5ld1ZvbHVtZSlcclxuICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLXBlcmNlbnRhZ2VcIikuc3R5bGUud2lkdGggPSBuZXdWb2x1bWUgKiAxMDAgKyAnJSdcclxuICB9LCB0cnVlKVxyXG5cclxuICB2b2x1bWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHZvbHVtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtY29udGFpbmVyIC52b2x1bWVcIilcclxuICAgIGxldCBtdXRlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2b2x1bWVNdXRlZCcpIFxyXG4gICAgaWYgKG11dGVkKSB7XHJcbiAgICAgIGlmIChtdXRlZCA9PT0gJ011dGUnKSB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZvbHVtZU11dGVkJywgJ01lZGl1bScpfSBcclxuICAgICAgZWxzZSB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZvbHVtZU11dGVkJywgJ011dGUnKX1cclxuICAgIH0gZWxzZSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2b2x1bWVNdXRlZCcsICdNdXRlJykgfVxyXG4gICAgaWYgKG11dGVkID09PSAnTWVkaXVtJykge1xyXG4gICAgICB2b2x1bWVFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaWNvbm8tdm9sdW1lTWVkaXVtXCIpXHJcbiAgICAgIHZvbHVtZUVsLmNsYXNzTGlzdC5hZGQoXCJpY29uby12b2x1bWVNdXRlXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2b2x1bWVFbC5jbGFzc0xpc3QuYWRkKFwiaWNvbm8tdm9sdW1lTWVkaXVtXCIpXHJcbiAgICAgIHZvbHVtZUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpY29uby12b2x1bWVNdXRlXCIpXHJcbiAgICB9XHJcbiAgfSwgdHJ1ZSlcclxufVxyXG5cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0FyaWFsLU1ULndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9Sb2JvdG8tVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW1nLzEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL2ltZy8yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaWNvbnMvZ2l0aHViLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaWNvbnMvcnNzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWwtTVRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgLyog0J/Rg9GC0Ywg0Log0YTQsNC50LvRgyDRgdC+INGI0YDQuNGE0YLQvtC8ICovXFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgLyog0J/Rg9GC0Ywg0Log0YTQsNC50LvRgyDRgdC+INGI0YDQuNGE0YLQvtC8ICovXFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E0RDBCQjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMCAyMHZ3O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDAgMTV2dztcXG4gIH1cXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6ICM3OUExQjA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uaG9tZSwgLnNldHRpbmdzIHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjVweCk7XFxufVxcblxcbi5ob21lLCAuc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ob21lLCAucGFpbnRlcnMtY2F0ZWdvcmllcywgLnBhaW50aW5ncy1jYXRlZ29yaWVzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5ob21lX19saW5rIHtcXG4gIGhlaWdodDogMjV2aDtcXG4gIHdpZHRoOiAzNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nOiAxMDBweCA4MHB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGJhY2tncm91bmQ6ICNFNUE1ODc7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuN3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuN3M7XFxufVxcbi5ob21lX19saW5rOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5ob21lX19saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERkNEQkY7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCA0cHggcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxufVxcblxcbi5ob21lX19saW5rX190aXRsZSB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI0VBRUFFQTtcXG4gIGNvbG9yOiAjRUFFQUVBO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmhvbWVfX2xpbmtfX3RpdGxlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5ob21lX19saW5rX190aXRsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzlBMUIwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzc5QTFCMDtcXG4gIGNvbG9yOiAjRUFFQUVBO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggNHB4IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbn1cXG5cXG4ucGFpbnRlcnMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ucGFpbnRpbmdzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGxldHRlci1zcGFjaW5nOiAwLjlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNzlBMUIwO1xcbiAgY29sb3I6ICM3OUExQjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OUExQjA7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNzlBMUIwO1xcbiAgY29sb3I6ICNFQUVBRUE7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCA0cHggcmdiYSgwLCAwLCAyNTUsIDAuMDUpO1xcbn1cXG5cXG4uc2V0dGluZ3NfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4udm9sdW1lLWNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udm9sdW1lLWNvbnRhaW5lciAudm9sdW1lLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnZvbHVtZS1jb250YWluZXIgLnZvbHVtZS1idXR0b24gLnZvbHVtZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxufVxcbi52b2x1bWUtY29udGFpbmVyIC52b2x1bWUtc2xpZGVyIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZDogI0VBRUFFQTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDBhO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi52b2x1bWUtY29udGFpbmVyIC52b2x1bWUtc2xpZGVyIC52b2x1bWUtcGVyY2VudGFnZSB7XFxuICBiYWNrZ3JvdW5kOiAjNzlBMUIwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MnB4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgbWFyZ2luOiA3cHg7XFxufVxcblxcbi5zd2l0Y2hfX3RleHQge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzlBMUIwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE5cHg7XFxuICB3aWR0aDogMTlweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERkNEQkY7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICNERkNEQkY7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGltZS1idXR0b24ge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM3OUExQjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZDREJGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG59XFxuLnRpbWUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OUExQjA7XFxuICBjb2xvcjogI0RGQ0RCRjtcXG59XFxuXFxuLnRpbWUtaW5wdXQge1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMCA2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgY29sb3I6ICM3OUExQjA7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAwLCAyNTUsIDAuMDUpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgY29sb3I6ICM3OUExQjA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE5MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XFxufVxcblxcbi5naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucnNzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDg2cHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgcGFkZGluZy1yaWdodDogMTExcHg7XFxufVxcblxcbi5yc3MteWVhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgY29sb3I6ICM3OUExQjA7XFxuICBsaW5lLWhlaWdodDogMC44O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yc3M6aG92ZXIgLnJzcy15ZWFyIHtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi55ZWFyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jYXRlZ29yaWVzLW1lbnUsIC5yZXN1bHRzLW1lbnUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5jYXRlZ29yeS1tZW51X19pdGVtLCAucmVzdWx0cy1tZW51X19pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFFQUVBO1xcbn1cXG4uY2F0ZWdvcnktbWVudV9faXRlbTpob3ZlciwgLnJlc3VsdHMtbWVudV9faXRlbTpob3ZlciB7XFxuICBjb2xvcjogIzc5QTFCMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzlBMUIwO1xcbn1cXG5cXG4ucGFpbnRlcnMtbGlzdCwgLnBhaW50aW5ncy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDE2MDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgY29sdW1uLWdhcDogMTNweDtcXG59XFxuXFxuLmNhdGVnb3J5LWltYWdlIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXRlZ29yeS1jYXJkOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDRweCByZ2JhKDAsIDAsIDI1NSwgMC4yKTtcXG59XFxuXFxuLmNhdGVnb3J5LWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDJweCAxMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM3OUExQjA7XFxufVxcblxcbi5jYXRlZ29yeS1yZXBlYXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMnB4KTtcXG4gIHRvcDogY2FsYygxMDAlIC0gNDFweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5jYXRlZ29yeS1yZXBlYXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uZ2FtZS1pbWFnZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCA0cHggcmdiYSgwLCAwLCAyNTUsIDAuMik7XFxufVxcblxcbi5nYW1lLWltYWdlIHtcXG4gIHdpZHRoOiAzMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5xdWVzdGlvbiwgLnBhaW50aW5ncy1xdWVzdGlvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzc5QTFCMDtcXG4gIG1hcmdpbjogMjBweCAxMHB4O1xcbn1cXG5cXG4uYW5zd2Vycy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIHJvdy1nYXA6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDEwcHgpIHtcXG4gIC5hbnN3ZXJzLXdyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gIC5hbnN3ZXJzLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiA1cHggMTV2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XFxuICAuYW5zd2Vycy13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogNXB4IDE4dnc7XFxuICAgIHJvdy1nYXA6IDEycHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcXG4gIC5hbnN3ZXJzLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiA1cHggMjB2dztcXG4gICAgcm93LWdhcDogMTJweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLmFuc3dlcnMtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDVweCAyMnZ3O1xcbiAgfVxcbn1cXG4uYW5zd2VyLCAucGFpbnRpbmdzLWFuc3dlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uYW5zd2VyOmhvdmVyLCAucGFpbnRpbmdzLWFuc3dlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCA0cHggcmdiYSgwLCAwLCAyNTUsIDAuMik7XFxufVxcblxcbi5hbnN3ZXIge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0VBRUFFQTtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuLnBhaW50aW5ncy1hbnN3ZXIge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG4ucGFpbnRpbmdzLWFuc3dlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCA0cHggcmdiYSgwLCAwLCAyNTUsIDAuMik7XFxufVxcblxcbi5hbnN3ZXJfY2xpY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzlBMUIwO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG4gIHRvcDogNDcwcHg7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmNhcm91c2VsX19pdGVtIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUVBRUE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbF9hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1QTU4NztcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcmVtO1xcbiAgbGVmdDogMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDQxLCA0MSwgMC42KTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzIwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI1JTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTI1cHgpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUwZTA7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtaW1hZ2Uge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm1vZGFsLW5hbWUsIC5tb2RhbC1hdXRob3Ige1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcmVtO1xcbiAgbGVmdDogMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDQxLCA0MSwgMC42KTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGFpbnRpbmdzLWFuc3dlcnMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgLnBhaW50aW5ncy1hbnN3ZXJzLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4IDgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2OTBweCkge1xcbiAgLnBhaW50aW5ncy1hbnN3ZXIge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICAgIG1hcmdpbjogN3B4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSB7XFxuICAucGFpbnRpbmdzLWFuc3dlcnMtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQU9oQjtFQUNFLHVCQUFBO0VBQ0EsNENBQUE7RUFBMEMsNEJBQUE7QUFKNUM7QUFPQztFQUNDLHFCQUFBO0VBQ0EsNENBQUE7RUFBNEMsNEJBQUE7QUFKOUM7QUFPQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFMRjs7QUFRQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBN0JTO0FBd0JYOztBQU9BO0VBQ0U7SUFDRSxjQUFBO0VBSkY7QUFDRjtBQU1BO0VBQ0U7SUFDRSxjQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0UsYUFBQTtFQUNBLGNBdkNZO0VB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LGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXhCRjs7QUEyQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBMWdCVztFQTJnQlgsZUFBQTtBQXhCRjs7QUEyQkE7RUFDRSx5QkFqaEJhO0FBeWZmOztBQTZCQTtFQUNFLGFBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0FBM0JGOztBQThCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0R0FBQTtFQUNBLGtCQUFBO0FBM0JGOztBQThCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBM0JGOztBQThCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUEzQkY7O0FBK0JBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFHQSxvQkFBQTtBQTlCRjs7QUFtQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBaENGOztBQWtDQTtFQUNFO0lBQ0Usa0JBQUE7RUEvQkY7QUFDRjtBQWlDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VBL0JGO0FBQ0Y7QUFpQ0E7RUFDRTtJQUNFLG1CQUFBO0VBL0JGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJnLWNvbG9yOiAjQTREMEJCO1xcclxcbiRidXR0b24tY29sb3I6ICNFNUE1ODc7XFxyXFxuJGJ1dHRvbi1ob3ZlcjogI2QzYjE5NztcXHJcXG4kZm9udC1jb2xvcjogI0VBRUFFQTtcXHJcXG4kYWRkLWNvbG9yOiAjREZDREJGO1xcclxcbiRicmlnaHQtY29sb3I6Izc5QTFCMDtcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwtTVQnO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0FyaWFsLU1ULndvZmZcXFwiKTsgLyog0J/Rg9GC0Ywg0Log0YTQsNC50LvRgyDRgdC+INGI0YDQuNGE0YLQvtC8ICovXFxyXFxuIH1cXHJcXG5cXHJcXG4gQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvUm9ib3RvLVRoaW4udHRmXFxcIik7IC8qINCf0YPRgtGMINC6INGE0LDQudC70YMg0YHQviDRiNGA0LjRhNGC0L7QvCAqL1xcclxcbiB9XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDAgMjB2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwIDE1dnc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGNvbG9yOiAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUsIC5zZXR0aW5ncyB7XFxyXFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTY1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSwgLnNldHRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSwgLnBhaW50ZXJzLWNhdGVnb3JpZXMsIC5wYWludGluZ3MtY2F0ZWdvcmllcyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gIHBhZGRpbmc6IDIwcHg7ICAgXFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncyB7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAgIFxcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfX2xpbmsge1xcclxcbiAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgd2lkdGg6IDM0MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4IDgwcHggNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxuICBiYWNrZ3JvdW5kOiAkYnV0dG9uLWNvbG9yO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzIGxpbmVhcix0cmFuc2Zvcm0gLjdzLC13ZWJraXQtdHJhbnNmb3JtIC43cztcXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhZGQtY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDRweCByZ2IoMCAwIDI1NSAvIDEwJSk7XFxyXFxuICAgIC8vb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9fbGlua19fdGl0bGUge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFQUVBRUE7XFxyXFxuICBjb2xvcjogI0VBRUFFQTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJGZvbnQtY29sb3I7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDRweCByZ2IoMCAwIDI1NSAvIDEwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWludGVycyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltYWdlcy9pbWcvMS5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFpbnRpbmdzIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvaW1hZ2VzL2ltZy8yLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjlweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgY29sb3I6ICRicmlnaHQtY29sb3I7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1jb2xvcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGJyaWdodC1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRmb250LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDRweCA0cHggcmdiKDAgMCAyNTUgLyA1JSk7XFxyXFxufVxcclxcbn1cXHJcXG5cXHJcXG4vLyBTZXR0aW5nc1xcclxcblxcclxcbi5zZXR0aW5nc19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi52b2x1bWUtY29udGFpbmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAudm9sdW1lLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLnZvbHVtZSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAudm9sdW1lLXNsaWRlciB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRmb250LWNvbG9yO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcclxcbiAgICAudm9sdW1lLXBlcmNlbnRhZ2Uge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRicmlnaHQtY29sb3I7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gU2V0dGluZ3MgU3dpdGNoLWJ1dHRvblxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNTJweDtcXHJcXG4gIGhlaWdodDogMjdweDtcXHJcXG4gIG1hcmdpbjogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoX190ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxyXFxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cXHJcXG5cXHJcXG4vKiBUaGUgc2xpZGVyICovXFxyXFxuLnNsaWRlciB7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1jb2xvcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGhlaWdodDogMTlweDtcXHJcXG4gIHdpZHRoOiAxOXB4O1xcclxcbiAgbGVmdDogNHB4O1xcclxcbiAgYm90dG9tOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udC1jb2xvcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAkYWRkLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFkZC1jb2xvcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2IoMCAwIDI1NSAvIDUlKTtcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgICBjb2xvcjogJGFkZC1jb2xvcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtaW5wdXQge1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIG1hcmdpbjogMCA2cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgY29sb3I6ICRicmlnaHQtY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDAgMCAyNTUgLyA1JSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8vIEZvb3Rlclxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxyXFxuICBjb2xvcjogJGJyaWdodC1jb2xvcjtcXHJcXG5cXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTkyMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbi5naXRodWIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoJy4uL3NyYy9hc3NldHMvaWNvbnMvZ2l0aHViLnN2ZycpOyBcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMzVweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xcclxcbn1cXHJcXG4uZ2l0aHViOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJzcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4NnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvYXNzZXRzL2ljb25zL3Jzcy5zdmcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDExMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnNzLXllYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBmb250LXNpemU6IDIxcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTJweDtcXHJcXG4gIGNvbG9yOiAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgbGluZS1oZWlnaHQ6IDAuODtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG4ucnNzOmhvdmVyIC5yc3MteWVhciB7XFxyXFxuICByaWdodDogLTVweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ueWVhciB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBQYWludGVycyBDYXRlZ29yaWVzXFxyXFxuXFxyXFxuLmNhdGVnb3JpZXMtbWVudSwgLnJlc3VsdHMtbWVudSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5LW1lbnVfX2l0ZW0sIC5yZXN1bHRzLW1lbnVfX2l0ZW0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRmb250LWNvbG9yO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYnJpZ2h0LWNvbG9yO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFpbnRlcnMtbGlzdCwgLnBhaW50aW5ncy1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDE2MDBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgY29sdW1uLWdhcDogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5LWltYWdlIHtcXHJcXG53aWR0aDogMTUwcHg7XFxyXFxuaGVpZ2h0OiAxNTBweDtcXHJcXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbi8vYm9yZGVyLXJhZGl1czogOXB4OyBcXHJcXG4vL3RyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cyBsaW5lYXIsLXdlYmtpdC10cmFuc2Zvcm0gLjdzO1xcclxcbi8vdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzIGxpbmVhcix0cmFuc2Zvcm0gLjdzO1xcclxcbi8vdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzIGxpbmVhcix0cmFuc2Zvcm0gLjdzLC13ZWJraXQtdHJhbnNmb3JtIC43c1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktY2FyZDpob3ZlciB7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbmJveC1zaGFkb3c6IDFweCAycHggNHB4IDRweCByZ2JhKDAsIDAsIDI1NSwgLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAvL21heC13aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE2NHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb250LWNvbG9yO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDJweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICRicmlnaHQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS1yZXBlYXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogY2FsYyg1MCUgLSAxMnB4KTtcXHJcXG4gIHRvcDogY2FsYygxMDAlIC0gNDFweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udC1jb2xvcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBQYWludGVycyBHYW1lXFxyXFxuXFxyXFxuLmdhbWUtaW1hZ2U6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggNHB4IHJnYmEoMCwgMCwgMjU1LCAuMik7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAzMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5xdWVzdGlvbiwgLnBhaW50aW5ncy1xdWVzdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogJGJyaWdodC1jb2xvcjtcXHJcXG4gIG1hcmdpbjogMjBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2Vycy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIHJvdy1nYXA6IDVweDtcXHJcXG4gIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0MTBweCkge1xcclxcbiAgLmFuc3dlcnMtd3JhcHBlciB7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xcclxcbiAgLmFuc3dlcnMtd3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcXHJcXG4gIC5hbnN3ZXJzLXdyYXBwZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTh2dztcXHJcXG4gICAgcm93LWdhcDogMTJweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcclxcbiAgLmFuc3dlcnMtd3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHZ3O1xcclxcbiAgICByb3ctZ2FwOiAxMnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAuYW5zd2Vycy13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIydnc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXIsIC5wYWludGluZ3MtYW5zd2VyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDRweCA0cHggcmdiYSgwLCAwLCAyNTUsIC4yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlciB7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkZm9udC1jb2xvcjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhaW50aW5ncy1hbnN3ZXIge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggNHB4IHJnYmEoMCwgMCwgMjU1LCAuMik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXJfY2xpY2tlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJpZ2h0LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBQYWdpbmF0aW9uIFxcclxcblxcclxcbi5jYXJvdXNlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xcclxcbiAgdG9wOiA0NzBweDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWxfX2l0ZW0ge1xcclxcbiAgd2lkdGg6IDhweDtcXHJcXG4gIGhlaWdodDogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvbnQtY29sb3I7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbF9hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTW9kYWxcXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb3ZlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDByZW07XFxyXFxuICBsZWZ0OiAwcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSwgNDEsIDQxLCAwLjYpO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAzMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMjUlO1xcclxcbiAgbGVmdDogY2FsYyg1MCUgLSAxMjVweCk7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTBlMDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAzcHggNHB4IHJnYigwIDAgMCAvIDEyJSksIDBweCAycHggNHB4IHJnYigwIDAgMCAvIDE0JSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWljb24ge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLW5hbWUsIC5tb2RhbC1hdXRob3Ige1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgLy9jb2xvcjogJGJyaWdodC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMHJlbTtcXHJcXG4gIGxlZnQ6IDByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLCA0MSwgNDEsIDAuNik7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICAvL2N1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lXFxyXFxufVxcclxcblxcclxcbi8vIFBhaW50aW5ncyBHYW1lIFxcclxcblxcclxcbi5wYWludGluZ3MtYW5zd2Vycy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XFxyXFxuICAucGFpbnRpbmdzLWFuc3dlcnMtd3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY5MHB4KSB7XFxyXFxuICAucGFpbnRpbmdzLWFuc3dlciB7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gICAgbWFyZ2luOiA3cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcXHJcXG4gIC5wYWludGluZ3MtYW5zd2Vycy13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxMDBweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIkhvbWUiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInJvb3RFbGVtZW50IiwiaGVhZGVyIiwiYXBwZW5kIiwiZWxlbWVudCIsIm1haW4iLCJmb290ZXIiLCJCYXNlQ29tcG9uZW50IiwiQ292ZXIiLCJpbm5lckhUTUwiLCJNb2RhbCIsIlBhaW50ZXJzQ2FyZCIsImkiLCJudW0iLCJhbnN3ZXJXcm9uZyIsImFuc3dlclJpZ2h0IiwiQ2FyZENvbnRlbnQiLCJhdXRob3JzQXJyIiwibmFtZSIsImFyciIsImF1dGhvciIsIlBhaW50ZXJzR2FtZUNhcmQiLCJvbmUiLCJjYXJkIiwibW9kYWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNoZWNrQW5zd2VyIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpbm5lclRleHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImdldFBhaW50ZXJzSW5mbyIsInN0YXRlIiwiY29udGVudCIsImNsZWFyIiwiUGFpbnRpbmdzQ2FyZCIsImltYWdlc0FyciIsIlBhaW50aW5nc0dhbWVDYXJkIiwiZGF0YXNldCIsImdldFBhaW50aW5nc0luZm8iLCJ0YWciLCJzdHlsZXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJTaXRlVGl0bGUiLCJzaXRlVGl0bGUiLCJhcHBlbmRDaGlsZCIsIlBhaW50ZXJzQ2F0ZWdvcmllcyIsIlBhaW50aW5nc0NhdGVnb3JpZXMiLCJQYWludGVyc0dhbWUiLCJQYWludGluZ3NHYW1lIiwiU2V0dGluZ3MiLCJSZXN1bHRzIiwiYXBwRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9jYXRpb25SZXNvbHZlciIsImxvY2F0aW9uIiwiZWxlbSIsImhvbWUiLCJzZXR0aW5ncyIsInJlc3VsdHMiLCJwYWludGVyc0NhdGVnb3JpZXMiLCJwYWludGluZ3NDYXRlZ29yaWVzIiwicGFpbnRlcnNHYW1lIiwicGFpbnRpbmdzR2FtZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb290ZXJFbCIsImNvdmVyIiwicmVtb3ZlQ2hpbGQiLCJpbml0QXBwIiwiRXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwid2luZG93IiwiUGFpbnRlcnMiLCJjbGljayIsIlBhaW50aW5ncyIsIlNldHRpbmdzQnV0dG9uIiwicGFpbnRlcnMiLCJwYWludGluZ3MiLCJidXR0b24iLCJyZW1vdmUiLCJQYWludGVyc0xpc3QiLCJQYWludGVyc01lbnUiLCJjbGlja01lbnUiLCJjb25zb2xlIiwibG9nIiwibWVudSIsInBhaW50ZXJzTGlzdCIsInNldCIsInNldENhdGVnb3JpZXMiLCJzZXRUYXJnZXQiLCJjYXJkcyIsInJlbW92ZUl0ZW0iLCJwYXJlbnROb2RlIiwiZ2V0SXRlbSIsInJlcyIsImZldGNoIiwiY2F0ZWdvcmllcyIsImpzb24iLCJhcnJheSIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsInB1c2giLCJwYWludGVyc0NhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImltYWdlTnVtIiwiZm9yRWFjaCIsInNldEFycmF5IiwiUGFpbnRpbmdzTGlzdCIsIlBhaW50aW5nc01lbnUiLCJwYWludGluZ3NDYXJkcyIsIlJlc3VsdHNNZW51IiwiUmVzdWx0c0NvbnRlbnQiLCJzZXRUaW1lIiwic2V0Vm9sdW1lIiwiU2V0dGluZ3NNZW51IiwiVm9sdW1lQnV0dG9uIiwibXV0ZWQiLCJWb2x1bWVTbGlkZXIiLCJ3aWR0aCIsIlZvbHVtZUNvbnRhaW5lciIsInNsaWRlciIsIlN3aXRjaEJ1dHRvbiIsImlzUGxheSIsIlN3aXRjaFRleHQiLCJ0ZXh0IiwiU3dpdGNoQ29udGFpbmVyIiwiU2V0dGluZ3NUaXRsZSIsInRpdGxlIiwiVGltZUNvbnRhaW5lciIsImNvbnRhaW5lciIsInRpbWVDb250YWluZXIiLCJnZXRSYW5kb20iLCJQYWludGVyc0dhbWVNZW51IiwiUXVlc3Rpb24iLCJQYWdpbmF0aW9uIiwiUGFpbnRlcnNHYW1lTGlzdCIsImdhbWUiLCJzZXRHYW1lIiwibiIsIk51bWJlciIsImFuc3dlcnNBcnIiLCJnYW1lQ2FyZHMiLCJmaW5pc2hHYW1lIiwiY2Fyb3VzZWwiLCJsaXN0IiwiUGFpbnRpbmdzR2FtZU1lbnUiLCJQYWludGluZ3NHYW1lTGlzdCIsInBhaW50aW5nc0xpc3QiLCJ3aW4iLCJwYWludGVyc0dhbWVDYXJkIiwicGFpbnRpbmdzR2FtZUNhcmQiLCJhdWRpbyIsIkF1ZGlvIiwic3JjIiwidm9sdW1lTGV2ZWwiLCJ2b2x1bWUiLCJwbGF5IiwibW9kYWxDb250ZW50IiwiY2F0ZWdvcnkiLCJtb2RhbEJ1dHRvbiIsInJlbmRlck5leHQiLCJvbmNlIiwicGFpbnRlcnNHYW1lTGlzdCIsInBhaW50aW5nc0dhbWVMaXN0IiwibG9zZSIsImFuc3dlciIsInIiLCJyYW5kb20iLCJpbmRleE9mIiwiaiIsInRlbXAiLCJ0aW1lSW5wdXQiLCJ0aW1lIiwiaWQiLCJ2YWx1ZSIsInZvbHVtZUJ1dHRvbiIsInZvbHVtZVNsaWRlciIsInNsaWRlcldpZHRoIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm5ld1ZvbHVtZSIsIm9mZnNldFgiLCJwYXJzZUludCIsInZvbHVtZUVsIl0sInNvdXJjZVJvb3QiOiIifQ==