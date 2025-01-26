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
      <div class="flex h-16 items-center justify-between">
        <!-- Logo on the left -->
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            width="30"
            height="30"
            opacity="1"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="nnneon-grad"
              >
                <stop
                  stop-color="hsl(162, 100%, 58%)"
                  stop-opacity="1"
                  offset="0%"
                ></stop>
                <stop
                  stop-color="hsl(270, 73%, 53%)"
                  stop-opacity="1"
                  offset="100%"
                ></stop>
              </linearGradient>
              <filter
                id="nnneon-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="7 5"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
              <filter
                id="nnneon-filter2"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="23 34"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g
              stroke-width="23.5"
              stroke="url(#nnneon-grad)"
              fill="none"
              transform="rotate(239, 400, 400)"
            >
              <path
                d="M374.3271938269464 29.72883242497869C390.2135262868319 20.558506059963975 409.7864737131681 20.558506059963975 425.6728061730536 29.731399705596004L707.8272151373812 192.63305671547266C723.7135475972668 201.80338308048738 733.5000213104348 218.75513699655465 733.5000213104348 237.09835700720146V562.9016710269548C733.5000213104348 581.2448910376015 723.7135475972668 598.1966449536689 707.8272151373812 607.3695385993009L425.6728061730536 770.2711956091774C409.7864737131681 779.4415219741921 390.2135262868319 779.4415219741921 374.3271938269464 770.2686283285602L92.17278486261876 607.3669713186836C76.28645240273323 598.1966449536689 66.49997868956518 581.2448910376015 66.49997868956518 562.9016710269548V237.09835700720146C66.49997868956518 218.75513699655465 76.28645240273323 201.80338308048738 92.17278486261876 192.63048943485535L374.3271938269464 29.72883242497869Z "
                filter="url(#nnneon-filter)"
              ></path>
              <path
                d="M384.3271938269464 29.72883242497869C400.2135262868319 20.558506059963975 419.7864737131681 20.558506059963975 435.6728061730536 29.731399705596004L717.8272151373812 192.63305671547266C733.7135475972668 201.80338308048738 743.5000213104348 218.75513699655465 743.5000213104348 237.09835700720146V562.9016710269548C743.5000213104348 581.2448910376015 733.7135475972668 598.1966449536689 717.8272151373812 607.3695385993009L435.6728061730536 770.2711956091774C419.7864737131681 779.4415219741921 400.2135262868319 779.4415219741921 384.3271938269464 770.2686283285602L102.17278486261876 607.3669713186836C86.28645240273323 598.1966449536689 76.49997868956518 581.2448910376015 76.49997868956518 562.9016710269548V237.09835700720146C76.49997868956518 218.75513699655465 86.28645240273323 201.80338308048738 102.17278486261876 192.63048943485535L384.3271938269464 29.72883242497869Z "
                filter="url(#nnneon-filter2)"
                opacity="0.25"
              ></path>
              <path
                d="M364.3271938269464 29.72883242497869C380.2135262868319 20.558506059963975 399.7864737131681 20.558506059963975 415.6728061730536 29.731399705596004L697.8272151373812 192.63305671547266C713.7135475972668 201.80338308048738 723.5000213104348 218.75513699655465 723.5000213104348 237.09835700720146V562.9016710269548C723.5000213104348 581.2448910376015 713.7135475972668 598.1966449536689 697.8272151373812 607.3695385993009L415.6728061730536 770.2711956091774C399.7864737131681 779.4415219741921 380.2135262868319 779.4415219741921 364.3271938269464 770.2686283285602L82.17278486261876 607.3669713186836C66.28645240273323 598.1966449536689 56.49997868956518 581.2448910376015 56.49997868956518 562.9016710269548V237.09835700720146C56.49997868956518 218.75513699655465 66.28645240273323 201.80338308048738 82.17278486261876 192.63048943485535L364.3271938269464 29.72883242497869Z "
                filter="url(#nnneon-filter2)"
                opacity="0.25"
              ></path>
              <path
                d="M374.3271938269464 29.72883242497869C390.2135262868319 20.558506059963975 409.7864737131681 20.558506059963975 425.6728061730536 29.731399705596004L707.8272151373812 192.63305671547266C723.7135475972668 201.80338308048738 733.5000213104348 218.75513699655465 733.5000213104348 237.09835700720146V562.9016710269548C733.5000213104348 581.2448910376015 723.7135475972668 598.1966449536689 707.8272151373812 607.3695385993009L425.6728061730536 770.2711956091774C409.7864737131681 779.4415219741921 390.2135262868319 779.4415219741921 374.3271938269464 770.2686283285602L92.17278486261876 607.3669713186836C76.28645240273323 598.1966449536689 66.49997868956518 581.2448910376015 66.49997868956518 562.9016710269548V237.09835700720146C66.49997868956518 218.75513699655465 76.28645240273323 201.80338308048738 92.17278486261876 192.63048943485535L374.3271938269464 29.72883242497869Z "
              ></path>
            </g>
          </svg>
          <span class="text-white font-bold text-lg">Design custody</span>
        </div>

        <div></div>
        <!-- Desktop Navigation (Right-aligned) -->
        <nav aria-label="Global" class="hidden md:block content-end">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <button
                @click="scrollToSection('homeHeader')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:text-gray-300"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('services')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:text-gray-300"
              >
                Our Services
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('portfolioCards')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:text-gray-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('faq')"
                class="text-gray-700 bg-transparent rounded border hover:text-gray-900 dark:text-white dark:text-gray-300"
              >
                FAQ
              </button>
            </li>
          </ul>
        </nav>

        <!-- Contact Button (Right-aligned) -->
        <div class="hidden md:block">
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
            class="rounded-md p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:bg-gray-800"
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
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:bg-gray-800"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('services')"
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:bg-gray-800"
            >
              Our Services
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('portfolioCards')"
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:bg-gray-800"
            >
              Capabilities
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('faq')"
              class="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:bg-gray-800"
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#599e72', endColorstr='#651baa',GradientType=1 ); /* IE6-9 */
}
</style>
