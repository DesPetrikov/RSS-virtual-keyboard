import createHtml from './createHtml';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './commonStyles/index.scss';

class Page {
  root: HTMLElement;

  createPage() {
    this.root = createHtml('div', 'container', document.body);
    const header = new Header(this.root);
    const main = new Main(this.root);
  }
}
const page = new Page();
page.createPage();
