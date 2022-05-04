import createHtml from '../../createHtml';
import { Button } from '../Button/Button';
import { data } from '../../data';
import styles from './Keyboard.module.css';

export class Keyboard {
  private parent: HTMLElement;

  container: HTMLElement;

  buttonsArr: Button[] = [];

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createKeyboard();
  }

  createKeyboard() {
    this.container = createHtml('div', styles.keyboard, this.parent);
    data.forEach((row) => {
      const rowContainer = createHtml('div', styles.row, this.container);
      row.forEach((el) => {
        let button;
        if (el.image) {
          button = new Button(rowContainer, el.en.key, el.code, el.image);
        } else {
          button = new Button(rowContainer, el.en.key, el.code);
        }
        this.buttonsArr.push(button);
      });
    });
  }
}
