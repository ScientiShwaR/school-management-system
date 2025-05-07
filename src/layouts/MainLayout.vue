<!-- src/layouts/MainLayout.vue -->
<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const logout = async () => {
  await auth.logout();
  router.push('/login');
};

const links = [
  { label: 'Dashboard', path: '/', icon: 'mdi-view-dashboard' },
  { label: 'Students', path: '/students', icon: 'mdi-account-group' },
  { label: 'Fees', path: '/fees', icon: 'mdi-cash' },
  { label: 'Attendance', path: '/attendance', icon: 'mdi-calendar-check' },
  { label: 'Staff', path: '/staff', icon: 'mdi-account-tie' },
];
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>School Management</v-app-bar-title>
      <v-spacer />
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item v-for="link in links" :key="link.path" :to="link.path" router>
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
