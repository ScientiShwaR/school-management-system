<!-- ClassList.vue -->
<script setup lang="ts">
import { onMounted } from 'vue';
import { useClassStore } from '../store';

const classStore = useClassStore();
onMounted(() => classStore.fetchClasses());

const headers = [
  { title: 'Class', key: 'name' },
  { title: 'Academic Year', key: 'academicYear' },
  { title: 'Sections', key: 'sections.length' },
  { title: 'Actions', key: 'actions', sortable: false },
];
</script>

<template>
  <v-card>
    <v-card-title>
      Classes
      <v-spacer />
      <v-btn to="/classes/new" color="primary">Add Class</v-btn>
    </v-card-title>
    <v-data-table :headers="headers" :items="classStore.classes" :loading="classStore.loading" item-value="name">
      <template #item.actions="{ item }">
        <v-btn icon :to="`/classes/${item.id}`"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn icon @click="classStore.deleteClass(item.id)"><v-icon>mdi-delete</v-icon></v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
