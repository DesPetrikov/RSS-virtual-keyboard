import createHtml from '../../createHtml';
import styles from './Button.module.css';
import { dataType } from '../../commonTypes/dataType.types';
import { wideButtons } from '../../data';

export class Button {
  private parent: HTMLElement;

  button: HTMLElement;

  data: dataType;

  constructor(parent: HTMLElement, data: dataType) {
    this.parent = parent;
    this.data = data;
    this.creteButton();
  }

  creteButton() {
    this.button = createHtml(
      'button',
      styles.button,
      this.parent,
      '',
      `data-code, ${this.data.code}`
    );
    this.button.innerHTML = this.data.en.key;
    if (this.data.image) {
      this.button.style.backgroundImage = `url(${this.data.image})`;
    }
    if (wideButtons.includes(this.data.code)) {
      this.button.classList.add(styles.wideButton);
    }
    if (this.data.code === 'Space') {
      this.button.classList.add(styles.space);
    }
  }
}
