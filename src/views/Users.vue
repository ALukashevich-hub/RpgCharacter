<template>
  <div v-if="loading">Загрузка</div>
  <div v-if="error">Ошибка</div>
  <div v-if="!loading && !error" class="home">
    <div class="character">
      <h2 class="name">{{fullname}}</h2>
      <router-link :to="lvlUpLink" v-if="lvlUp" class="lvl">
        <span>Новый уроень</span>
      </router-link>
      <ul class="list">
        <li>Опыт</li>
        <li>Уровень {{lvl}}</li>
        <li>{{currentExp}} / {{highExp}}</li>
      </ul>
      <progress class="progress" :max="highExp" :value="currentExp"></progress>
      <div class="wrap">
        <img class="photo" alt="photo" src="../assets/test2.jpg">
        <div class="specifications">
          <Characteristic name="СИЛ" :value="characteristics.strength" placeholder="сила"/>
          <Characteristic name="ЛОВ" :value="characteristics.vitality" placeholder="ловкость"/>
          <Characteristic name="ВЫН" :value="characteristics.dexterity" placeholder="выносливость"/>
          <Characteristic name="ИНТ" :value="characteristics.intelligence" placeholder="интеллект"/>
          <Characteristic name="МДР" :value="characteristics.mind" placeholder="мудрость"/>
          <Characteristic name="ХАР" :value="characteristics.charisma" placeholder="харизма"/>
          <Characteristic name="УДЧ" :value="characteristics.luck" placeholder="удача"/>
        </div>
      </div>
    </div>
    <div class="dynamic-component">
      <div class="buttons">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab-button', { activeTab: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ nameTabs[index] }}
        </button>
      </div>
      <component :is="currentTab"></component>
    </div>
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
import { useRoute } from 'vue-router';
import Characteristic from '@/components/Characteristic.vue';
import TheSkills from '@/components/TheSkills.vue';
import TheTalents from '@/components/TheTalents.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Characteristic,
    TheTalents,
    TheSkills,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const lvlUpLink = ref('');
    lvlUpLink.value = `/users/${route.params.id}/up`;
    store.dispatch('getFullname', route.params.id);
    watch(() => route.params.id, () => {
      lvlUpLink.value = `/users/${route.params.id}/up`;
      store.dispatch('getFullname', route.params.id);
    });
    return {
      fullname: computed(() => store.state.user.fullname),
      loading: computed(() => store.state.isLoading),
      error: computed(() => store.state.isError),
      characteristics: computed(() => store.state.user.characteristics),
      lvlUpLink,
    };
  },
  data() {
    return {
      currentTab: 'TheSkills',
      tabs: ['TheSkills', 'TheTalents'],
      nameTabs: ['Навыки', 'Таланты'],
      birthday: new Date(1996, 6, 25),
      nowMinutes: 0,
      lvl: 0,
      highExp: 0,
      currentExp: 0,
      storedLvl: 24,
    };
  },
  computed: {
    lvlUp() {
      if (this.lvl > this.storedLvl) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    const minutesOnYear = 525600;
    this.highExp = minutesOnYear;
    const nowDate = new Date();
    this.lvl = Math.floor((nowDate.getTime() - this.birthday.getTime())
     / (1000 * 60 * 60 * 24 * 365.25));
    this.updateExp();
    setInterval(this.updateExp.bind(this), 60000);
  },
  methods: {
    updateExp() {
      const nowDate = new Date();
      const birthdayMonth = this.birthday.getMonth();
      const birthdayDay = this.birthday.getDay();
      const nowYear = nowDate.getFullYear();
      const pastYearMinutes = Math.round(new Date(nowYear - 1, birthdayMonth, birthdayDay).getTime()
       / (1000 * 60));
      this.nowMinutes = Math.round(nowDate.getTime() / (1000 * 60));
      this.currentExp = Math.round(this.nowMinutes - pastYearMinutes);
    },
  },
});
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: nowrap;
}
.name{
  margin:1rem 1rem 0 1rem;
}
.character{
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-left: 1rem;
}
.photo{
  /* width: 50%; */
  object-fit: cover;
  border-width: 10px;
  border-style: ridge;
  flex-shrink: 0;
}
.list{
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 1rem 1rem 0 1rem;
  font-size: 1.2rem;
}
.progress{
  width: 100%;
  height: 25px;
  color: rgba(15, 190, 38, 0.6);
  border: 4px ridge rgba(204, 224, 20, 0.6);
  margin-bottom: 1rem;
  border-radius: 5px;
}
.wrap{
  display: flex;
  flex-direction: row;
}
.specifications{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem;
  /* justify-content: space-around;
  width: 50%; */
  flex-grow: 1;
}
.lvl{
  display: flex;
  margin: 1rem 1rem 0 1rem;
  background-color: rgb(141, 141, 141);
  text-decoration: none;
  color: rgb(255, 248, 22);
  width: 50%;
  height: 30px;
  align-self: center;
  text-align: center;
  border-radius: 10px;
  border: 3px rgb(218, 218, 218) solid;
  box-shadow: 0 0 20px 5px rgb(218, 218, 218);
  outline: none;
  justify-content: center;
  align-items: center;
}
.buttons{
  margin-left: 1rem;
  text-align: left;
}
.tab-button{
  background-color: rgb(141, 141, 141);
  color: rgb(255, 248, 22);
  width: 20%;
  height: 30px;
  border: 3px rgb(218, 218, 218) solid;
  outline: none;
  margin: 0 5px 10px 0;
  cursor: pointer;
}
.tab-button:hover,.lvl:hover{
  background-color: rgb(109, 109, 109);
}
.activeTab{
  background-color: rgb(65, 65, 65);
  color: rgb(255, 248, 22);
  border: 3px rgb(239, 253, 33) solid;
}
.dynamic-component{
  margin: 0 1rem;
  flex-grow: 1;
}
</style>
