import { LitElement, html } from 'https://cdn.skypack.dev/lit';

export class InstallguideNavbar extends LitElement {

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
    <nav class="navbar is-transparent is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://install.guide/">
        <figure class="image">
            <img src="/favicon-32x32.png" width="32" height="32">
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://github.com/InstallGuides">
          <figure class="image is-24x24 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </figure>
        </a>
        <a class="navbar-item" target="blank" href="https://twitter.com/yaxdotcom">
          <figure class="image is-24x24" style="">
            <svg width="26" height="26" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
          </figure>
        </a>
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu has-background-info">
        <div class="navbar-end">
          <div class="navbar-item has-text-weight-bold">
          <a itemprop="url" class="navbar-item has-text-white" href="https://mac.install.guide/index.html">
            <span itemprop="name">Mac</span></a>
        </div>
        </div>
      </div>
    </nav>
    `;
  }
}
customElements.define('installguide-navbar', InstallguideNavbar);
