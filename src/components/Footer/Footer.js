import createHtml from '../../createHtml';
import styles from './Footer.module.css';
var Footer = /** @class */ (function () {
    function Footer(parent) {
        this.parent = parent;
        this.createFooter();
    }
    Footer.prototype.createFooter = function () {
        var container = createHtml('footer', styles.footer, this.parent);
        container.innerText = '© 2022 Dzianis Petrykau';
    };
    return Footer;
}());
export { Footer };
