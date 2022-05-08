/* eslint-disable no-param-reassign */
import createHtml from '../../createHtml';
import { TextArea } from '../TextArea/TextArea';
import { Keyboard } from '../Keyboard/Keyboard';
import styles from './Main.module.css';
import buttonStyles from '../Button/Button.module.css';
import { Button } from '../Button/Button';
import { languageType } from '../../commonTypes/language.types';

export class Main {
  private parent: HTMLElement;

  container: HTMLElement;

  textArea: TextArea;

  keyboard: Keyboard;

  private capsLock: Boolean = false;

  private shift: Boolean = false;

  leftShiftElement: Button;

  rightShiftElement: Button;

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
      if (dataCode) {
        this.targetButton = this.keyboard.buttonsArr.find(
          (el) => el.data.code === dataCode
        );
        this.targetButton.button.classList.add(buttonStyles.active);
        this.serviceButtonsHandler(this.targetButton);
      }
    }
  };

  mouseUpHandler = (e: Event) => {
    if (e.target instanceof HTMLButtonElement) {
      this.targetButton?.button.classList.remove(buttonStyles.active);
      this.textArea.container.focus();
    }
  };

  keyDownHandler = (e: KeyboardEvent) => {
    e.preventDefault();
    const index = this.keyboard.buttonsArr.findIndex(
      (el) => el.data.code === e.code
    );
    if (index !== -1) {
      this.keyboard.buttonsArr[index].button.classList.add(buttonStyles.active);
      this.serviceButtonsHandler(this.keyboard.buttonsArr[index]);
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
    const {
      data: { code },
    } = currentButton;
    const cursorPositionStart = this.textArea.container.selectionStart;
    const cursorPositionEnd = this.textArea.container.selectionEnd;
    const leftLetter = this.textArea.container.value.slice(
      cursorPositionStart - 1,
      cursorPositionStart
    );
    const rightLetter = this.textArea.container.value.slice(
      cursorPositionStart,
      cursorPositionEnd + 1
    );
    const rerenderKeyboard = () => {
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
      this.keyboard.container.addEventListener('mouseup', this.mouseUpHandler);
      this.capsLock = false;
      this.shift = false;
    };

    const shiftHandler = () => {
      this.shift = !this.shift;
      if (this.shift) {
        this.keyboard.typingButtons.forEach((el) => {
          el.button.innerText = this.capsLock
            ? el.data[this.language].shift.toLowerCase()
            : el.data[this.language].shift.toUpperCase();
        });
      } else {
        this.keyboard.typingButtons.forEach((el) => {
          el.button.innerText = this.capsLock
            ? el.data[this.language].key.toUpperCase()
            : el.data[this.language].key.toLowerCase();
        });
      }
    };

    switch (code) {
      case 'ChangeLang':
        rerenderKeyboard();
        break;
      case 'ShiftLeft':
        this.leftShiftElement = currentButton;
        this.leftShiftElement.button.classList.toggle(buttonStyles.shift);
        shiftHandler();
        break;
      case 'ShiftRight':
        this.rightShiftElement = currentButton;
        this.rightShiftElement.button.classList.toggle(buttonStyles.shift);
        shiftHandler();
        break;
      case 'ControlLeft':
        if (this.shift) {
          this.shift = false;
          this.leftShiftElement?.button.classList.remove(buttonStyles.shift);
          this.rightShiftElement?.button.classList.remove(buttonStyles.shift);
          rerenderKeyboard();
        }
        break;
      case 'CapsLock':
        this.capsLock = !this.capsLock;
        currentButton.button.classList.toggle(buttonStyles.capsLock);
        if (this.capsLock) {
          this.keyboard.typingButtons.forEach((el) => {
            el.button.innerText = this.shift
              ? el.button.innerText.toLowerCase()
              : el.button.innerText.toUpperCase();
          });
        } else {
          this.keyboard.typingButtons.forEach((el) => {
            el.button.innerText = this.shift
              ? el.button.innerText.toUpperCase()
              : el.button.innerText.toLowerCase();
          });
        }
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
      case 'ArrowLeft':
        this.textArea.container.setRangeText(
          leftLetter,
          cursorPositionStart ? cursorPositionStart - 1 : cursorPositionStart,
          cursorPositionEnd,
          'start'
        );
        break;
      case 'ArrowRight':
        this.textArea.container.setRangeText(
          rightLetter,
          cursorPositionStart,
          cursorPositionEnd + 1,
          'end'
        );
        break;
      case 'ArrowUp':
        let toLeftCounter = 0;
        let upFlag = false;

        for (let i = cursorPositionStart; i >= 0; i -= 1) {
          if (
            this.textArea.container.value[i] === '\n' &&
            i !== cursorPositionStart
          ) {
            upFlag = true;
            break;
          }
          toLeftCounter += 1;
        }
        if (upFlag) {
          this.textArea.container.setRangeText(
            this.textArea.container.value.slice(
              cursorPositionStart - toLeftCounter,
              cursorPositionStart
            ),
            cursorPositionStart - toLeftCounter,
            cursorPositionStart,
            'start'
          );
        }
        break;
      case 'ArrowDown':
        let toRightCounter = 0;
        let rows = 0;
        for (
          let i = cursorPositionEnd;
          i < this.textArea.container.value.length;
          i += 1
        ) {
          if (this.textArea.container.value[i] === '\n') {
            rows += 1;
            if (rows === 2) break;
          }
          toRightCounter += 1;
        }
        this.textArea.container.setRangeText(
          this.textArea.container.value.slice(
            cursorPositionEnd,
            cursorPositionEnd + toRightCounter
          ),
          cursorPositionEnd,
          cursorPositionEnd + toRightCounter,
          'end'
        );
        break;
      case 'AltLeft':
      case 'AltRight':
      case 'ControlRight':
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
