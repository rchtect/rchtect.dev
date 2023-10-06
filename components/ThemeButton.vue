<template>
  <button
    v-if="$colorMode.preference"
    class="btn glass p-2 hover:bg-primary hover:bg-opacity-20"
    @click="
      $colorMode.preference =
        $colorMode.preference === 'light' ? 'dark' : 'light'
    "
  >
    <img
      v-if="$colorMode.preference === 'light'"
      src="@/assets/img/sun.png"
      class="h-full"
    />
    <img v-else src="@/assets/img/moon.png" class="h-full" />
  </button>
</template>

<script setup>
</script>