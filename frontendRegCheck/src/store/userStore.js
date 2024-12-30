import { register, login } from '@/services/userService';
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useUserStore = defineStore('userStore', () => {
  const currentUser = ref(null);

  const isAuthenticated = computed(() => {
    const token = localStorage.getItem('token');
    return !!token;
  });
  const registerView = ref(true);

  const registerUser = async (email, password) => {
    const res = await register(email, password);
    return res;
  }

  const loginUser = async (email, password) => {
    const res = await login(email, password);
    currentUser.value = res.data.user;
    localStorage.setItem('token', res.data.accessToken);
    return res;
  }

  const logoutUser = () => {
    return  
  }

  return {
    currentUser,
    isAuthenticated,
    registerView,

    registerUser,
    loginUser,
    logoutUser
  }
})