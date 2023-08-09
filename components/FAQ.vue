<template>
  <div class="mt-[43px] custom-bg-images">
    <div class="flex justify-center mb-16">
      <VerticalLine class="mr-4" />
      <h2 class="text-4xl font-bold">FAQs</h2>
    </div>
    <div
      v-for="(item, index) in faqs"
      :key="index"
      class="border-b w-full mx-auto p-5 md:w-[792px]"
    >
      <div
        class="flex items-center justify-between cursor-pointer"
        @click="toggleAnswer(index)"
      >
        <h3 class="text-lg w-4/5 md:w-auto md:text-xl md:font-medium">
          {{ item.question }}
        </h3>
        <button class="text-lg font-bold">
          <img
            v-if="item.showAnswer"
            src="../assets/img/minus.svg"
            alt="minus"
          />
          <img
            v-else="item.showAnswer"
            src="../assets/img/plus.svg"
            alt="plus"
          />
        </button>
      </div>
      <transition name="transition-slide">
        <p v-if="item.showAnswer" class="mt-2 text-base leading-8">
          {{ item.answer }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import faqs from "../.nuxt/types/faqa";

export default defineComponent({
  setup() {
    const plusSign = "../assets/img/plus.svg";
    const minusSign = "../assets/img/minus.svg";
    const faqs = ref<faqs[]>([
      {
        question: "How does URL shortening work?",
        answer:
          "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
        showAnswer: false,
      },
      {
        question:
          "Is it necessary to create an account to use the URL shortening service?",
        answer:
          "No, it is not necessary to create an account to use the URL shortening service, but it may provide additional benefits such as personalized features and link management.",
        showAnswer: false,
      },
      {
        question: "Are the shortened links permanent? Will they expire?",
        answer:
          "The performance or expiration of shortened links depends on the specific URL shortening service you are using, as different services may have different policies in place.",
        showAnswer: false,
      },
      {
        question:
          "Are there any limitations on the number of URLs I can shorten?",
        answer:
          "The limitations on the number of URLs you can shorten depend on the specific URL shortening service you are using, as different services may have different policies or tiers of service with varying limits.",
        showAnswer: false,
      },
      {
        question:
          "Can I customize the shortened URLs to reflect my brand or content?",
        answer:
          "Yes, many URL shortening services allow you to customize the shortened URLs to reflect your brand or content.",
        showAnswer: false,
      },
      {
        question: "Can I track the performance of my shortened URLs?",
        answer:
          "Yes, you can track the performance of your shortened URLs through link analytics provided by the URL shortening service.",
        showAnswer: false,
      },
      {
        question:
          "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
        answer:
          "The level of security and protection against spam or malicious activity varies, but reputable services implement and spam filters to safeguard shortened links.",
        showAnswer: false,
      },
      {
        question: "What is a QR code and what can it do?",
        answer:
          "A QR code is a two-dimensional barcode that can be scanned by a smartphone or QR code reader to quickly access information or perform actions based on the encoded content.",
        showAnswer: false,
      },
      {
        question:
          "Is there an API available for integrating the URL shortening service into my own applications or websites?",
        answer:
          "Yes, many URL shortening services provide APIs (Application Programming Interfaces) that allow developers to integrate the service into their own applications or websites, enabling them to programmatically generate and manage shortened URLs.",
        showAnswer: false,
      },
    ]);

    function toggleAnswer(index: number): void {
      faqs.value[index].showAnswer = !faqs.value[index].showAnswer;
    }
    return { faqs, toggleAnswer, plusSign, minusSign };
  },
});
</script>

<style scoped>
.transition-slide-enter-active {
  transition: all 0.5s ease-in-out;
}

.transition-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.transition-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.transition-slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.transition-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.transition-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.custom-bg-images {
  background-image: url("../assets/img/FAQS.left.svg"),
    url("../assets/img/FAQS-right.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, right bottom;
}
</style>
