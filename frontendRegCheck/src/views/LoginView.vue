<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="email"
            label="Ingresa tu email"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Ingresa un correo válido']"
          />
      
          <q-input
            filled
            type="password"
            v-model="password"
            label="ingresa tu contraseña"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Ingresa una contraseña',
            ]"
          />      
          <div>
            <q-btn label="Entrar" type="submit" color="primary"/>
            <q-btn label="Limpiar campos" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>
      <q-card-section>
        <span>No tienes cuenta? ingresa al </span>
        <q-btn @click="() => userStore.registerView = true" label="Registro" color="purple"></q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/userStore'
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore();

const email = ref(null)
const password = ref(null)

async function onSubmit() {
  try {
    await userStore.loginUser(email.value, password.value);
    toast('Te haz logueado correctamente!', {
      autoClose: false,
    })
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  } catch (e) {
    console.log('Ha ocurrido un error', e.response.data.message);
    toast(e.response?.data?.message, {
      autoClose: 3000,
    })
    localStorage.clear();
  }
}

function onReset() {
  email.value = null
  password.value = null
}
</script>
