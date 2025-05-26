<template>
  <div>
    <!-- Breadcrumbs-->
    <section
      class="breadcrumbs-custom bg-image context-dark"
      style="background-image: url(/images/bg-image-09-1920x735.jpg)"
    >
      <div class="container">
        <h2 class="breadcrumbs-custom-title">Доступна оренда</h2>
        <ul class="breadcrumbs-custom-path">
          <li>
            <RouterLink to="/">Головна</RouterLink>
          </li>
          <li class="active">Доступна оренда</li>
        </ul>
      </div>
    </section>
    <!-- Our Projects-->
    <section class="section section-md bg-default text-center">
      <div class="container">
        <div class="isotope-wrap">
          <div class="row row-30">
            <!-- Isotope Filters-->
            <!-- <div class="col-lg-12">
              <div
                class="isotope-filters isotope-filters-horizontal isotope-filters-classic"
              >
                <button
                  class="isotope-filters-toggle button button-secondary-light"
                  data-custom-toggle="#isotope-filters"
                  data-custom-toggle-disable-on-blur="true"
                >
                  Filter<span class="caret"></span>
                </button>
                <ul
                  class="isotope-filters-list inline-list"
                  id="isotope-filters"
                >
                  <li>
                    <a
                      class="active"
                      data-isotope-filter="*"
                      data-isotope-group="gallery"
                      href="#"
                      >All</a
                    >
                  </li>
                  <li>
                    <a
                      data-isotope-filter="construction"
                      data-isotope-group="gallery"
                      href="#"
                      >Construction</a
                    >
                  </li>
                  <li>
                    <a
                      data-isotope-filter="remodeling"
                      data-isotope-group="gallery"
                      href="#"
                      >Remodeling</a
                    >
                  </li>
                  <li>
                    <a
                      data-isotope-filter="interior-design"
                      data-isotope-group="gallery"
                      href="#"
                      >Interior Design</a
                    >
                  </li>
                </ul>
              </div>
            </div> -->
            <!-- Isotope Content-->
            <div class="col-lg-12">
              <div
                class="isotope"
                data-isotope-layout="fitRows"
                data-isotope-group="gallery"
              >
                <div class="row row-30">
                  <div
                    v-for="house in houses"
                    :key="house.houseId"
                    class="col-sm-6 col-lg-4 isotope-item"
                    :data-filter="house.filter"
                  >
                    <RouterLink
                      :to="`/houses/${house.houseId}`"
                      class="project-data"
                    >
                      <img
                        :src="house.image"
                        :alt="`${house.title} Photo`"
                        width="742"
                        height="574"
                      />
                      <div class="project-data-content">
                        <h5 class="project-data-title">{{ house.title }}</h5>
                        <p class="project-data-text">
                          {{ house.description }}
                        </p>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const houses = [
  {
    houseId: "1",
    filter: "construction",
    image: "/images/project-01-742x574.jpg",
    title: "Межова, 7",
    description:
      "This renovation project included several living room interior updates.",
  },
  //   {
  //     houseId: "2",
  //     filter: "construction",
  //     image: "/images/project-02-742x574.jpg",
  //     title: "Exterior Remodeling",
  //     description: "We worked on this project throughout the winter 2016.",
  //   },
  {
    houseId: "3",
    filter: "remodeling",
    image: "/images/project-03-742x574.jpg",
    title: "Відпочинку, 3",
    description:
      " Here we introduced some improvements to a 1980-styled bathroom.",
  },
  //   {
  //     houseId: "4",
  //     filter: "remodeling",
  //     image: "/images/project-04-742x574.jpg",
  //     title: "San Diego Childcare Center",
  //     description:
  //       "This center is a result of our cooperation with a local community of San Diego.",
  //   },
  {
    houseId: "5",
    filter: "interior-design",
    image: "/images/project-05-742x574.jpg",
    title: "Відпочинку, 4",
    description:
      "This house required some extra maintenance work on windows and roof",
  },
  //   {
  //     houseId: "5",
  //     filter: "interior-design",
  //     image: "/images/project-06-742x574.jpg",
  //     title: "Kitchen Redesign",
  //     description:
  //       "We transformed this kitchen with new furniture and finishing.",
  //   },
];
</script>
