import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@2.0.0-rc.1/+esm';

export class InstallguideTestJsdelivrPinned extends LitElement {
createRenderRoot() {
  return this;
}
render() {
  return html`
    <aside class="mt-4 container has-text-centered" id="ad">
    <div class="columns is-centered">
      <div class="column card has-background-link-light" style="max-width: 270px;">
        <div class="card-content">
          <div class="title has-text-weight-bold has-background-white">Jsdelivr Pinned</div>
          <h1>Jsdelivr</h1>
        </div>
      </div>
    </div>
    </aside>
  `;
}
}
customElements.define('installguide-test-jsdelivr-pinned', InstallguideTestJsdelivrPinned);
