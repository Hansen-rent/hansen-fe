<template>
  <div class="page">
    <!-- Hero section -->
    <section
      class="hero-section-parallax-overlay parallax-container section"
      data-parallax-img="/images/home-page/main-bg.jpg"
    >
      <div class="parallax-content section hero-section context-dark">
        <div class="container">
          <h2>СХОДИ ДО ПРОЦВІТАННЯ</h2>
          <hr class="hero-section-divider divider" />
          <h4>ДОСТУПНЕ ЖИТЛО ТА СТАЛИЙ РОЗВИТОК ГРОМАД</h4>
          <!-- <div class="hero-section-logo-wrapper">
            <img
              class="hero-section-logo"
              src="/images/hum-logo-m.png"
              alt="HUM Logo"
              width="210"
              height="70"
            />
            <p>HUM.GIVING</p>
          </div> -->
        </div>
      </div>
    </section>

    <section class="second-section section section-lg bg-default">
      <div class="container">
        <div class="row row-30">
          <div class="col-md-6">
            <img
              src="/images/home-page/page2_img2.jpeg"
              alt=""
              width="770"
              height="485"
            />
          </div>
          <div class="second-section-list-wrapper col-md-6">
            <h4 class="second-section-list-title mb-2">ЦІЛІ:</h4>
            <ul class="second-section-list">
              <li class="second-section-list-item">
                Забезпечити доступне житло для українських ВПО та інших осіб,
                які постраждали від війни.
              </li>
              <li class="second-section-list-item">
                Надати широкий спектр соціальної інфраструктури та зручностей.
              </li>
              <li class="second-section-list-item">
                Розробляти якісні, сучасні та енергоефективні будівлі.
              </li>
              <li class="second-section-list-item">
                Пріоритезувати соціальну інтеграцію та сприяти покращенню
                фізичного й психічного здоров’я українських ВПО
              </li>
            </ul>
          </div>
        </div>
        <div class="row row-30 flex-md-row-reverse">
          <div class="col-md-6">
            <img
              src="/images/home-page/page2_img1.jpeg"
              alt=""
              width="770"
              height="485"
            />
          </div>
          <div class="second-section-text col-md-6">
            <p>
              “Ваші гроші – це не благодійність. Це інвестиція у глобальну
              безпеку та демократію, до якої ми ставимося найвідповідальніше.”
            </p>
            <p>
              - <span class="flat-text">Президент</span> Володимир Зеленський
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <img
        class="presentation-img"
        src="/images/home-page/presentation-1.jpg"
        alt=""
        width="1600"
        height="900"
      />
      <img
        class="presentation-img"
        src="/images/home-page/presentation-2.jpg"
        alt=""
        width="1600"
        height="900"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-section-parallax-overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--home-page-parallax-overlay-bg);
}

.hero-section {
  --section-padding: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: max(80.63vh, 550px);
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  text-align: center;
}

.hero-section h2 {
  margin-left: auto;
  margin-right: auto;
  font-size: 52px;
  text-transform: uppercase;
}

.hero-section h4 {
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
}

.hero-section-divider {
  height: 6px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  border-color: var(--secondary-col);
}

.hero-section-divider::after {
  width: 100%;
  height: 100%;
  background-color: var(--secondary-col);
}

.hero-section-logo-wrapper {
  position: absolute;
  bottom: var(--section-padding);
  left: 50%;
  transform: translateX(-50%);
}

.hero-section-logo-wrapper p {
  font-size: 16px;
}

.hero-section-logo {
  padding: 2px;
  background-color: var(--white-col);
  border-radius: 6px;
}

@media (min-width: 1200px) and (min-height: 857px) {
  .hero-section {
    padding-bottom: 185px;
  }
}

.second-section {
  background-color: rgba(var(--blue-500-rgb), 1);
  color: var(--secondary-col);
  font-size: 24px;
  font-weight: 700;
}

.second-section-list-wrapper {
  padding: 48px;
  background-color: var(--secondary-col);
  color: rgba(var(--blue-500-rgb), 1);
  font-size: 16px;
}

.second-section-list {
  padding-left: 20px;
  font-weight: 400;
}

.second-section-list-title {
  font-size: 32px;
  color: rgba(var(--blue-500-rgb), 1);
}

.second-section-list-item {
  position: relative;
}

.second-section-list-item:not(:last-child) {
  margin-bottom: 10px;
}

.second-section-list-item::before {
  content: "\00B7";
  position: absolute;
  top: 50%;
  left: -14px;
  transform: translate(-50%, -54%);
  color: rgba(var(--blue-500-rgb), 1);
  font-size: 52px;
}

.second-section-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  text-align: center;
}

.flat-text {
  font-weight: 400;
}

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
