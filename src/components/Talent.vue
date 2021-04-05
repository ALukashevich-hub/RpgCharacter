<template>
  <div class="talent">
    <img class="talentImg" src="" alt="">
    <h2 class="talentName">{{ talentName }}</h2>
    <p class="talentDescription">
      Описаниеsdfsdddddddddddddddddddddddfsdfsdffdgfdgdfgfdgfdgfdg
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Talent',
  props: {
    talentName: String,
  },
});
</script>

<style scoped>

</style>
