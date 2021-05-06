import { LitElement, html } from 'https://esm.sh/lit';

export class InstallguideTestEsmUnpinned extends LitElement {
createRenderRoot() {
  return this;
}
render() {
  return html`
    <aside class="mt-4 container has-text-centered" id="ad">
    <div class="columns is-centered">
      <div class="column card has-background-link-light" style="max-width: 270px;">
        <div class="card-content">
          <div class="title has-text-weight-bold has-background-white">ESM Unpinned</div>
          <h1>ESM</h1>
        </div>
      </div>
    </div>
    </aside>
  `;
}
}
customElements.define('installguide-test-esm-unpinned', InstallguideTestEsmUnpinned);
