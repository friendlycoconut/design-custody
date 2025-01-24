<script setup lang="ts">
import { inject, ref } from "vue";

// Inject the sectionRefs from the parent
const sectionRefs = inject("sectionRefs") as Record<
  string,
  { value: HTMLElement | null }
>;

// Function to scroll to a specific section
const scrollToSection = (sectionName: string) => {
  const section = sectionRefs?.[sectionName]?.value;

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section "${sectionName}" not found.`);
  }
};

// State for mobile menu toggle
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header
    class="gradient fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow"
  >
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-end">
        <!-- Desktop Navigation -->
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <button
                @click="scrollToSection('homeHeader')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('services')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
              >
                Our Services
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('portfolioCards')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('faq')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
              >
                FAQ
              </button>
            </li>
          </ul>
        </nav>

        <!-- Contact Button -->
        <div class="hidden md:block contact-btn">
          <a
            href="#"
            class="rounded border border-blue-600 bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75"
          >
            Contact Us
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="rounded-md p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <nav v-if="isOpen" class="mt-2 md:hidden">
        <ul class="space-y-2">
          <li>
            <button
              @click="scrollToSection('homeHeader')"
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('services')"
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              Our Services
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('portfolioCards')"
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              Capabilities
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('faq')"
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              Projects
            </button>
          </li>
          <li>
            <a
              href="#"
              class="block w-full text-left rounded-md bg-teal-500 px-4 py-2 text-white hover:bg-teal-600"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  transition: all 0.3s ease-in-out;
}
.contact-btn {
  margin-left: 2rem;
}
.gradient {
  background: #000000; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #3b82f6 0%,
    #111827 7%,
    #111827 93%,
    #9333ea 100%
  );
  background: -webkit-linear-gradient(
    left,
    #3b82f6 0%,
    #111827 7%,
    #111827 93%,
    #9333ea 100%
  );
  background: linear-gradient(
    to right,
    #599e72 0%,
    #111827 7%,
    #111827 93%,
    #651baa 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b82f6', endColorstr='#3b82f6',GradientType=1 ); /* IE6-9 */
}
</style>
