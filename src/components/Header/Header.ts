import createHtml from '../../createHtml';
import styles from './Header.module.css';

export class Header {
  private parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createHeader();
  }

  createHeader() {
    const listsContent = [
      'Made for Windows',
      `To switch language press <b>left shift + alt</b>`,
    ];
    const container = createHtml('header', styles.header, this.parent);
    const title = createHtml('h1', styles.title, container);
    title.innerText = 'RSS Virtual Keyboard';
    const ul = createHtml('ul', styles.lists, container);
    listsContent.forEach((el) => {
      const list = createHtml('li', styles.list, ul);
      list.innerHTML = el;
    });
  }
}
