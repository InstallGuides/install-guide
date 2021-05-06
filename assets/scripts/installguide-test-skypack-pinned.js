import { LitElement, html } from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.1-VBzsFNL5Th0HrFTVPQSz/mode=imports/optimized/lit.js';

export class InstallguideTestSkypackPinned extends LitElement {
createRenderRoot() {
  return this;
}
render() {
  return html`
    <aside class="mt-4 container has-text-centered" id="ad">
    <div class="columns is-centered">
      <div class="column card has-background-link-light" style="max-width: 270px;">
        <div class="card-content">
          <div class="title has-text-weight-bold has-background-white">Skypack Pin URL</div>
          <p class="is-size-7 m-2 has-text-weight-medium">
            /*
             * Skypack CDN - lit@2.0.0-rc.1
             *
             * 📙 Package Documentation: https://www.skypack.dev/view/lit
             * 📘 Skypack Documentation: https://www.skypack.dev/docs
             */
             // Browser-Optimized Imports (Don't directly import the URLs below in your application!)
             export * from '/-/lit@v2.0.0-rc.1-VBzsFNL5Th0HrFTVPQSz/dist=es2020,mode=imports/optimized/lit.js';
          </p>
        </div>
      </div>
    </div>
    </aside>
  `;
}
}
customElements.define('installguide-test-skypack-pinned.js', InstallguideTestSkypackPinned);
