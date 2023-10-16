<template>
  <div class="lg:flex lg:flex-row lg:justify-center lg:flex-wrap">
    <ProjectCard
      v-for="(item, index) in titleArray"
      v-bind:key="index"
      :title="titleArray[index]"
      :info="infoArray[index]"
      :code="codeArray[index]"
      :site="siteArray[index]"
      :img="imagesArray[index]"
    />
  </div>
</template>

<script setup>
import { imagesArray } from "~/components/data";
import { siteArray } from "~/components/data";
import { codeArray } from "~/components/data";
import { titleArray } from "~/components/data";
import { infoArray } from "~/components/data";
</script>