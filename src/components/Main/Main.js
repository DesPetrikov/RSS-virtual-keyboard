/* eslint-disable no-param-reassign */
import createHtml from '../../createHtml';
import { TextArea } from '../TextArea/TextArea';
import { Keyboard } from '../Keyboard/Keyboard';
import styles from './Main.module.css';
import buttonStyles from '../Button/Button.module.css';
var Main = /** @class */ (function () {
    function Main(parent) {
        var _this = this;
        this.capsLock = false;
        this.shift = false;
        this.mouseDownHandler = function (e) {
            if (e.target instanceof HTMLButtonElement) {
                var dataCode_1 = e.target.dataset.code;
                if (dataCode_1) {
                    _this.targetButton = _this.keyboard.buttonsArr.find(function (el) { return el.data.code === dataCode_1; });
                    _this.targetButton.button.classList.add(buttonStyles.active);
                    _this.serviceButtonsHandler(_this.targetButton);
                }
            }
        };
        this.mouseUpHandler = function (e) {
            var _a;
            if (e.target instanceof HTMLButtonElement) {
                (_a = _this.targetButton) === null || _a === void 0 ? void 0 : _a.button.classList.remove(buttonStyles.active);
                _this.textArea.container.focus();
            }
        };
        this.keyDownHandler = function (e) {
            e.preventDefault();
            var index = _this.keyboard.buttonsArr.findIndex(function (el) { return el.data.code === e.code; });
            if (index !== -1) {
                _this.keyboard.buttonsArr[index].button.classList.add(buttonStyles.active);
                _this.serviceButtonsHandler(_this.keyboard.buttonsArr[index]);
            }
        };
        this.keyUpHandler = function (e) {
            e.preventDefault();
            var index = _this.keyboard.buttonsArr.findIndex(function (el) { return el.data.code === e.code; });
            if (index !== -1) {
                _this.keyboard.buttonsArr[index].button.classList.remove(buttonStyles.active);
            }
        };
        this.serviceButtonsHandler = function (currentButton) {
            var _a, _b;
            var code = currentButton.data.code;
            var cursorPositionStart = _this.textArea.container.selectionStart;
            var cursorPositionEnd = _this.textArea.container.selectionEnd;
            var leftLetter = _this.textArea.container.value.slice(cursorPositionStart - 1, cursorPositionStart);
            var rightLetter = _this.textArea.container.value.slice(cursorPositionStart, cursorPositionEnd + 1);
            var rerenderKeyboard = function () {
                if (localStorage.getItem('language') === 'en') {
                    localStorage.setItem('language', 'ru');
                }
                else {
                    localStorage.setItem('language', 'en');
                }
                _this.language = localStorage.getItem('language');
                _this.keyboard.container.remove();
                _this.keyboard = new Keyboard(_this.container, _this.language);
                _this.keyboard.container.addEventListener('mousedown', _this.mouseDownHandler);
                _this.keyboard.container.addEventListener('mouseup', _this.mouseUpHandler);
                _this.capsLock = false;
                _this.shift = false;
            };
            var shiftHandler = function () {
                _this.shift = !_this.shift;
                if (_this.shift) {
                    _this.keyboard.typingButtons.forEach(function (el) {
                        el.button.innerText = _this.capsLock
                            ? el.data[_this.language].shift.toLowerCase()
                            : el.data[_this.language].shift.toUpperCase();
                    });
                }
                else {
                    _this.keyboard.typingButtons.forEach(function (el) {
                        el.button.innerText = _this.capsLock
                            ? el.data[_this.language].key.toUpperCase()
                            : el.data[_this.language].key.toLowerCase();
                    });
                }
            };
            switch (code) {
                case 'ChangeLang':
                    rerenderKeyboard();
                    break;
                case 'ShiftLeft':
                    _this.leftShiftElement = currentButton;
                    _this.leftShiftElement.button.classList.toggle(buttonStyles.shift);
                    shiftHandler();
                    break;
                case 'ShiftRight':
                    _this.rightShiftElement = currentButton;
                    _this.rightShiftElement.button.classList.toggle(buttonStyles.shift);
                    shiftHandler();
                    break;
                case 'ControlLeft':
                    if (_this.shift) {
                        _this.shift = false;
                        (_a = _this.leftShiftElement) === null || _a === void 0 ? void 0 : _a.button.classList.remove(buttonStyles.shift);
                        (_b = _this.rightShiftElement) === null || _b === void 0 ? void 0 : _b.button.classList.remove(buttonStyles.shift);
                        rerenderKeyboard();
                    }
                    break;
                case 'CapsLock':
                    _this.capsLock = !_this.capsLock;
                    currentButton.button.classList.toggle(buttonStyles.capsLock);
                    if (_this.capsLock) {
                        _this.keyboard.typingButtons.forEach(function (el) {
                            el.button.innerText = _this.shift
                                ? el.button.innerText.toLowerCase()
                                : el.button.innerText.toUpperCase();
                        });
                    }
                    else {
                        _this.keyboard.typingButtons.forEach(function (el) {
                            el.button.innerText = _this.shift
                                ? el.button.innerText.toUpperCase()
                                : el.button.innerText.toLowerCase();
                        });
                    }
                    break;
                case 'Enter':
                    _this.textArea.container.setRangeText('\n', cursorPositionStart, cursorPositionEnd, 'end');
                    break;
                case 'Space':
                    _this.textArea.container.setRangeText(' ', cursorPositionStart, cursorPositionEnd, 'end');
                    break;
                case 'Delete':
                    _this.textArea.container.setRangeText('', cursorPositionStart, cursorPositionEnd === cursorPositionStart
                        ? cursorPositionEnd + 1
                        : cursorPositionEnd, 'end');
                    break;
                case 'Backspace':
                    _this.textArea.container.setRangeText('', cursorPositionStart && cursorPositionStart === cursorPositionEnd
                        ? cursorPositionStart - 1
                        : cursorPositionStart, cursorPositionEnd, 'end');
                    break;
                case 'Tab':
                    _this.textArea.container.setRangeText('    ', cursorPositionStart, cursorPositionEnd, 'end');
                    break;
                case 'ArrowLeft':
                    _this.textArea.container.setRangeText(leftLetter, cursorPositionStart ? cursorPositionStart - 1 : cursorPositionStart, cursorPositionEnd, 'start');
                    break;
                case 'ArrowRight':
                    _this.textArea.container.setRangeText(rightLetter, cursorPositionStart, cursorPositionEnd + 1, 'end');
                    break;
                case 'ArrowUp':
                    var toLeftCounter = 0;
                    var upFlag = false;
                    for (var i = cursorPositionStart; i >= 0; i -= 1) {
                        if (_this.textArea.container.value[i] === '\n' &&
                            i !== cursorPositionStart) {
                            upFlag = true;
                            break;
                        }
                        toLeftCounter += 1;
                    }
                    if (upFlag) {
                        _this.textArea.container.setRangeText(_this.textArea.container.value.slice(cursorPositionStart - toLeftCounter, cursorPositionStart), cursorPositionStart - toLeftCounter, cursorPositionStart, 'start');
                    }
                    break;
                case 'ArrowDown':
                    var toRightCounter = 0;
                    var rows = 0;
                    for (var i = cursorPositionEnd; i < _this.textArea.container.value.length; i += 1) {
                        if (_this.textArea.container.value[i] === '\n') {
                            rows += 1;
                            if (rows === 2)
                                break;
                        }
                        toRightCounter += 1;
                    }
                    _this.textArea.container.setRangeText(_this.textArea.container.value.slice(cursorPositionEnd, cursorPositionEnd + toRightCounter), cursorPositionEnd, cursorPositionEnd + toRightCounter, 'end');
                    break;
                case 'AltLeft':
                case 'AltRight':
                case 'ControlRight':
                    break;
                default:
                    _this.textArea.container.setRangeText(currentButton.button.innerText, cursorPositionStart, cursorPositionEnd, 'end');
                    break;
            }
        };
        this.parent = parent;
        this.getLanguage();
        this.createMain();
    }
    Main.prototype.createMain = function () {
        this.container = createHtml('main', styles.main, this.parent);
        this.textArea = new TextArea(this.container);
        this.keyboard = new Keyboard(this.container, this.language);
        this.keyboard.container.addEventListener('mousedown', this.mouseDownHandler);
        this.keyboard.container.addEventListener('mouseup', this.mouseUpHandler);
        document.addEventListener('keydown', this.keyDownHandler);
        document.addEventListener('keyup', this.keyUpHandler);
    };
    Main.prototype.getLanguage = function () {
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'en');
        }
        this.language = localStorage.getItem('language');
    };
    return Main;
}());
export { Main };
