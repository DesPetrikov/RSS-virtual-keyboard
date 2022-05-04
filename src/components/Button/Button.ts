import createHtml from '../../createHtml';
import styles from './Button.module.css';

export class Button {
  private parent: HTMLElement;

  private content: string;

  code: string;

  private image: string;

  button: HTMLElement;

  constructor(
    parent: HTMLElement,
    content: string,
    code: string,
    image?: string
  ) {
    this.parent = parent;
    this.content = content;
    this.code = code;
    this.image = image;
    this.creteButton();
  }

  creteButton() {
    this.button = createHtml(
      'button',
      styles.button,
      this.parent,
      '',
      `data-code, ${this.code}`
    );
    this.button.innerHTML = this.content;
    if (this.image) {
      this.button.style.backgroundImage = `url(${this.image})`;
    }
  }
}
