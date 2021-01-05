import { LitElement, html } from 'https://jspm.dev/lit-element@2';

export class YaxHack extends LitElement {
	render() {
		return html`<h2>Test</h2>`;
	}
}

customElements.define('yax-hack', YaxHack);
