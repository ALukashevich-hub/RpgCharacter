<template>
  <div class="characteristic">
    <div class="wrapName">
      <p class="name">{{name}}</p>
      <p class="placeholder">{{placeholder}}</p>
    </div>
    <div class="square"
      :class="{downgrade: isDowngrade, increase: isIncrease}">
      <p class="value">{{value}}</p>
    </div>
    <div class="squareTwo"
      :class="{downgrade: isDowngrade, increase: isIncrease}">
      <p class="modifier">{{getModifier}}</p>
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
    placeholder: String,
  },
  data() {
    return {
      modifierValue: this.value,
    };
  },
  computed: {
    updateModifier(): number {
      const normalValue = 10;
      const divider = 2;
      if (this.value !== undefined) {
        return Math.floor((this.value - normalValue) / divider);
      }
      return 0;
    },
    getModifier(): string {
      return this.updateModifier > 0 ? `+${this.updateModifier}` : `${this.updateModifier}`;
    },
    isDowngrade(): boolean {
      return this.updateModifier < 0;
    },
    isIncrease(): boolean {
      return this.updateModifier > 0;
    },
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
.square, .squareTwo{
  background-color: #7979797a;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.squareTwo{
  width: 2.5rem;
}
.downgrade{
  background-color: #ff1c1c7a;
}
.increase{
  background-color: #4bff1e7a;
}
</style>
