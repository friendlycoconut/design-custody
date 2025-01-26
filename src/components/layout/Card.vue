<template>
  <div
    class="block rounded-xl border border-gray-800 p-8 shadow-xl transition-all hover:shadow-lg hover:border-pink-500/10"
    :style="hoverStyles"
  >
    <svg
      class="w-10 h-10 text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      v-html="icon"
    ></svg>
    <h2 class="mt-4 text-xl font-bold text-white">{{ title }}</h2>
    <p class="mt-1 text-sm text-gray-300">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["hoverColor", "icon", "title", "description"],
  computed: {
    hoverStyles() {
      return {
        boxShadow: `0px 8px 24px rgba(var(--tw-shadow-${this.hoverColor}), 0.3)`,
        borderColor: `rgba(var(--tw-color-${this.hoverColor}), 0.1)`,
      };
    },
  },
};
</script>

<style>
/* Define the Tailwind-compatible colors if needed */
:root {
  --tw-shadow-purple: 139, 92, 246;
  --tw-shadow-green: 52, 211, 153;
  --tw-shadow-blue: 59, 130, 246;
  --tw-shadow-pink: 236, 72, 153;
  --tw-shadow-cyan: 6, 182, 212;
  --tw-shadow-gray: 156, 163, 175;

  --tw-color-purple: 139, 92, 246;
  --tw-color-green: 52, 211, 153;
  --tw-color-blue: 59, 130, 246;
  --tw-color-pink: 236, 72, 153;
  --tw-color-cyan: 6, 182, 212;
  --tw-color-gray: 156, 163, 175;
}
</style>
