<template>
  <figure>
    <figcaption
      class="relative flex flex-col border-2 border-indigo-300 py-7 px-5"
    >
      <div class="flex justify-between text-white">
        <h2 class="inline-block pr-1 text-xl">{{ titre }}</h2>
        <DotsHorizontalIcon class="inline-block pr-1 w-10" />
      </div>

      <hr class="mb-4 mt-0 border-t-8 rounded-full border-indigo-300" />

      <button class="text-white bg-indigo-500 rounded-lg text-2xl">
        VALIDER
      </button>
    </figcaption>
  </figure>
</template>

<script >
import { DotsHorizontalIcon } from "@heroicons/vue/outline";
export default {
  name: "QuestView",
  components: { DotsHorizontalIcon },
};
</script>
