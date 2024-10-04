<script setup>
import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
// import TheNavbar from '@/components/common/TheNavbar.vue';
import TheSidebar from './components/common/TheSidebar.vue';

import { onMounted, computed } from 'vue';
// pinia
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();

const userName = computed(() => {
  const fullName = userStore.user.empNameE;
  return fullName ? fullName.split(' ').slice(0, 2).join(' ') : '';
});

onMounted(async () => {
  await userStore.getUser();
  await userStore.getToken();
});
</script>

<template>
  <TheHeader>
    <!-- 這裡寫header的系統名稱 -->
    <template #system>System Name</template>
    <template #userName>{{ userName }}</template>
  </TheHeader>
  <!-- <TheNavbar /> -->
  <TheSidebar />
  <main>
    <router-view />
  </main>
  <TheFooter></TheFooter>
</template>

<style lang="scss">
main {
  padding: 1rem;
  flex-grow: 1;
  /* sidebar 寬度 */
  margin-left: 13rem;
}
</style>
