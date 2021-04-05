<template>
  <div class="skill">
    <h2 class="skillName">{{ skillName }}</h2>
    <div class="skillValue">
      <SkillPoint
        v-for="index in 10"
        :key="index"
        :isActive="skillValue >= index ? true : false"
        :PointValue="skillValue"
      />
    </div>
    <p lang="ru" class="skillDescription">
      {{skillDescription}}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SkillPoint from '@/components/SkillPoint.vue';

export default defineComponent({
  name: 'Skill',
  components: {
    SkillPoint,
  },
  props: {
    skillName: String,
    skillDescription: String,
    skillValue: Number,
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
  /* word-break: break-all; */
  hyphens: auto;
  text-align: left;
  align-self: flex-start;
}
</style>
