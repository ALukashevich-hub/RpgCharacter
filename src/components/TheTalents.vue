<template>
  <div class="wrapTalents">
    <Talent talentName="javascript"/>
    <Talent talentName="typescript"/>
    <Talent talentName="C++"/>
    <Talent talentName="C#"/>
    <Talent talentName="Docker"/>
    <Talent talentName="Python"/>
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
});
</script>

<style scoped>
.wrapTalents{
  display: flex;
  flex-flow: wrap;
  flex-shrink: 1;
  justify-content: center;
  /* width: 50%; */
}
</style>
