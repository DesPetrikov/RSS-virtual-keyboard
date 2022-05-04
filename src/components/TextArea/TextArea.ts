import createHtml from '../../createHtml';
import styles from './TextArea.moodule.css';

export class TextArea {
  private parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createTextArea();
  }

  createTextArea() {
    const container = createHtml(
      'textarea',
      styles.textarea,
      this.parent,
      '',
      'autofocus, true'
    );
    container.addEventListener('input', (e: Event) => {
      // console.log((e.target as HTMLInputElement).value);
    });
  }
}
