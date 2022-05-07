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
      this.targetButton.button.classList.add(buttonStyles.active);
      this.serviceButtonsHandler(this.targetButton);
    }
  };

  mouseUpHandler = (e: Event) => {
    if (e.target instanceof HTMLButtonElement) {
      this.targetButton.button.classList.remove(buttonStyles.active);
      this.textArea.container.focus();
    }
  };

  keyDownHandler = (e: KeyboardEvent) => {
    //  e.preventDefault();
    //  if (!serviceCodes.includes(e.code)) {
    //    this.areaValue += e.key;
    //  }
    const index = this.keyboard.buttonsArr.findIndex(
      (el) => el.data.code === e.code
    );
    if (index !== -1) {
      this.keyboard.buttonsArr[index].button.classList.add(buttonStyles.active);
      // this.serviceButtonsHandler(this.keyboard.buttonsArr[index]);
    }
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
    //  this.areaValue = this.textArea.container.value;
    const cursorPositionStart = this.textArea.container.selectionStart;
    const cursorPositionEnd = this.textArea.container.selectionEnd;

    switch (currentButton.data.code) {
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
      case 'Enter':
        this.textArea.container.setRangeText(
          '\n',
          cursorPositionStart,
          cursorPositionEnd,
          'end'
        );
        break;
      case 'Space':
        this.textArea.container.setRangeText(
          ' ',
          cursorPositionStart,
          cursorPositionEnd,
          'end'
        );
        break;
      case 'Delete':
        this.textArea.container.setRangeText(
          '',
          cursorPositionStart,
          cursorPositionEnd === cursorPositionStart
            ? cursorPositionEnd + 1
            : cursorPositionEnd,
          'end'
        );
        break;
      case 'Backspace':
        this.textArea.container.setRangeText(
          '',
          cursorPositionStart && cursorPositionStart === cursorPositionEnd
            ? cursorPositionStart - 1
            : cursorPositionStart,
          cursorPositionEnd,
          'end'
        );
        break;
      case 'Tab':
        this.textArea.container.setRangeText(
          '    ',
          cursorPositionStart,
          cursorPositionEnd,
          'end'
        );
        break;
		 
      default:
        this.textArea.container.setRangeText(
          currentButton.button.innerText,
          cursorPositionStart,
          cursorPositionEnd,
          'end'
        );
        break;
    }
  };

  getLanguage() {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
    this.language = localStorage.getItem('language') as languageType;
  }
}
