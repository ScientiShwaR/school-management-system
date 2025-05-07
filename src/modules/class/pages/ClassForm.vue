<!-- ClassForm.vue -->
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useClassStore } from '../store';
import type { ClassData } from '../types';

const classStore = useClassStore();
const route = useRoute();
const router = useRouter();
const id = route.params.id as string;
const isEdit = id !== 'new';

const form = ref<ClassData>({ name: '', academicYear: '', sections: [] });

function addSection() {
  form.value.sections.push({ name: `Section ${form.value.sections.length + 1}`, classTeacherId: '', subjects: [] });
}

function addSubject(sectionIndex: number) {
  form.value.sections[sectionIndex].subjects.push({ name: '', teacherId: '' });
}

async function onSubmit() {
  if (isEdit) {
    await classStore.updateClass(id, form.value);
  } else {
    await classStore.addClass(form.value);
  }
  router.push('/classes');
}

onMounted(async () => {
  if (isEdit) {
    await classStore.fetchClasses();
    const existing = classStore.classes.find(c => c.id === id);
    if (existing) form.value = { ...existing };
  }
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-card>
      <v-card-title>{{ isEdit ? 'Edit' : 'Add' }} Class</v-card-title>
      <v-card-text>
        <v-text-field label="Class Name" v-model="form.name" required />
        <v-text-field label="Academic Year" v-model="form.academicYear" required />

        <v-expansion-panels>
          <v-expansion-panel v-for="(section, i) in form.sections" :key="i">
            <v-expansion-panel-title>Section {{ section.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-text-field label="Class Teacher ID" v-model="section.classTeacherId" />
              <v-btn small @click="addSubject(i)">Add Subject</v-btn>
              <v-list>
                <v-list-item v-for="(subj, j) in section.subjects" :key="j">
                  <v-text-field label="Subject" v-model="subj.name" class="mr-2" />
                  <v-text-field label="Teacher ID" v-model="subj.teacherId" />
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-btn @click="addSection">Add Section</v-btn>
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" color="primary">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
