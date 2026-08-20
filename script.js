document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }
});

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="container">
          <a href="index.html" class="logo">
            <span class="logo-name">Aden Thompson</span>
            <span class="logo-tagline">// Technical Artist</span>
          </a>
          
          <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
          <nav class="main-nav">
              <a href="index.html" class="dropdown-toggle">Works</a>
              <a href="AdenThompson_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>            
              <a href="about.html">About</a>
              <a href="#">Contact</a>
          </nav>
        </div>
      </header>
    `;

    const toggle = this.querySelector('.nav-toggle');
    const nav = this.querySelector('.main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => nav.classList.toggle('open'));
      nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => nav.classList.remove('open'));
      });
    }
  }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="global-footer">
        <div class="container">
          <div class="footer-brand">
            <div class="logo"><b>Aden Thompson</b></div>
            <p>Technical Artist &amp; UCF Computer Science student building UE5 shaders, VFX, and pipeline tools.</p>
            <div class="footer-social">
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.7 10.7.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1a10.3 10.3 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5.1 5.6.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.2 5.4 18.3.5 12 .5Z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.8v2.1h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.8 5 6.3V23h-4v-6.9c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.6V23h-4V8Z"/></svg>
              </a>
              <a href="#" aria-label="Email">
                <svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4Zm2 2v.3l8 6.2 8-6.2V6H4Zm16 2.4-7.4 5.7a1 1 0 0 1-1.2 0L4 8.4V18h16V8.4Z"/></svg>
              </a>
            </div>
            <br>
            <p>&copy; 2026 Aden Thompson. All rights reserved.</p>
          </div>

          <div class="footer-col footer-contact-col">
            <h4>Get in Touch</h4>
            <form class="footer-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <input type="email" name="email" placeholder="Your Email" required>
              <textarea name="message" rows="3" placeholder="Your Message..." required></textarea>
              <button type="submit" class="footer-submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container"></div>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);