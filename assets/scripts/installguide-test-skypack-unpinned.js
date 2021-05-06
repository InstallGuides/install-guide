import { LitElement, html } from 'https://cdn.skypack.dev/lit';

export class InstallguideTestSkypackUnpinned extends LitElement {
createRenderRoot() {
  return this;
}
render() {
  return html`
    <aside class="mt-4 container has-text-centered" id="ad">
    <div class="columns is-centered">
      <div class="column card has-background-link-light" style="max-width: 270px;">
        <div class="card-content">
          <div class="title has-text-weight-bold has-background-white">Skypack Unpinned</div>
          <p class="is-size-7 m-2 has-text-weight-medium">
            /*
             * Skypack CDN - lit@2.0.0-rc.1
             *
             * 📙 Package Documentation: https://www.skypack.dev/view/lit
             * 📘 Skypack Documentation: https://www.skypack.dev/docs
             */
          </p>
        </div>
      </div>
    </div>
    </aside>
  `;
}
}
customElements.define('installguide-test-skypack-unpinned', InstallguideTestSkypackUnpinned);
