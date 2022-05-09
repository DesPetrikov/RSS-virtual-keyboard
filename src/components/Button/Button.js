import createHtml from '../../createHtml';
import styles from './Button.module.css';
import { wideButtons } from '../../data';

export class Button {
  constructor(parent, data, language) {
    this.parent = parent;
    this.data = data;
    this.language = language;
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
    this.button.innerHTML = this.data[this.language].key;
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
