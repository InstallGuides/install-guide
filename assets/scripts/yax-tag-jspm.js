import { LitElement, html } from 'https://jspm.dev/lit-element';

export class YaxTagJspm extends LitElement {
  render() {
    return html`
    <h2>Test</h2>
    <code>import { LitElement, html } from 'https://jspm.dev/lit-element';</code>
    `;
  }
}

customElements.define('yax-tag-jspm', YaxTagJspm);
