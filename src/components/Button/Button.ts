import createHtml from '../../createHtml';
import styles from './Button.module.css';

export class Button {
  private parent: HTMLElement;

  private content: string;

  private key: string;

  private image: string;

  constructor(
    parent: HTMLElement,
    content: string,
    key: string,
    image?: string
  ) {
    this.parent = parent;
    this.content = content;
    this.key = key;
    this.image = image;
    this.creteButton();
  }

  creteButton() {
    const button = createHtml(
      'button',
      styles.button,
      this.parent,
      '',
      `data-key, ${this.key}`
    );
    button.innerHTML = this.content;
    if (this.image) {
      button.style.backgroundImage = `url(${this.image})`;
    }
  }
}
