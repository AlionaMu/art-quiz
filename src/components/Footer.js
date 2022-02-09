import { BaseComponent } from './base-component';

export class Footer extends BaseComponent {
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
