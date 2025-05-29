<template>
  <div>
    <!-- <section
      class="breadcrumbs-custom bg-image context-dark"
      style="background-image: url(//images/bg-image-09-1920x735.jpg)"
    >
      <div class="container">
        <h2 class="breadcrumbs-custom-title">Single Project</h2>
        <ul class="breadcrumbs-custom-path">
          <li><a href="index.html">Home</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li class="active">Single Project</li>
        </ul>
      </div>
    </section> -->

    <section class="section bg-default section-lg">
      <div class="container">
        <div class="row row-20 justify-content-between align-items-end">
          <div class="col-lg-5">
            <h2 class="slick-main-title">Межова, 7</h2>
          </div>
          <div class="col-lg-7">
            <ul
              class="slick-slider-filter list-inline-divided"
              id="slick-filter"
              data-filter-parent="#slick-slider-main"
            >
              <li>
                <a class="active" href="#" data-value=".slide"> All </a>
              </li>
              <li>
                <a href="#" disabled data-value=".construction">
                  Construction
                </a>
              </li>
              <li><a href="#" data-value=".remodeling ">Remodeling</a></li>
              <li>
                <a href="#" data-value=".interior-design">Interior design</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="slick-slider-main-wrap">
          <div
            class="slick-slider slick-slider-main"
            id="slick-slider-main"
            data-filter="#slick-filter"
            data-arrows="true"
            data-fade="true"
            data-loop="false"
            data-fraction="#slick-fraction"
            data-dots="false"
            data-swipe="false"
            data-items="1"
            data-sm-items="1"
            data-md-items="1"
            data-lg-items="1"
            data-xl-items="1"
            data-custom-arrows="true"
            data-arrows-class=".custom-slick-arrows"
          >
            <div class="slide construction">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>1 поверх</h4>
                    <p>
                      Eastwood Center comprises two multi-storey buildings for
                      office and retail use. At the heart of the square is a
                      1,000m2 landscaped area, overlooked by the office spaces.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>236</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>17</span>
                          <span class="project-info-value-metrics">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div
                    class="slick-slider slick-slider-projects"
                    id="carousel-parent-1"
                    data-for="#child-carousel-1"
                    data-child="#child-carousel-1"
                    data-loop="false"
                    data-fade="true"
                    data-select="true"
                    data-draggable="true"
                    data-items="1"
                    data-sm-items="1"
                    data-md-items="1"
                    data-lg-items="1"
                    data-xl-items="1"
                  >
                    <div class="item">
                      <img
                        src="/images/1floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/2floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/3floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/4floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/5floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-1"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-1"
                    data-select="true"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div v-for="index in 5" :key="index" class="item">
                      <div class="apartment-number">{{ index }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide remodeling">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>2 поверх</h4>
                    <p>
                      Eastwood Center comprises two multi-storey buildings for
                      office and retail use. At the heart of the square is a
                      1,000m2 landscaped area, overlooked by the office spaces.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>236</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>17</span>
                          <span class="project-info-value-metrics">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div
                    class="slick-slider slick-slider-projects"
                    id="carousel-parent-2"
                    data-for="#child-carousel-2"
                    data-child="#child-carousel-2"
                    data-loop="false"
                    data-fade="true"
                    data-select="true"
                    data-draggable="true"
                    data-items="1"
                    data-sm-items="1"
                    data-md-items="1"
                    data-lg-items="1"
                    data-xl-items="1"
                  >
                    <div class="item">
                      <img
                        src="/images/1floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/2floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/3floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/4floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/5floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-2"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-2"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="4"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div v-for="index in 5" :key="index" class="item">
                      <div class="apartment-number">{{ index }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide interior-design">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>3 поверх</h4>
                    <p>
                      Eastwood Center comprises two multi-storey buildings for
                      office and retail use. At the heart of the square is a
                      1,000m2 landscaped area, overlooked by the office spaces.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>236</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>17</span>
                          <span class="project-info-value-metrics">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div
                    class="slick-slider slick-slider-projects"
                    id="carousel-parent-3"
                    data-for="#child-carousel-3"
                    data-child="#child-carousel-3"
                    data-loop="false"
                    data-fade="true"
                    data-select="true"
                    data-draggable="true"
                    data-items="1"
                    data-sm-items="1"
                    data-md-items="1"
                    data-lg-items="1"
                    data-xl-items="1"
                  >
                    <div class="item">
                      <img
                        src="/images/1floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/2floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/3floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/4floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/5floor-1 (1).png"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-3"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-3"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="4"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div v-for="index in 5" :key="index" class="item">
                      <div class="apartment-number">{{ index }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="custom-slick-arrows">
            <div class="slick-fraction" id="slick-fraction">
              <span class="slick-fraction-current"></span
              ><span class="slick-fraction-divider">/</span
              ><span class="slick-fraction-all"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.apartment-number {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  margin: 0 auto;
  padding: 16px;
  background-color: var(--accent-col);
  border-radius: 50%;
  font-size: 24px;
  color: var(--white-col);
  transition: background-color 0.2s ease-in;
}

.slick-current > .apartment-number {
  background-color: var(--secondary-col);
}
</style>
