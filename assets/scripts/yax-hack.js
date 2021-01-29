import { LitElement, html } from 'https://cdn.skypack.dev/lit-element';
export class YaxHack extends LitElement {
  render() {
    return html`
    <h2>Test</h2>
    <code>import { LitElement, html } from 'https://cdn.skypack.dev/lit-element';</code>
    `;
  }
}
customElements.define('yax-hack', YaxHack);

