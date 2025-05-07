<!-- modules/fees/pages/FeeForm.vue -->
<script setup lang="ts">
import { useFeeStore } from '../store';
import type { FeeRecord } from '../types';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const store = useFeeStore();
const route = useRoute();
const router = useRouter();
const form = ref<FeeRecord>({ studentId: '', amount: 0, method: 'cash', date: new Date().toISOString().substr(0, 10) });
const isEdit = !!route.params.id;

onMounted(async () => {
  if (isEdit) {
    await store.fetchFees();
    const record = store.fees.find(f => f.id === route.params.id);
    if (record) form.value = { ...record };
  }
});

const submit = async () => {
  if (isEdit && form.value.id) await store.updateFee(form.value.id, form.value);
  else await store.addFee(form.value);
  router.push('/fees');
};
</script>

<template>
  <v-card>
    <v-card-title>{{ isEdit ? 'Edit' : 'Add' }} Fee</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-text-field v-model="form.studentId" label="Student ID" required />
        <v-text-field v-model.number="form.amount" label="Amount" type="number" required />
        <v-select v-model="form.method" :items="['cash', 'upi']" label="Method" required />
        <v-text-field v-model="form.date" label="Date" type="date" required />
        <v-textarea v-model="form.notes" label="Notes (optional)" />
        <v-btn type="submit" color="primary">Save</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
