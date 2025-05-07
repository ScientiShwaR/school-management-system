<!-- modules/attendance/pages/AttendanceForm.vue -->
<script setup lang="ts">
import { useAttendanceStore } from '../store';
import { ref } from 'vue';
import type { AttendanceRecord } from '../types';

const { addAttendance } = useAttendanceStore();

const record = ref<AttendanceRecord>({
  date: new Date().toISOString().split('T')[0],
  classId: '',
  sectionId: '',
  teacherId: '',
  students: [],
  remarks: ''
});

const saveAttendance = async () => {
  await addAttendance(record.value);
};
</script>

<template>
  <v-container>
    <v-form @submit.prevent="saveAttendance">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="record.date" label="Date" type="date" required />
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="record.classId" label="Class ID" required />
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="record.sectionId" label="Section ID" required />
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="record.teacherId" label="Teacher ID" required />
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="record.remarks" label="Remarks" />
        </v-col>
        <v-col cols="12">
          <!-- Placeholder: student attendance will be added here -->
          <p>Student attendance list integration to be done here.</p>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Save Attendance</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
