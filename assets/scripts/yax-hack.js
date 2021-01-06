import { LitElement, html } from 'https://cdn.skypack.dev/lit-element';
import { until } from 'https://jspm.dev/npm:lit-html@1.3.0';
import { unsafeHTML } from 'https://jspm.dev/npm:lit-html@1.3.0';

export class YaxHack extends LitElement {
  createRenderRoot() {
    return this;
  }
  load() {
    let pagination = 'multipage';
    return fetch('manifest.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Could not find manifest file');
        }
        return response.json();
      })
      .then(tutorial => {
        if (tutorial.pagination == 'onepage') {
          pagination = 'onepage';
        }
        return tutorial.pages;
      })
      .then(pages => {
        let heading = 'Contents/Pages';
        let list_item = '';
        if (pagination == 'onepage') {
          heading = 'Collected Articles';
        }
        for (const [key, value] of Object.entries(pages)) {
          list_item += '<li><a href="';
          list_item += value.url;
          list_item += '">';
          list_item += value.title;
          list_item += '</a></li>';
          list_item += '\n';
        }
        return html`
          <style>
            .card-toc {
              border-radius: 6px;
              overflow: hidden;
              max-height: 100%;
              max-width: 300px;
              margin: 0 auto;
            }
            .card-toc .header {
              height: 60px;
              background: #e3efee;
            }
            .card-toc .header .avatar {
              width: 80px;
              position: relative;
              margin: 0 auto;
            }
            .card-toc .header .avatar img {
              display: block;
              border-radius: 50%;
              position: absolute;
              bottom: -42px;
              border: 4px solid white;
            }
            .card-toc .card-body {
              padding: 30px;
            }
            .card-toc .card-body .toc-headline {
              font-size: 90%;
              color: #8fada9;
            }
            .card-toc .toc-list {
              padding-top: 8px;
              font-size: 92%;
              color: #999;
            }
          </style>
          <aside class="mt-6">
            <div class="card card-toc">
              <div class="header"></div>
              <div class="card-body">
                <h5 class="toc-headline">${heading}</h5>
                <div class="toc-list is-size-7">
                  <ul class="menu-list">
                  ${unsafeHTML(list_item)}
                </ul>
                </div>
              </div>
            </div>
          </aside>
      `;
      })
      .catch(error => {
        console.error('Fetch failure:', error);
        return html`<h4>Error</h4>`;
      });
  }
  render() {
    return until(
      this.load().then(content => content),
      html`<h4>Loading...</h4>`
    );
  }
}

customElements.define('yax-hack', YaxHack);

