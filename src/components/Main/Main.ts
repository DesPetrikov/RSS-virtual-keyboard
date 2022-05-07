import createHtml from '../../createHtml';
import { TextArea } from '../TextArea/TextArea';
import { Keyboard } from '../Keyboard/Keyboard';
import { serviceCodes } from '../../data';
import styles from './Main.module.css';
import buttonStyles from '../Button/Button.module.css';
import { Button } from '../Button/Button';
import { languageType } from '../../commonTypes/language.types';

export class Main {
  private parent: HTMLElement;

  container: HTMLElement;

  textArea: TextArea;

  keyboard: Keyboard;

  areaValue: string = '';

  capsLock: Boolean = false;

  shift: Boolean = false;

  language: languageType;

  private targetButton: Button;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.getLanguage();
    this.createMain();
  }

  createMain() {
    this.container = createHtml('main', styles.main, this.parent);
    this.textArea = new TextArea(this.container);
    this.keyboard = new Keyboard(this.container, this.language);

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
      this.targetButton = this.keyboard.buttonsArr.find(
        (el) => el.data.code === dataCode
      );
      this.updateAreaValue();
      this.targetButton.button.classList.add(buttonStyles.active);
      this.serviceButtonsHandler(this.targetButton);
    }
  };

  mouseUpHandler = (e: Event) => {
    if (e.target instanceof HTMLButtonElement) {
      this.targetButton.button.classList.remove(buttonStyles.active);
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
      this.serviceButtonsHandler(this.keyboard.buttonsArr[index]);
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

  serviceButtonsHandler = (currentButton: Button) => {
    switch (currentButton.data.code) {
      case 'CapsLock':
        this.capsLock = !this.capsLock;
        currentButton.button.classList.toggle(buttonStyles.capsLock);
        this.keyboard.typingButtons.forEach((el) => {
          //  if (this.capsLock && !this.shift) {
          //    el.button.innerText = el.button.innerText.toUpperCase();
          //  } else {
          //    el.button.innerText = el.button.innerText.toLowerCase();
          //  }
        });
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.shift = !this.shift;
        currentButton.button.classList.toggle(buttonStyles.shift);
        this.keyboard.typingButtons.forEach((el) => {
          //  if (this.shift && !this.capsLock) {
          //    el.button.innerText = el.data.en.shift;
          //  } else if (this.shift && this.capsLock) {
          //    el.button.innerText = el.data.en.key;
          //  }
        });
        break;
      case 'ChangeLang':
        if (localStorage.getItem('language') === 'en') {
          localStorage.setItem('language', 'ru');
        } else {
          localStorage.setItem('language', 'en');
        }
        this.language = localStorage.getItem('language') as languageType;
        this.keyboard.container.remove();
        this.keyboard = new Keyboard(this.container, this.language);
        this.keyboard.container.addEventListener(
          'mousedown',
          this.mouseDownHandler
        );
        this.keyboard.container.addEventListener(
          'mouseup',
          this.mouseUpHandler
        );
        break;
      default:
        //   this.areaValue += currentButton.button.innerText;
        break;
    }
  };

  getLanguage() {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
    this.language = localStorage.getItem('language') as languageType;
  }

  updateAreaValue = () => {
    const textAreaNode = this.textArea.container as HTMLTextAreaElement;
    textAreaNode.value = this.areaValue;
  };
}
