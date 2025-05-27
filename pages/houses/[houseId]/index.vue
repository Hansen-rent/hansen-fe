<template>
  <div>
    <section
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
    </section>

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
              <li><a class="active" href="#" data-value=".slide">All</a></li>
              <li><a href="#" data-value=".construction">Construction</a></li>
              <li><a href="#" data-value=".remodeling ">Remodeling</a></li>
              <li>
                <a href="#" data-value=".interior-design">Interior design</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="slick-slider-main-wrap">
          <!--data-fade='true'-->
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
                    <div v-for="index in 20" :key="index" class="item">
                      <div class="apartment-number">{{ index }}</div>
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
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide construction">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>Hearst Business Center</h4>
                    <p>
                      We built this Business Center in cooperation with
                      Constructo, our longtime partner. Our team of designers
                      and engineers developed the interior design and planning.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>2500</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>35</span>
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
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
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
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide construction">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>California Mega Mall</h4>
                    <p>
                      Work began in March 2013 on the first stage of the
                      extension to California Mega Mall. The initial work
                      includes an 8,000m², 2 level structure for one main anchor
                      tenant.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>300</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>54</span>
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
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
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
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide remodeling">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>Hearst Business Center</h4>
                    <p>
                      We built this Business Center in cooperation with
                      Constructo, our longtime partner. Our team of designers
                      and engineers developed the interior design and planning.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>2500</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>35</span>
                          <span class="project-info-value-metrics">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div
                    class="slick-slider slick-slider-projects"
                    id="carousel-parent-4"
                    data-for="#child-carousel-4"
                    data-child="#child-carousel-4"
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
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-4"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-4"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide remodeling">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>California Mega Mall</h4>
                    <p>
                      Work began in March 2013 on the first stage of the
                      extension to California Mega Mall. The initial work
                      includes an 8,000m², 2 level structure for one main anchor
                      tenant.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>300</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>54</span>
                          <span class="project-info-value-metrics">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div
                    class="slick-slider slick-slider-projects"
                    id="carousel-parent-5"
                    data-for="#child-carousel-5"
                    data-child="#child-carousel-5"
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
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-5"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-5"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide remodeling">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>Eastwood Center</h4>
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
                    id="carousel-parent-6"
                    data-for="#child-carousel-6"
                    data-child="#child-carousel-6"
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
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-6"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-6"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide interior-design">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>California Mega Mall</h4>
                    <p>
                      Work began in March 2013 on the first stage of the
                      extension to California Mega Mall. The initial work
                      includes an 8,000m², 2 level structure for one main anchor
                      tenant.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>300</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>54</span>
                          <span class="project-info-value-metrics">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div
                    class="slick-slider slick-slider-projects"
                    id="carousel-parent-7"
                    data-for="#child-carousel-7"
                    data-child="#child-carousel-7"
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
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-7"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-7"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide interior-design">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>Eastwood Center</h4>
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
                    id="carousel-parent-8"
                    data-for="#child-carousel-8"
                    data-child="#child-carousel-8"
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
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-8"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-8"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-01-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-02-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-03-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide interior-design">
              <div class="row justify-content-between row-30">
                <div class="col-lg-4">
                  <div class="project-info-wrap">
                    <h4>Hearst Business Center</h4>
                    <p>
                      We built this Business Center in cooperation with
                      Constructo, our longtime partner. Our team of designers
                      and engineers developed the interior design and planning.
                    </p>
                    <div class="project-info">
                      <div class="project-info-item">
                        <div class="project-info-title"><span>Area</span></div>
                        <div class="project-info-value">
                          <span>2500</span>
                          <span class="project-info-value-metrics"
                            >m<span>2</span></span
                          >
                        </div>
                      </div>
                      <div class="project-info-item">
                        <div class="project-info-title"><span>terms</span></div>
                        <div class="project-info-value">
                          <span>35</span>
                          <span class="project-info-value-metrics">Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div
                    class="slick-slider slick-slider-projects"
                    id="carousel-parent-9"
                    data-for="#child-carousel-9"
                    data-child="#child-carousel-9"
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
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="668"
                        height="454"
                      />
                    </div>
                  </div>
                  <div
                    class="slick-slider slick-slider-projects-thumbs"
                    id="child-carousel-9"
                    data-arrows="true"
                    data-loop="false"
                    data-dots="false"
                    data-draggable="true"
                    data-swipe="true"
                    data-items="1"
                    data-for="#carousel-parent-9"
                    data-xs-items="2"
                    data-sm-items="3"
                    data-md-items="3"
                    data-lg-items="2"
                    data-select="true"
                    data-xl-items="3"
                    data-slide-to-scroll="1"
                  >
                    <div class="item">
                      <img
                        src="/images/projects-slide-04-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-05-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-06-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-07-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-08-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="/images/projects-slide-09-668x454.jpg"
                        alt=""
                        width="171"
                        height="126"
                      />
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

<script setup>
const route = useRoute();
</script>
