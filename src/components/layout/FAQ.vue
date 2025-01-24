<template>
  <section>
    <div
      class="container mx-auto py-8 px-6 md:px-12 lg:px-20 bg-white dark:bg-gray-900"
    >
      <header class="text-center mb-12">
        <h2
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl"
        >
          <span class="block"> Frequently Asked Questions </span>
        </h2>

        <p
          class="mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white"
        >
          The most popular FAQs, you may have wanted to ask.
        </p>
      </header>

      <div class="flow-root">
        <div class="-my-6 divide-y divide-gray-100 dark:divide-gray-800">
          <details
            class="group py-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary
              class="flex cursor-pointer items-center justify-between text-gray-900 dark:text-white"
            >
              <h2 class="text-lg font-medium">
                How does pricing work for teams?
              </h2>

              <span class="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details
            class="group py-6 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
            >
              <h2 class="text-lg font-medium">
                How long does it take to make a website or custom design?
              </h2>

              <span class="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  height: 30rem;
  max-width: 1200px; /* A more reasonable max width */
  padding: 2rem; /* Adjusted padding to prevent excess height */
}
</style>
