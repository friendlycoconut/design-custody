<template>
  <header class="bg-white dark:bg-gray-900 shadow">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-end">
        <!-- Logo -->
        <div></div>

        <!-- Desktop Navigation -->
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                href="#"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                href="#"
              >
                Capabilities
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                href="#"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <!-- Contact Button -->
        <div class="hidden md:block contact-btn">
          <a
            href="#"
            class="rounded-md bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-teal-600"
          >
            Contact Us
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="rounded-md p-2 dark:bg-gray-900 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
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
      <nav v-if="isOpen" class="md:hidden">
        <ul class="mt-2 space-y-2">
          <li>
            <a
              href="#"
              class="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              Capabilities
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-md bg-teal-500 px-4 py-2 text-white hover:bg-teal-600"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleMenu,
    };
  },
});
</script>

<style scoped>
header {
  transition: all 0.3s ease-in-out;
}
.contact-btn {
  margin-left: 2rem;
}
</style>
