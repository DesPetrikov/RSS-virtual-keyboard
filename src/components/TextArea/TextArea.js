import createHtml from '../../createHtml';
import styles from './TextArea.moodule.css';
var TextArea = /** @class */ (function () {
    function TextArea(parent) {
        this.parent = parent;
        this.createTextArea();
    }
    TextArea.prototype.createTextArea = function () {
        this.container = createHtml('textarea', styles.textarea, this.parent, '', 'autofocus, true');
    };
    return TextArea;
}());
export { TextArea };
