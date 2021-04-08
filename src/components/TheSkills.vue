<template>
  <div class="wrapSkills">
    <Skill
      v-for="(skill, index) in skills"
      :key="index"
      :skillName="skill.name"
      :skillDescription="skill.description"
      :skillValue="skill.value"
      />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Skill from '@/components/Skill.vue';

interface ISkills {
  value: number;
  name: string;
  description: string;
}
export default defineComponent({
  name: 'TheSkills',
  components: {
    Skill,
  },
  data() {
    return {
      skills: [{
        value: 4,
        name: 'javascript',
        description: 'Разбираюсь в this и прототипном наследовании!',
      },
      {
        value: 3,
        name: 'typescript',
        description: 'использую Any вместо других типов, а что?',
      },
      {
        value: 4,
        name: 'Vue',
        description: 'return 0;',
      },
      {
        value: 1,
        name: 'React',
        description: 'return 0;',
      },
      {
        value: 3,
        name: 'Docker',
        description: 'return 0;',
      },
      {
        value: 4,
        name: 'HTML',
        description: 'return 0;',
      },
      {
        value: 4,
        name: 'CSS',
        description: 'return 0;',
      },
      {
        value: 3,
        name: 'Git',
        description: 'return 0;',
      },
      {
        value: 1,
        name: 'Node js',
        description: 'return 0;',
      },
      {
        value: 1,
        name: 'MongoDB',
        description: 'return 0;',
      }] as ISkills[],
    };
  },
});
</script>

<style scoped>
.wrapSkills{
  display: flex;
  flex-flow: wrap;
  flex-shrink: 1;
  /* width: 50%; */
}
</style>
