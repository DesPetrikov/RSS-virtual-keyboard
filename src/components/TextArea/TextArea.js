import createHtml from '../../createHtml';
import styles from './TextArea.moodule.css';

export class TextArea {
  constructor(parent) {
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
    );
  }
}
