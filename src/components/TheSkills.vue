<template>
  <div class="wrapSkills">
    <Skill skillName="javascript"/>
    <Skill skillName="typescript"/>
    <Skill skillName="C++"/>
    <Skill skillName="C#"/>
    <Skill skillName="Docker"/>
    <Skill skillName="Python"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Skill from '@/components/Skill.vue';

export default defineComponent({
  name: 'TheSkills',
  components: {
    Skill,
  },
});
</script>

<style scoped>
.wrapSkills{
  display: flex;
  flex-flow: wrap;
  flex-shrink: 1;
  justify-content: center;
  /* width: 50%; */
}
</style>
