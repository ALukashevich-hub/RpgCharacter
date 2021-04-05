<template>
  <div class="skill">
    <h2 class="skillName">{{ skillName }}</h2>
    <div class="skillValue">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <p class="skillDescription">
      Описаниеsdfsdddddddddddddddddddddddfsdfsdffdgfdgdfgfdgfdgfdg
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Skill',
  props: {
    skillName: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill{
  display: flex;
  flex-direction: column;
  border: dotted 2px rgb(136, 136, 136);
  margin: 0 0 1rem 1rem;
  align-items: center;
  width: 300px;
  height: 180px;
}
.skillName{
  margin: 1rem 0 0 0;
}
.skillValue{
  display: flex;
  margin: 1rem;
}
.skillDescription{
  margin: 0 1rem 1rem 1rem;
  word-break: break-all;
}
.block{
  width: 3rem;
  height: 1rem;
  background-color: green;
  border: solid 1px black;
  border-radius: 10px;
}
</style>
