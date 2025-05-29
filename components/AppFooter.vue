<template>
  <footer
    class="footer-parallax-overlay footer-classic context-dark parallax-container"
    data-parallax-img="/images/footer.jpg"
  >
    <div class="parallax-content">
      <div class="section-sm">
        <div class="container">
          <div class="row row-30">
            <div class="col-sm-6 col-lg-3">
              <div class="footer-classic-item">
                <h4>About us</h4>
                <p>
                  Top Project provides first-class construction solutions to
                  individual and corporate clients worldwide.
                </p>
                <ul class="list-inline list-inline-xs list-inline-middle">
                  <li>
                    <a class="icon-square fa-instagram novi-icon" href="#" />
                  </li>
                  <li>
                    <a class="icon-square fa-facebook-f novi-icon" href="#" />
                  </li>
                  <li>
                    <a class="icon-square fa-twitter novi-icon" href="#" />
                  </li>
                  <li>
                    <a class="icon-square fa-google-plus novi-icon" href="#" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="footer-classic-item">
                <h4>Opening hours</h4>
                <div class="list-terms">
                  <dl>
                    <dt>Monday-Friday:</dt>
                    <dd>9am to 5pm</dd>
                  </dl>
                  <dl>
                    <dt>Saturday:</dt>
                    <dd>10am to 2pm</dd>
                  </dl>
                  <dl>
                    <dt>Sunday:</dt>
                    <dd>10am to 2pm</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="footer-classic-item">
                <h4>Quick links</h4>
                <ul class="list-link">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="careers.html">Careers</a></li>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="media.html">Media</a></li>
                  <li><a href="services.html">Services</a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="footer-classic-item">
                <h4>Contacts</h4>
                <ul class="list-contacts">
                  <li class="centered">
                    <span
                      class="icon icon-lg icon-secondary mdi mdi-cellphone-android novi-icon"
                    /><a class="link-phone" href="tel:#">+1 (409) 987–5874</a>
                  </li>
                  <li class="centered">
                    <span
                      class="icon icon-lg icon-secondary mdi mdi-email-outline novi-icon"
                    /><a href="mailto:#">info@demolink.org</a>
                  </li>
                  <li>
                    <span
                      class="icon icon-xl icon-secondary mdi mdi-map-marker novi-icon"
                    /><a href="#"
                      >Washington, USA 6036 Richmond hwy., Alexandria, VA,
                      2230</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-classic-bottom">
        <div class="container">
          <p class="rights">
            <span>&copy;&nbsp;</span><span class="copyright-year" /><span
              >&nbsp;</span
            ><span>Top Project</span><span>.&nbsp;</span
            ><a href="privacy-policy.html">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-parallax-overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--home-page-parallax-overlay-bg);
}
</style>
