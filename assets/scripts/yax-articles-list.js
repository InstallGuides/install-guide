import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

export class YaxArticlesList extends LitElement {
  createRenderRoot() {
    return this;
  }
  load() {
    return fetch('/articles/manifest.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not find manifest file');
      }
      return response.json();
    })
    .then(tutorial => {
      return tutorial.pages;
    })
    .then(pages => {
      let list_item = '';
      for (const [value] of Object.values(pages)) {
        list_item += '<span><a href="';
        list_item += value.url;
        list_item += '">';
        list_item += value.title;
        list_item += '</a></span>';
        list_item += '<br>\n'
      }
      return html`
      <div>
        ${unsafeHTML(list_item)}
      </div>
      `;
    })
    .catch(error => {
      console.error('Fetch failure:', error);
      return html`<h4>Error</h4>`;
    })
  }
  render() {
    return until(
      this.load().then(content => content ),
      html`<h4>Loading...</h4>`
    )
  }
}

customElements.define('yax-articles-list', YaxArticlesList);
