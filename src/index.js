import createHtml from './createHtml';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import iconSvg from './assets/svg/ico-keyboard.svg';
import './commonStyles/index.scss';
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.createPage = function () {
        this.root = createHtml('div', 'container', document.body);
        var header = new Header(this.root);
        var main = new Main(this.root);
        var footer = new Footer(this.root);
    };
    return Page;
}());
createHtml('link', 'icon', document.head, iconSvg, 'rel, icon');
var page = new Page();
page.createPage();
