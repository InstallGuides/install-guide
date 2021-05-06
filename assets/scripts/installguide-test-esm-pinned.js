import { LitElement, html } from 'https://esm.sh/lit@2.0.0-rc.1';

export class InstallguideTestEsmPinned extends LitElement {
createRenderRoot() {
  return this;
}
render() {
  return html`
    <aside class="mt-4 container has-text-centered" id="ad">
    <div class="columns is-centered">
      <div class="column card has-background-link-light" style="max-width: 270px;">
        <div class="card-content">
          <div class="title has-text-weight-bold has-background-white">ESM Pinned</div>
          <h1>ESM</h1>
        </div>
      </div>
    </div>
    </aside>
  `;
}
}
customElements.define('installguide-test-esm-pinned', InstallguideTestEsmPinned);
