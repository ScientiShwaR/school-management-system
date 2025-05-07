<!-- modules/student/pages/StudentForm.vue -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStudentStore } from '@/modules/student/store';
import type { Student } from '@/modules/student/types';

const route = useRoute();
const router = useRouter();
const studentStore = useStudentStore();

const isEdit = route.params.id !== 'new';
const student = ref<Student>({
  name: null,
  dob: null,
  gender: null,
  class: null,
  section: null,
  status: null,
  contact: null,
});

onMounted(async () => {
  if (isEdit) {
    const found = studentStore.students.find(s => s.id === route.params.id);
    if (found) student.value = { ...found };
  }
});

async function save() {
  if (isEdit && route.params.id) {
    await studentStore.updateStudent(route.params.id as string, student.value);
  } else {
    await studentStore.addStudent(student.value);
  }
  router.push({ name: 'students' });
}
</script>

<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title>{{ isEdit ? 'Edit Student' : 'Add New Student' }}</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="save">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Full Name" v-model="student.name" required />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Date of Birth" type="date" v-model="student.dob" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select label="Gender" :items="['Male', 'Female', 'Other']" v-model="student.gender" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Class" v-model="student.class" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Section" v-model="student.section" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select label="Status" :items="['active', 'inactive']" v-model="student.status" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Contact Number" v-model="student.contact" />
            </v-col>
          </v-row>
          <v-btn color="primary" type="submit" class="mt-4">Save</v-btn>
          <v-btn @click="router.back()" class="mt-4 ms-2">Cancel</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card {
  max-width: 800px;
  margin: auto;
}
</style>
