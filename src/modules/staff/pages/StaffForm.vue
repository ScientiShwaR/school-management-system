<!-- modules/staff/pages/StaffForm.vue -->
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';
import { useStaffStore } from '../store';
import type { Staff } from '../types';

const route = useRoute();
const router = useRouter();
const store = useStaffStore();
const id = route.params.id as string | undefined;

const roles = ['Teacher', 'Admin', 'Support'];

const form = reactive<Staff>({
  fullName: '',
  role: 'Teacher',
  subjectSpecialization: '',
  mobile: '',
  email: '',
  joiningDate: '',
  status: 'Active',
});

onMounted(async () => {
  if (id) {
    await store.fetchStaff();
    const existing = store.staffList.find(s => s.id === id);
    if (existing) Object.assign(form, existing);
  }
});

const submit = async () => {
  if (id) {
    await store.updateStaff(id, form);
  } else {
    await store.addStaff(form);
  }
  router.push('/staff');
};
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>{{ id ? 'Edit Staff' : 'Add Staff' }}</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-text-field label="Full Name" v-model="form.fullName" required />
          <v-select label="Role" :items="roles" v-model="form.role" required />
          <v-text-field label="Subject Specialization" v-if="form.role === 'Teacher'"
            v-model="form.subjectSpecialization" />
          <v-text-field label="Mobile" v-model="form.mobile" required />
          <v-text-field label="Email" v-model="form.email" />
          <v-text-field label="Joining Date" v-model="form.joiningDate" type="date" required />
          <v-select label="Status" :items="['Active', 'Inactive']" v-model="form.status" required />
          <v-btn type="submit" color="primary">Save</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
