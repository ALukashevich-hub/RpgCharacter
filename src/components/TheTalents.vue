<template>
  <div class="wrapTalents">
    <Talent
      v-for="(talent, index) in talents"
      :key="index"
      :talentName="talent.name"
      :talentDescription="talent.description"
      :talentImg="talent.img"
      />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Talent from '@/components/Talent.vue';

export default defineComponent({
  name: 'TheTalents',
  components: {
    Talent,
  },
  data() {
    return {
      talents: [{
        img: 'laziness.jpg',
        name: 'Лень',
        description: 'Лень - двигатель прогресса!',
      },
      {
        img: 'shot.png',
        name: 'Мастер стрелок',
        description: 'Попадаю кусочком сахара в стакан с 20 метров',
      },
      {
        img: 'logo.png',
        name: 'Vue',
        description: 'Кручу этот Vue как захочу',
      }],
    };
  },
});
</script>

<style scoped>
.wrapTalents{
  display: flex;
  flex-flow: wrap;
  flex-shrink: 1;
  /* width: 50%; */
}
</style>
