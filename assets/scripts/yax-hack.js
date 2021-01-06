import prismjs from 'https://cdn.skypack.dev/prismjs';
import commonmark from 'https://cdn.skypack.dev/commonmark@0.29.1';
import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2';

export class YaxHack extends LitElement {
  render() {
    return html`<h2>Test</h2>`;
  }
}

customElements.define('yax-hack', YaxHack);

