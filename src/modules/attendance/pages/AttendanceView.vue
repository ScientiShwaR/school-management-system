<!-- modules/attendance/pages/AttendanceView.vue -->
<script setup lang="ts">
import { useAttendanceStore } from '../store';
import { onMounted } from 'vue';

const { records, fetchAttendance, loading } = useAttendanceStore();

const headers = [
  { title: 'Date', value: 'date' },
  { title: 'Class ID', value: 'classId' },
  { title: 'Section ID', value: 'sectionId' },
  { title: 'Teacher ID', value: 'teacherId' },
  { title: 'Students Marked', value: 'students' },
  { title: 'Remarks', value: 'remarks' }
];

onMounted(() => fetchAttendance());
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>Attendance Records</v-card-title>
      <v-card-text>
        <v-data-table :items="records" :loading="loading" :headers="headers">
          <template #item.date="{ item }">
            {{ new Date(item.date).toLocaleDateString() }}
          </template>
          <template #item.students="{ item }">
            {{ item.students.length }} marked
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>
