import { LitElement, html } from 'https://jspm.dev/lit-element@2';

export class YaxHack extends LitElement {
	render() {
		return html`<h4>Test</h4>`;
	}
}

customElements.define('yax-hack', YaxHack);
