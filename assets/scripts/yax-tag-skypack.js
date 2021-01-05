import { LitElement, html } from 'https://cdn.skypack.dev/lit-element';

export class YaxTagSkypack extends LitElement {
  render() {
    return html`
    <h2>Test</h2>
    <code>import { LitElement, html } from 'https://cdn.skypack.dev/lit-element';</code>
    `;
  }
}

customElements.define('yax-tag-skypack', YaxTagSkypack);
