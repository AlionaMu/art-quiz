import './style.scss';
import { App } from './app';

import { PaintersCategories } from './pages/PaintersCategories'
import { PaintingsCategories } from './pages/PaintingsCategories'
import { PaintersGame } from './services/PaintersGame'
import { PaintingsGame } from './services/PaintingsGame';
import { Settings } from './pages/Settings';
import { Results } from './pages/Results';
import { Home } from './pages/Home.js'
import { Footer } from './components/Footer.js'
import { Cover } from './components/Cover.js'

const appElement = document.getElementById('app')

export const locationResolver = (location, elem) => {

  const home = new Home()
  const settings = new Settings()
  const results = new Results()
  const paintersCategories = new PaintersCategories()
  const paintingsCategories = new PaintingsCategories()
  const paintersGame = new PaintersGame() 
  const paintingsGame = new PaintingsGame() 
  const main = document.querySelector('main')
  const footerEl = document.querySelector('footer')
  const footer = new Footer()
  const cover = new Cover()

  appElement.removeChild(main)
  appElement.removeChild(footerEl)
  switch (location) {
    case 'home':
      appElement.appendChild(home.element)
      break
    case 'settings':
      appElement.appendChild(settings.element)
      break
    case 'paintersCategories':
      appElement.appendChild(paintersCategories.element)
      break
    case 'paintingsCategories':
      appElement.appendChild(paintingsCategories.element)
      break
    case 'paintersGame':
      appElement.appendChild(paintersGame.element)
      break
    case 'paintingsGame':
      appElement.appendChild(paintingsGame.element)
      break
    case 'results':
      appElement.appendChild(results.element)
      break
  }
  appElement.appendChild(footer.element)
  appElement.appendChild(cover.element)
};

const initApp = () => {
  if (!appElement) throw Error('App root element not found');
  new App(appElement);
  localStorage.setItem('time', '5')
};

window.addEventListener('load', () => initApp());