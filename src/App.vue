<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex justify-center gap-4">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
