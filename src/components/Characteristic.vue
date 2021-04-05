<template>
  <div class="characteristic">
    <div class="wrapName">
      <p class="name">{{name}}</p>
      <p class="placeholder">{{placeholder}}</p>
    </div>
    <div class="square">
      <p class="value">{{value}}</p>
    </div>
    <div class="square">
      <p class="modifier">{{modifier}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Characteristic',
  props: {
    name: String,
    value: Number,
    modifier: String,
    placeholder: String,
  },
});
</script>

<style scoped>
.characteristic{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: solid 1px #746f6f;
}
.name, .value, .modifier, .placeholder{
  margin: 0;
}
.name{
  color: rgb(194, 26, 26);
  font-weight: bold;
  font-size: 1.2rem;
}
.wrapName{
  width: 50%;
  text-align: right;
}
.square{
  background-color: #0080007a;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
