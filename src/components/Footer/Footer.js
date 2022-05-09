import createHtml from '../../createHtml';
import styles from './Footer.module.css';

export class Footer {
  constructor(parent) {
    this.parent = parent;
    this.createFooter();
  }

  createFooter() {
    const container = createHtml('footer', styles.footer, this.parent);
    container.innerText = '© 2022 Dzianis Petrykau';
  }
}
