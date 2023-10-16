<template>
  <button
    v-if="$colorMode.preference"
    class="btn p-2 bg-gradient-to-tr hover:from-primary hover:from-5% hover:to-transparent drop-shadow-sm"
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