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
                  <li class="rd-nav-item">
                    <RouterLink class="rd-nav-link" to="/">Головна</RouterLink>
                  </li>
                  <li class="rd-nav-item">
                    <RouterLink class="rd-nav-link" to="/houses">
                      Оренда
                    </RouterLink>
                    <!-- RD Navbar Dropdown-->
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/houses">
                          Критерії відбору
                        </RouterLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/houses/1">
                          Межова, 7
                        </RouterLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/houses/3">
                          Відпочинку, 3
                        </RouterLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/houses/5">
                          Відпочинку, 4
                        </RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li class="rd-nav-item">
                    <RouterLink class="rd-nav-link" to="/coming-soon">
                      Оренда з викупом
                    </RouterLink>
                    <ul class="rd-menu rd-navbar-dropdown">
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/coming-soon">
                          Критерії відбору
                        </RouterLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/coming-soon">
                          Містечко Хансена 2
                        </RouterLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/coming-soon">
                          Lake Forest
                        </RouterLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/coming-soon">
                          Пухівка
                        </RouterLink>
                      </li>
                      <li class="rd-dropdown-item">
                        <RouterLink class="rd-dropdown-link" to="/coming-soon">
                          с. Глеваха
                        </RouterLink>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="rd-navbar-nav rd-navbar-nav-right">
                  <li class="rd-nav-item">
                    <RouterLink class="rd-nav-link" to="/news">
                      Новини
                    </RouterLink>
                  </li>
                  <li class="rd-nav-item">
                    <RouterLink class="rd-nav-link" to="/about-us">
                      Про нас
                    </RouterLink>
                  </li>
                </ul>
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
