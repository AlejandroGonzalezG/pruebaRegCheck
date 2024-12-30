<template>
  <template v-if="userStore.registerView" >
    <RegisterView />
  </template>
  <template v-else>
    <LoginView />
  </template>
</template>

<style>
</style>

<script setup>
import { useUserStore } from '@/store/userStore';
import RegisterView from './RegisterView.vue';
import LoginView from './LoginView.vue';

const userStore = useUserStore();

</script>
