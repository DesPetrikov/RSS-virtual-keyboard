import createHtml from '../../createHtml';
import { TextArea } from '../TextArea/TextArea';
import { Keyboard } from '../Keyboard/Keyboard';
import { serviceCodes } from '../../data';
import styles from './Main.module.css';
import buttonStyles from '../Button/Button.module.css';
import { Button } from '../Button/Button';

export class Main {
  private parent: HTMLElement;

  textArea: TextArea;

  keyboard: Keyboard;

  areaValue: string = '';

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.createMain();
  }

  createMain() {
    const container = createHtml('main', styles.main, this.parent);
    this.textArea = new TextArea(container);
    this.keyboard = new Keyboard(container);

    this.keyboard.container.addEventListener(
      'mousedown',
      this.mouseDownHandler
    );
    this.keyboard.container.addEventListener('mouseup', this.mouseUpHandler);
    document.addEventListener('keydown', this.keyDownHandler);
    document.addEventListener('keyup', this.keyUpHandler);
  }

  mouseDownHandler = (e: Event) => {
    if (e.target instanceof HTMLButtonElement) {
      const dataCode = e.target.dataset.code;
      if (!serviceCodes.includes(dataCode)) {
        this.areaValue += e.target.innerText;
      }
      this.updateAreaValue();
      e.target.classList.add(buttonStyles.active);
    }
  };

  mouseUpHandler = (e: Event) => {
    if (e.target instanceof HTMLButtonElement) {
      e.target.classList.remove(buttonStyles.active);
    }
  };

  keyDownHandler = (e: KeyboardEvent) => {
    e.preventDefault();
    if (!serviceCodes.includes(e.code)) {
      this.areaValue += e.key;
    }
    const index = this.keyboard.buttonsArr.findIndex(
      (el) => el.data.code === e.code
    );
    if (index !== -1) {
      this.keyboard.buttonsArr[index].button.classList.add(buttonStyles.active);
    }
    this.updateAreaValue();
  };

  keyUpHandler = (e: KeyboardEvent) => {
    e.preventDefault();
    const index = this.keyboard.buttonsArr.findIndex(
      (el) => el.data.code === e.code
    );
    if (index !== -1) {
      this.keyboard.buttonsArr[index].button.classList.remove(
        buttonStyles.active
      );
    }
  };

  updateAreaValue = () => {
    const textAreaNode = this.textArea.container as HTMLTextAreaElement;
    textAreaNode.value = this.areaValue;
  };
}
