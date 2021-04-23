<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/users/607d01adcc451719ccfc8e2e">ID</router-link> |
    <router-link to="/users/alukashevich">alukashevich</router-link> |
    <router-link to="/users/alukashevich/up">UP</router-link> |
    <router-link to="/users/stepan">stepan</router-link> |
    <router-link to="/users/stepan/up">UP2</router-link> |
    <router-link to="/test">Test</router-link>
    <teleportSkill/>
    <button @click="createTalent = true">создать талант</button>
    <button @click="signUp = true">Зарегестрироваться</button>
    <button @click="signIn = true">Войти</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  watch,
} from 'vue';
import { useStore } from 'vuex';
import TeleportSkill from '@/components/TeleportSkill.vue';

export default defineComponent({
  name: 'Header',
  components: {
    TeleportSkill,
  },
  setup() {
    const createTalent = ref(false);
    const createSkill = ref(false);
    const signUp = ref(false);
    const signIn = ref(false);
    return {
      createTalent,
      createSkill,
      signUp,
      signIn,
    };
  },
});
</script>

<style scoped>

</style>
