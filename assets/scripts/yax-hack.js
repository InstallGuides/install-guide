import { LitElement, html } from 'https://cdn.skypack.dev/lit-element@2.4.0';
import { until } from 'https://cdn.skypack.dev/lit-html@1.3.0/directives/until.js';
import { unsafeHTML } from 'https://cdn.skypack.dev/lit-html@1.3.0/directives/unsafe-html.js';

export class YaxHack extends LitElement {
  render() {
    return html`<h2>Test</h2>`;
  }
}

customElements.define('yax-hack', YaxHack);

