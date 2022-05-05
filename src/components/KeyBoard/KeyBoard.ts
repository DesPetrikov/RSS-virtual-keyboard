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
        const button = new Button(rowContainer, el);
        this.buttonsArr.push(button);
      });
    });
  }
}
