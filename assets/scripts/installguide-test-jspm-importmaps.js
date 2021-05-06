import { LitElement, html } from 'lit';

export class InstallguideTestJspmImportmaps extends LitElement {
createRenderRoot() {
  return this;
}
render() {
  return html`
    <aside class="mt-4 container has-text-centered" id="ad">
    <div class="columns is-centered">
      <div class="column card has-background-link-light" style="max-width: 270px;">
        <div class="card-content">
          <div class="title has-text-weight-bold has-background-white">JSPM Import Maps</div>
          <img src="https://jspm.org/jspm.png">
        </div>
      </div>
    </div>
    </aside>
  `;
}
}
customElements.define('installguide-test-jspm-importmaps', InstallguideTestJspmImportmaps);
