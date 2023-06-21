<template>
  <div class="mt-20 text-center text-lg">
    <h1 class="mb-4 text-4xl font-bold">Hello World!</h1>

    <p class="mb-4 text-xl">
      This is my custom template🧑‍💻<br />
      I will be glad if you put ⭐ on this
      <a
        href="https://github.com/Suppolyar/my-work-template"
        target="_blank"
        class="font-semibold text-sky-700 hover:underline"
        >repository in github</a
      >
      <br />
      Have a nice day, my friend 🫶
    </p>

    <div class="flex justify-center gap-4">
      <span
        v-for="(technology, index) in whatIncludeThisTemplate"
        :key="index"
        class="text-lg font-semibold"
        :class="technology.textColor"
      >
        {{ technology.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITecnhology {
  name: string;
  textColor: string;
}
const whatIncludeThisTemplate: ITecnhology[] = [
  {
    name: "Vite",
    textColor: "text-orange-600",
  },
  {
    name: "Vue 3",
    textColor: "text-green-700",
  },
  {
    name: "TypeScript",
    textColor: "text-blue-800",
  },
  {
    name: "TailwindCSS",
    textColor: "text-sky-700",
  },
  {
    name: "Eslint",
    textColor: "text-purple-700",
  },
  {
    name: "Prettier",
    textColor: "text-slate-700",
  },
];
</script>

<style scoped></style>
