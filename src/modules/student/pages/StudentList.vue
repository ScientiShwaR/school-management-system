<!-- StudentList.vue -->
<script setup lang="ts">
import { onMounted } from 'vue';
import { useStudentStore } from '@/modules/student/store';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const studentStore = useStudentStore();
const { students, loading } = storeToRefs(studentStore);
const router = useRouter();

onMounted(() => {
  studentStore.fetchStudents();
});

function editStudent(id: string) {
  router.push({ name: 'studentDetails', params: { id } });
}

function deleteStudent(id: string) {
  if (confirm('Are you sure you want to delete this student?')) {
    studentStore.deleteStudent(id);
  }
}
</script>

<template>
  <v-container>
    <v-row justify="space-between" class="mb-4">
      <v-col cols="6">
        <h2>Students</h2>
      </v-col>
      <v-col cols="6" class="text-right">
        <v-btn color="primary" @click="router.push({ name: 'studentDetails', params: { id: 'new' } })">
          Add Student
        </v-btn>
      </v-col>
    </v-row>

    <v-data-table :items="students" :loading="loading" :headers="[
      { title: 'Name', value: 'name' },
      { title: 'Class', value: 'class' },
      { title: 'Section', value: 'section' },
      { title: 'Status', value: 'status' },
      { title: 'Actions', value: 'actions', sortable: false }
    ]">
      <template #item.actions="{ item }">
        <v-icon small class="me-2" @click="editStudent(item.id)">mdi-pencil</v-icon>
        <v-icon small color="red" @click="deleteStudent(item.id)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
.v-data-table {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
