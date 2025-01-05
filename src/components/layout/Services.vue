<template>
  <div class="container mx-auto font-sans text-white bg-black">
    <!-- Header -->
    <header class="flex justify-between items-center py-6 px-10">
      <nav class="flex space-x-8">
        <a href="#about" class="hover:text-gray-400">About us</a>
        <a href="#pricing" class="hover:text-gray-400">Pricing</a>
        <a href="#capabilities" class="hover:text-gray-400">Capabilities</a>
        <a href="#case-studies" class="hover:text-gray-400">Case studies</a>
      </nav>
      <button
        class="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200"
      >
        Get in touch
      </button>
    </header>

    <!-- Hero Section -->
    <section class="text-center py-20">
      <h1 class="text-5xl font-bold leading-snug">
        We create <span class="text-gray-300">unique</span> websites that help
        <span class="text-gray-300">brands stand out</span>
      </h1>
      <p class="text-lg text-gray-400 mt-6">
        Full-cycle development from concept to execution. Support and promotion
        included.
      </p>
      <button
        class="mt-8 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200"
      >
        Get a Consultation
      </button>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <h2 class="text-3xl text-center font-bold">Everything you need</h2>
      <p class="text-center text-gray-400 mt-4">
        Enjoy customizable tools, teamwork, and tracking features in one place.
      </p>
      <div class="grid grid-cols-3 gap-8 mt-10 px-10">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-6 bg-gray-900 rounded-md text-center"
        >
          <div class="text-3xl mb-4">🌟</div>
          <h3 class="font-bold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="py-20">
      <h2 class="text-3xl text-center font-bold">Portfolio</h2>
      <p class="text-center text-gray-400 mt-4">
        Discover how we transform brands with standout web design and
        development.
      </p>
      <div class="grid grid-cols-3 gap-8 mt-10 px-10">
        <div
          v-for="index in 6"
          :key="index"
          class="h-40 bg-gray-800 rounded-md"
        ></div>
      </div>
    </section>

    <!-- Customer Feedback -->
    <section class="py-20">
      <h2 class="text-3xl text-center font-bold">Customer Feedback</h2>
      <p class="text-center text-gray-400 mt-4">
        See how we transform brands with standout web design and development.
      </p>
      <div class="grid grid-cols-3 gap-8 mt-10 px-10">
        <div v-for="index in 3" :key="index" class="p-6 bg-gray-900 rounded-md">
          <p class="text-gray-400 italic">"Great service and support!"</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20">
      <h2 class="text-3xl text-center font-bold">Frequently Asked Questions</h2>
      <div class="mt-10 px-10 space-y-4">
        <details
          v-for="(faq, index) in faqs"
          :key="index"
          class="border-b border-gray-700 pb-4"
        >
          <summary class="flex justify-between cursor-pointer text-lg">
            {{ faq.question }}
            <span>+</span>
          </summary>
          <p class="text-gray-400 mt-2">{{ faq.answer }}</p>
        </details>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-20 text-center">
      <h2 class="text-3xl font-bold">Get a Consultation</h2>
      <p class="text-gray-400 mt-4">
        Celebrate the joy of accomplishment with an app designed to monitor
        progress.
      </p>
      <div class="mt-8 flex justify-center">
        <input
          type="email"
          placeholder="name@email.com"
          class="px-4 py-3 rounded-l-md text-black"
        />
        <button
          class="bg-white text-black px-6 py-3 rounded-r-md hover:bg-gray-200"
        >
          Get now
        </button>
      </div>
      <p class="text-gray-600 mt-10">
        &copy; 2024 YourCompany, Inc. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Feature {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default defineComponent({
  data() {
    return {
      features: <Feature[]>[
        { title: "UX/UI", description: "Intuitive, user-centered designs." },
        { title: "Development", description: "Efficient, scalable solutions." },
        {
          title: "CRM Integration",
          description: "Seamless workflows for customer management.",
        },
      ],
      faqs: <FAQ[]>[
        {
          question: "How does pricing work for teams?",
          answer: "Pricing is based on team size and features.",
        },
        {
          question: "What support is available?",
          answer: "24/7 support for all plans.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
}
</style>
