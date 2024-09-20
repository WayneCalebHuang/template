import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref({});
  const jwt = ref('');
  async function getUser() {
    user.value = {
      id: '92409511',
      name: 'wayhuang',
      empNameE: 'Wayne T. Huang',
      empNameC: '黃尊昱',
      phone: '2960',
      divCd: 'SS',
      rankCd: '50',
      lmu: 'SI15',
      role: 9
    };
  }
  async function getToken() {
    jwt.value =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3YXlodWFuZyIsImp0aSI6ImRhOTViODVlLTFiZGItNGM3MC1hNGY4LTEyZmY1ZWI1YWM1NCIsInJvbGUiOiI5IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTI0MDk1MTEiLCJjZXJ0cHVibGlja2V5IjoiU1MiLCJuYmYiOjE3MjM0MjYxMjIsImV4cCI6MTcyMzYwNjEyMiwiaWF0IjoxNzIzNDI2MTIyLCJpc3MiOiJGQUhIIn0.eDAXYiBLKVc_Kgclpz731AxuDPXcoiIqvEyapbJW2rw';
  }

  return { user, jwt, getToken, getUser };
});
