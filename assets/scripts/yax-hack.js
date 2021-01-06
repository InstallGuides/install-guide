import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2.4.0';

export class YaxHack extends LitElement {
  render() {
    return html`<h2>Test</h2>`;
  }
}

customElements.define('yax-hack', YaxHack);

