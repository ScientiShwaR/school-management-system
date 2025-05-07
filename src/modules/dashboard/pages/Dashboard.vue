<!-- src/modules/dashboard/Dashboard.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { useStudentStore } from '@/modules/student/store';
import { useStaffStore } from '@/modules/staff/store';

const studentStore = useStudentStore();
const staffStore = useStaffStore();

studentStore.fetchStudents();
staffStore.fetchStaff();

const studentCount = computed(() => studentStore.students.length);
const staffCount = computed(() => staffStore.staffList.length);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card>
          <v-card-title>Total Students</v-card-title>
          <v-card-text>{{ studentCount }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card>
          <v-card-title>Total Staff</v-card-title>
          <v-card-text>{{ staffCount }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
