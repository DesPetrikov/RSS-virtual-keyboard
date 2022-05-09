import createHtml from '../../createHtml';
import { Button } from '../Button/Button';
import { data, serviceCodes } from '../../data';
import styles from './Keyboard.module.css';

export class Keyboard {
  constructor(parent, language) {
    this.buttonsArr = [];
    this.typingButtons = [];
    this.parent = parent;
    this.language = language;
    this.createKeyboard();
  }

  createKeyboard() {
    this.container = createHtml('div', styles.keyboard, this.parent);
    data.forEach((row) => {
      const rowContainer = createHtml('div', styles.row, this.container);
      row.forEach((el) => {
        const button = new Button(rowContainer, el, this.language);
        this.buttonsArr.push(button);
        if (!serviceCodes.includes(button.data.code)) {
          this.typingButtons.push(button);
        }
      });
    });
  }
}
