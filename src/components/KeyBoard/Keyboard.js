import createHtml from '../../createHtml';
import { Button } from '../Button/Button';
import { data, serviceCodes } from '../../data';
import styles from './Keyboard.module.css';
var Keyboard = /** @class */ (function () {
    function Keyboard(parent, language) {
        this.buttonsArr = [];
        this.typingButtons = [];
        this.parent = parent;
        this.language = language;
        this.createKeyboard();
    }
    Keyboard.prototype.createKeyboard = function () {
        var _this = this;
        this.container = createHtml('div', styles.keyboard, this.parent);
        data.forEach(function (row) {
            var rowContainer = createHtml('div', styles.row, _this.container);
            row.forEach(function (el) {
                var button = new Button(rowContainer, el, _this.language);
                _this.buttonsArr.push(button);
                if (!serviceCodes.includes(button.data.code)) {
                    _this.typingButtons.push(button);
                }
            });
        });
    };
    return Keyboard;
}());
export { Keyboard };
