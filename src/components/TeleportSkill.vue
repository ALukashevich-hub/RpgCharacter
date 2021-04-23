<template>
  <div>
    <button @click="createSkill = true">создать навык</button>
    <teleport to="body">
    <div v-if="createSkill" class="modal">
      <div>
        <label for="">название навыка</label>
        <input type="text" v-model="skill.name">
        <label for="">описание навыка</label>
        <input v-for="index in 10" :key="index" type="text" v-model="skill.descriptions[index]">
        <button @click="create">создать</button>
        <button @click="createSkill = false">
          Закрыть
        </button>
      </div>
    </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  reactive,
  watch,
} from 'vue';
import { useStore } from 'vuex';
import postData from '@/api/postData';

export default defineComponent({
  name: 'TeleportSkill',
  setup() {
    const createSkill = ref(false);
    const skill = reactive({ name: '', descriptions: [] });
    const create = postData('http://localhost:3100/api/skills', skill);
    return {
      createSkill,
      skill,
      create,
    };
  },
});
</script>

<style scoped>

.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}

</style>
