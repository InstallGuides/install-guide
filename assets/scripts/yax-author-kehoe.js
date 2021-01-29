import { LitElement, html } from 'https://jspm.dev/lit-element';

export class YaxAuthorKehoe extends LitElement {
	createRenderRoot() {
		return this;
	}
	render() {
		return html`
      <style>
        .card-author {
          border-radius: 6px;
          overflow: hidden;
          max-width: 300px;
          max-height: 380px;
          margin: 0 auto;
        }
        .card-author .header {
          height: 60px;
          background: #e3efee;
        }
        .card-author .header .avatar {
          width: 80px;
          height: 100%;
          position: relative;
          margin: 0 auto;
        }
        .card-author .header .avatar img {
          display: block;
          border-radius: 50%;
          position: absolute;
          bottom: -42px;
          border: 4px solid white;
        }
        .card-author .card-body {
          padding: 30px;
        }
        .card-author .card-body .author-meta {
          padding-top: 20px;
        }
        .card-author .card-body .author-meta .author-name {
          font-size: 18px;
          font-weight: 600;
        }
        .card-author .card-body .author-meta .author-about {
          font-size: 90%;
          color: #8fada9;
        }
        .card-author .author-bio {
          padding-top: 8px;
          font-size: 92%;
          color: #999;
        }
      </style>
      <aside>
      	<div class="card card-author">
      		<div class="header">
      			<div class="avatar">
      				<a href="https://danielkehoe.com/">
      					<img src="https://assets.yax.com/images/danielkehoe-color-192px.png" loading="eager" alt="Daniel Kehoe" />
      				</a>
      			</div>
      		</div>
      		<div class="card-body">
      			<div class="author-meta has-text-centered">
      				<h5 class="author-about">About the Author</h5>
      				<h3 class="author-name">Daniel Kehoe</h3>
      			</div>
      			<div class="author-bio has-text-centered is-size-7">
      				<p>Daniel Kehoe is the founder of yax.com, past founder of the RailsApps open source project, and author of the book "Learn Ruby on Rails." Get his Twitter updates at <a target="blank" href="https://twitter.com/yaxdotcom">@yaxdotcom</a>.
              </p>
      			</div>
      		</div>
      	</div>
      </aside>
  `;
	}
}

customElements.define('yax-author-kehoe', YaxAuthorKehoe);
