<!-- modules/staff/pages/StaffList.vue -->
<script setup lang="ts">
import { onMounted } from 'vue';
import { useStaffStore } from '../store';

const store = useStaffStore();

onMounted(() => store.fetchStaff());

const headers = [
  { title: 'Name', key: 'fullName' },
  { title: 'Role', key: 'role' },
  { title: 'Mobile', key: 'mobile' },
  { title: 'Email', key: 'email' },
  { title: 'Joining Date', key: 'joiningDate' },
  { title: 'Status', key: 'status' },
];
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>
        Staff List
        <v-spacer />
        <v-btn color="primary" @click="$router.push('/staff/new')">Add Staff</v-btn>
      </v-card-title>
      <v-data-table :items="store.staffList" :headers="headers" :loading="store.loading" />
    </v-card>
  </v-container>
</template>
