import createHtml from '../../createHtml';
import styles from './TextArea.moodule.css';

export class TextArea {
  private parent: HTMLElement;

  container: HTMLTextAreaElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createTextArea();
  }

  createTextArea() {
    this.container = createHtml(
      'textarea',
      styles.textarea,
      this.parent,
      '',
      'autofocus, true'
    ) as HTMLTextAreaElement;
  }
}
