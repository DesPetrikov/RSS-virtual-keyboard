import createHtml from '../../createHtml';
import { TextArea } from '../TextArea/TextArea';
import { Keyboard } from '../Keyboard/Keyboard';
import styles from './Main.module.css';

export class Main {
  private parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createMain();
  }

  createMain() {
    const container = createHtml('main', styles.main, this.parent);
    const textArea = new TextArea(container);
    const keyboard = new Keyboard(container);
  }
}
