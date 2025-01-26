<template>
  <section>
    <div
      class="container mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <header class="text-center mb-12">
        <h2
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl"
        >
          <span class="block"> Portfolio </span>
        </h2>

        <p
          class="mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white"
        >
          Discover how we transform brands with standout web design and
          development
        </p>
      </header>

      <ul class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="project in projects" :key="project.id">
          <article
            class="hover:animate-background flex flex-col h-full rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
          >
            <div
              class="flex flex-col justify-between h-full rounded-lg bg-white p-6 dark:bg-gray-900"
            >
              <div>
                <time
                  :datetime="project.date"
                  class="block text-xs text-gray-500 dark:text-gray-400"
                >
                  {{ project.date }}
                </time>

                <a :href="project.link">
                  <h3
                    class="mt-3 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    {{ project.title }}
                  </h3>
                </a>
              </div>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="whitespace-nowrap rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "PortfolioSection",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "How to center an element using JavaScript and jQuery",
          date: "2022-10-10",
          link: "#",
          tags: ["Snippet", "JavaScript"],
        },
        {
          id: 2,
          title: "Responsive Design Basics",
          date: "2022-10-11",
          link: "#",
          tags: ["CSS", "Design"],
        },
        {
          id: 3,
          title: "Vue.js Dynamic Components",
          date: "2022-10-12",
          link: "#",
          tags: ["Vue.js", "Components"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 5000px;
  padding-bottom: 10rem;
}
</style>
