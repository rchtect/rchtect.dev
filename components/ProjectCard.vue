<template>
  <div
    class="card w-96 mb-10 lg:mr-10 backdrop-blur-lg shadow-lg rounded-md"
  >
    <figure class="m-0 z-10">
      <img :src="img" :alt="title" class="" />
    </figure>
    <div class="card-body z-10 backdrop-blur-[90px] rounded-md max-h-100">
      <h2 class="card-title">{{ title }}</h2>
      <p>
        {{ info }}
      </p>
      <div class="card-actions justify-between z-10">
        <a :href="code" target="_blank" v-if="code">
          <button class="btn btn-primary active:text-[#e6e6e6] bg-opacity-60 backdrop-blur-lg text-white hover:bg-opacity-20 hover:scale-125 duration-400">
            Code
          </button>
        </a>
        <a :href="site" target="_blank" v-if="site">
          <button class="btn btn-primary active:text-[#e6e6e6] bg-opacity-60 backdrop-blur-lg text-white hover:bg-opacity-20 hover:scale-125 duration-400">
            Visit
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
  title: String,
  info: String,
  code: String,
  site: String,
});
</script>
