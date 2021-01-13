import { LitElement, html } from 'https://jspm.dev/lit-element';

export class YaxNavbar extends LitElement {

  async performUpdate() {
    super.performUpdate();
    // set up hamburger menu after super.performUpdate() calls render()
    // toggles the class is-active on both the navbar-burger and the targeted navbar-menu

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  createRenderRoot() {
    return this;
  }

  render(){
    return html`
    <nav class="navbar is-transparent is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://yax.com/">
        <figure class="image is-36x36" style="margin-left:-60px;margin-right:-60px;">
            <img src="https://assets.yax.com/images/icons/yax-cap-white-solid.svg" />
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://github.com/yaxdotcom">
          <figure class="image is-24x24">
            <svg id="Layer_1" version="1.1"><path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z" fill="#FFFFFF"/></svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://twitter.com/yaxdotcom">
          <figure class="image is-24x24" style="">
            <svg width="26" height="26" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://www.instagram.com/yaxdotcom/">
          <figure class="image is-32x32" style="margin-left:-8px;">
            <svg width="36" height="36" id="Layer_1" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="24" cy="24" fill="#000000" r="24"/><path d="M31.2,12.3H16.8c-2.5,0-4.5,2-4.5,4.5v4.8v9.6c0,2.5,2,4.5,4.5,4.5h14.4c2.5,0,4.5-2,4.5-4.5v-9.6v-4.8  C35.7,14.3,33.7,12.3,31.2,12.3z M32.5,15l0.5,0v0.5V19l-4,0l0-4L32.5,15z M20.7,21.6c0.7-1,2-1.7,3.3-1.7s2.6,0.7,3.3,1.7  c0.5,0.7,0.8,1.5,0.8,2.4c0,2.3-1.9,4.1-4.1,4.1s-4.1-1.8-4.1-4.1C19.9,23.1,20.2,22.3,20.7,21.6z M33.4,31.2c0,1.2-1,2.2-2.2,2.2  H16.8c-1.2,0-2.2-1-2.2-2.2v-9.6h3.5c-0.3,0.7-0.5,1.6-0.5,2.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4c0-0.8-0.2-1.7-0.5-2.4  h3.5V31.2z" fill="#FFFFFF"/></svg>
          </figure>
        </a>
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu has-background-black">
        <div class="navbar-end">
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://try.yax.com/">
              <span itemprop="name">Try Yax</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://sites.yax.com/">
              <span itemprop="name">Websites</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://tutorials.yax.com/">
              <span itemprop="name">Tutorials</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://yax.com/pricing.html">
              <span itemprop="name">Pricing</span></a>
          </div>
          <div class="navbar-item has-text-weight-bold">
            <a itemprop="url" class="navbar-item has-text-white" href="https://blog.yax.com/">
              <span itemprop="name">Blog</span></a>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}
customElements.define('yax-navbar', YaxNavbar);
