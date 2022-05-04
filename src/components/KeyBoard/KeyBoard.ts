import createHtml from '../../createHtml';
import { Button } from '../Button/Button';
import { data } from '../../data';
import styles from './Keyboard.module.css';

export class Keyboard {
  private parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createKeyboard();
  }

  createKeyboard() {
    const container = createHtml('div', styles.keyboard, this.parent);
    data.forEach((row) => {
      const rowContainer = createHtml('div', styles.row, container);
      row.forEach((el) => {
        if (el.image) {
          const button = new Button(
            rowContainer,
            el.en.content,
            el.code,
            el.image
          );
        } else {
          const button = new Button(rowContainer, el.en.content, el.code);
        }
      });
    });
  }
}
