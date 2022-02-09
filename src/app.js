import { Header } from './components/header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

//const main = document.querySelector('main');

export class App {
  constructor(rootElement) {
    this.header = new Header();
    rootElement.append(this.header.element)

    this.main = new Home();
    rootElement.append(this.main.element);

     /*this.modal = new Modal();
    this.rootElement.appendChild(this.modal.element);*/

    this.footer = new Footer();
    rootElement.append(this.footer.element);

    //this.rootElement.addEventListener('click', (e) => mainClickHandler(e));
  }
}