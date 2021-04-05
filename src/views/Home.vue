<template>
  <div class="home">
    <div class="character">
      <h2 class="name">Лукашевич Андрей Анатольевич</h2>
      <router-link to="/about" v-if="true" class="lvl">
        <span>Новый уроень</span>
      </router-link>
      <ul class="list">
        <li>Опыт</li>
        <li>Уровень 24</li>
        <li>200/365</li>
      </ul>
      <progress class="progress" max="365" value="200"></progress>
      <div class="wrap">
        <img class="photo" alt="photo" src="../assets/test2.jpg">
        <div class="specifications">
          <Characteristic name="СИЛ" :value="10" modifier="0" placeholder="сила"/>
          <Characteristic name="ЛОВ" :value="16" modifier="+3" placeholder="ловкость"/>
          <Characteristic name="ВЫН" :value="12" modifier="+1" placeholder="выносливость"/>
          <Characteristic name="ИНТ" :value="18" modifier="+4" placeholder="интелект"/>
          <Characteristic name="МДР" :value="12" modifier="+1" placeholder="мудрость"/>
          <Characteristic name="ХАР" :value="10" modifier="0" placeholder="харизма"/>
          <Characteristic name="УДЧ" :value="14" modifier="+2" placeholder="удача"/>
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
import { defineComponent } from 'vue';
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
  data() {
    return {
      currentTab: 'TheSkills',
      tabs: ['TheSkills', 'TheTalents'],
      nameTabs: ['Навыки', 'Таланты'],
    };
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
}
.photo{
  width: 50%;
  object-fit: cover;
  border-width: 10px;
  border-style: ridge;
}
.list{
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 1rem 1rem 0 1rem;
  font-size: 1.3rem;
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
  /* justify-content: space-around; */
  width: 50%;
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
  box-sizing: border-box;
  border: 3px rgb(218, 218, 218) solid;
  box-shadow: 0 0 20px 5px rgb(218, 218, 218);
  outline: none;
  justify-content: center;
  align-items: center;
}
.tab-button{
  background-color: rgb(141, 141, 141);
  color: rgb(255, 248, 22);
  width: 20%;
  height: 30px;
  border: 3px rgb(218, 218, 218) solid;
  outline: none;
  margin: 5px;
}
.activeTab{
  background-color: rgb(65, 65, 65);
  color: rgb(255, 248, 22);
  border: 3px rgb(239, 253, 33) solid;
}
</style>
