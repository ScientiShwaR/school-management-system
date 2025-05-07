<!-- modules/fees/pages/FeeList.vue -->
<script setup lang="ts">
import { useFeeStore } from '../store';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const store = useFeeStore();
const router = useRouter();
onMounted(() => store.fetchFees());

const edit = (id: string) => router.push(`/fees/form/${id}`);
const remove = (id: string) => store.deleteFee(id);
</script>

<template>
  <v-card>
    <v-card-title>
      Fee Collection
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="$router.push('/fees/form')">Add Fee</v-btn>
    </v-card-title>
    <v-data-table :items="store.fees" :loading="store.loading" class="elevation-1">
      <template #headers>
        <tr>
          <th>Student ID</th>
          <th>Amount</th>
          <th>Method</th>
          <th>Date</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
      </template>
      <template #item="{ item }">
        <tr>
          <td>{{ item.studentId }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.method }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.notes }}</td>
          <td>
            <v-btn icon @click="edit(item.id)"><v-icon>mdi-pencil</v-icon></v-btn>
            <v-btn icon @click="remove(item.id)"><v-icon>mdi-delete</v-icon></v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>
