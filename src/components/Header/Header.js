import createHtml from '../../createHtml';
import styles from './Header.module.css';
import languageSvg from '../../assets/svg/language.svg';
var Header = /** @class */ (function () {
    function Header(parent) {
        this.parent = parent;
        this.createHeader();
    }
    Header.prototype.createHeader = function () {
        var listsContent = [
            'Designed for Windows',
            "To switch the language press/click <b>left shift + ctrl</b> or click ",
        ];
        var container = createHtml('header', styles.header, this.parent);
        var title = createHtml('h1', styles.title, container);
        title.innerText = 'Virtual Keyboard';
        var ul = createHtml('ul', styles.lists, container);
        listsContent.forEach(function (el, idx) {
            var list = createHtml('li', styles.list, ul);
            list.innerHTML = el;
            if (idx === 1) {
                var icon = createHtml('div', styles.icon, list);
                icon.style.webkitMaskImage = "url(".concat(languageSvg, ")");
            }
        });
    };
    return Header;
}());
export { Header };
