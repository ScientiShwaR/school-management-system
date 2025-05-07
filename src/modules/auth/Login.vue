<!-- src/modules/auth/Login.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from './store';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await auth.login(email.value, password.value);
    router.push('/');
  } catch (err) {
    alert('Login failed');
  }
};
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="text-h6">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="email" label="Email" type="email" required />
              <v-text-field v-model="password" label="Password" type="password" required />
              <v-btn type="submit" color="primary" :loading="auth.loading" block>Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
