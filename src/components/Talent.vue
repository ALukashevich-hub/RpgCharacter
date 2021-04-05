<template>
  <div class="talent">
    <div class="wrapImg">
      <img class="talentImg" :src="img" alt="">
      <h2 lang="ru" class="talentName">{{ talentName }}</h2>
    </div>
    <p lang="ru" class="talentDescription">
      {{talentDescription}}
    </p>
  </div>
</template>

<script lang="ts">
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Talent',
  props: {
    talentName: String,
    talentDescription: String,
    talentImg: String,
  },
  data() {
    return {
      img: require(`@/assets/${this.talentImg}`),
    };
  },
});
</script>

<style scoped>
.talentImg{
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-width: 5px;
  border-style: ridge;
}
.talent{
  display: flex;
  flex-flow: column nowrap;
  border: dotted 2px rgb(136, 136, 136);
  margin: 0 0 1rem 1rem;
  width: 200px;
  height: 180px;
}
.talentDescription{
  margin: 1rem;
  /* word-break: break-all; */
  hyphens: auto;
  text-align: left;
}
.talentName{
  margin: 0 0 0 1rem;
  font-weight: normal;
  font-size: 1.3rem;
  hyphens: auto;
  text-align: left;
}
.wrapImg{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
</style>
