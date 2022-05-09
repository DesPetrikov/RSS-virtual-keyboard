import createHtml from '../../createHtml';
import styles from './Button.module.css';
import { wideButtons } from '../../data';
var Button = /** @class */ (function () {
    function Button(parent, data, language) {
        this.parent = parent;
        this.data = data;
        this.language = language;
        this.creteButton();
    }
    Button.prototype.creteButton = function () {
        this.button = createHtml('button', styles.button, this.parent, '', "data-code, ".concat(this.data.code));
        this.button.innerHTML = this.data[this.language].key;
        if (this.data.image) {
            this.button.style.backgroundImage = "url(".concat(this.data.image, ")");
        }
        if (wideButtons.includes(this.data.code)) {
            this.button.classList.add(styles.wideButton);
        }
        if (this.data.code === 'Space') {
            this.button.classList.add(styles.space);
        }
    };
    return Button;
}());
export { Button };
