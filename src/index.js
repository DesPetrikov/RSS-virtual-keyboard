import createHtml from './createHtml';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import iconSvg from './assets/svg/ico-keyboard.svg';
import './commonStyles/index.scss';

class Page {
  createPage() {
    this.root = createHtml('div', 'container', document.body);
    const header = new Header(this.root);
    const main = new Main(this.root);
    const footer = new Footer(this.root);
  }
}
createHtml('link', 'icon', document.head, iconSvg, 'rel, icon');
const page = new Page();
page.createPage();
