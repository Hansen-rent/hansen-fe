<template>
  <header class="page-header">
    <!-- RD Navbar-->
    <div class="rd-navbar-wrap">
      <nav
        class="rd-navbar rd-navbar-classic"
        data-layout="rd-navbar-fixed"
        data-sm-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed"
        data-md-device-layout="rd-navbar-fixed"
        data-lg-layout="rd-navbar-fixed"
        data-lg-device-layout="rd-navbar-fixed"
        data-xl-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
        data-lg-stick-up-offset="46px"
        data-xl-stick-up-offset="46px"
        data-xxl-stick-up-offset="46px"
        data-lg-stick-up="true"
        data-xl-stick-up="true"
        data-xxl-stick-up="true"
      >
        <div class="rd-navbar-main-outer">
          <div class="rd-navbar-main">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- RD Navbar Toggle-->
              <button
                class="rd-navbar-toggle"
                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
              >
                <span></span>
              </button>
              <!-- RD Navbar Brand-->
              <div class="rd-navbar-brand">
                <!--Brand-->
                <RouterLink to="/" class="brand brand-logo">
                  <img
                    src="/images/hum-logo-lg.png"
                    alt=""
                    width="282"
                    height="141"
                  />
                </RouterLink>
                <RouterLink to="/" class="brand brand-logo-stuck">
                  <img
                    src="/images/hum-logo-m.png"
                    alt=""
                    width="115"
                    height="62"
                  />
                </RouterLink>
                <div class="rd-navbar-brand-triangle"></div>
              </div>
            </div>
            <div class="rd-navbar-main-element">
              <div class="rd-navbar-nav-wrap">
                <!-- RD Navbar Nav-->
                <ul class="rd-navbar-nav rd-navbar-nav-left">
                  <li class="rd-nav-item active">
                    <a class="rd-nav-link" href="index.html">Home</a>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="home-1.html"
                          >Home 1</a
                        >
                      </li>
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="home-2.html"
                          >Home 2</a
                        >
                      </li>
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="home-3.html"
                          >Home 3</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="services.html">Services</a>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="construction.html"
                          >Construction</a
                        >
                      </li>
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="#">Remodeling</a>
                      </li>
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="#"
                          >General Contracting</a
                        >
                      </li>
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="#">Interior Design</a>
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="about-us.html">About Us</a>
                  </li>
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="projects.html">Projects</a>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="single-project.html"
                          >Single Project</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="rd-navbar-nav rd-navbar-nav-right">
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="#">Pages</a>
                    <!-- RD Navbar Megamenu-->
                    <ul class="rd-menu rd-navbar-megamenu">
                      <li class="rd-megamenu-item">
                        <h6 class="rd-megamenu-title">Elements</h6>
                        <ul class="rd-megamenu-list">
                          <li class="rd-megamenu-list-item">
                            <a class="rd-megamenu-list-link" href="buttons.html"
                              >Buttons</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a class="rd-megamenu-list-link" href="forms.html"
                              >Forms</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="progress-bars.html"
                              >Progress bars</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a class="rd-megamenu-list-link" href="tables.html"
                              >Tables</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="tabs-and-accordions.html"
                              >Tabs and accordions</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="typography.html"
                              >Typography</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="rd-megamenu-item">
                        <h6 class="rd-megamenu-title">Pages 1</h6>
                        <ul class="rd-megamenu-list">
                          <li class="rd-megamenu-list-item">
                            <a class="rd-megamenu-list-link" href="careers.html"
                              >Careers</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="grid-system.html"
                              >Grid system</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="our-history.html"
                              >Our History</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="our-team.html"
                              >Our Team</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="privacy-policy.html"
                              >Privacy policy</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="testimonials.html"
                              >Testimonials</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="rd-megamenu-item">
                        <h6 class="rd-megamenu-title">Pages 2</h6>
                        <ul class="rd-megamenu-list">
                          <li class="rd-megamenu-list-item">
                            <a class="rd-megamenu-list-link" href="404.html"
                              >404</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a class="rd-megamenu-list-link" href="503.html"
                              >503</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="coming-soon.html"
                              >Coming Soon</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="maintenance.html"
                              >Maintenance</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="search-results.html"
                              >Search results</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a class="rd-megamenu-list-link" href="why-us.html"
                              >Why Us</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="rd-megamenu-item">
                        <h6 class="rd-megamenu-title">Headers &amp; Footers</h6>
                        <ul class="rd-megamenu-list">
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="header-default.html"
                              >Header Default</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="header-modern.html"
                              >Header Modern</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="header-sidebar.html"
                              >Header Sidebar</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="footer-default.html"
                              >Footer Default</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="footer-modern.html"
                              >Footer Modern</a
                            >
                          </li>
                          <li class="rd-megamenu-list-item">
                            <a
                              class="rd-megamenu-list-link"
                              href="footer-boxed.html"
                              >Footer Boxed</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="media.html">Media</a>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <a class="rd-dropdown-link" href="media-post.html"
                          >Media Post</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item">
                    <a class="rd-nav-link" href="contact-us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <!-- RD Navbar Search-->
              <div class="rd-navbar-search">
                <button
                  class="rd-navbar-search-toggle rd-navbar-search-toggle-default rd-navbar-fixed-element-1"
                  data-rd-navbar-toggle=".rd-navbar-search"
                >
                  <span></span>
                </button>
                <form
                  class="rd-search"
                  action="search-results.html"
                  data-search-live="rd-search-results-live"
                  method="GET"
                >
                  <div class="form-wrap">
                    <label class="form-label" for="rd-navbar-search-form-input"
                      >Search...</label
                    >
                    <input
                      class="rd-navbar-search-form-input form-input"
                      id="rd-navbar-search-form-input"
                      type="text"
                      name="s"
                      autocomplete="off"
                    />
                    <div
                      class="rd-search-results-live"
                      id="rd-search-results-live"
                    ></div>
                    <div
                      class="rd-search-form-close fl-budicons-free-cross84"
                    ></div>
                    <button
                      class="rd-search-form-submit fl-bigmug-line-search74"
                      type="submit"
                    ></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style></style>
