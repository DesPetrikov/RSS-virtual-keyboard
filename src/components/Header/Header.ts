import createHtml from '../../createHtml';
import styles from './Header.module.css';
import languageSvg from '../../assets/svg/language.svg';

export class Header {
  private parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createHeader();
  }

  createHeader() {
    const listsContent = [
      'Designed for Windows',
      `To switch the language press/click <b>left shift + ctrl</b> or click `,
    ];
    const container = createHtml('header', styles.header, this.parent);
    const title = createHtml('h1', styles.title, container);
    title.innerText = 'Virtual Keyboard';
    const ul = createHtml('ul', styles.lists, container);
    listsContent.forEach((el, idx) => {
      const list = createHtml('li', styles.list, ul);
      list.innerHTML = el;
      if (idx === 1) {
        const icon = createHtml('div', styles.icon, list);
        icon.style.webkitMaskImage = `url(${languageSvg})`;
      }
    });
  }
}
