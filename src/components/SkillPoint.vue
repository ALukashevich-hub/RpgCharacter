<template>
  <div
    class="block"
    :class="{ active: isActive }">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SkillPoint',
  props: {
    isActive: Boolean,
    PointValue: Number,
  },
});
</script>

<style scoped>
.block{
  width: 1.5rem;
  height: 1rem;
  background-color: rgb(158, 158, 158);
  border: solid 1px black;
  border-radius: 5px;
}
.active{
  background-color: rgb(255, 186, 38);
}
</style>
