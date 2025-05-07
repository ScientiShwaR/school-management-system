// modules/staff/store.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Staff } from './types';
import { staffCollection } from './firebase';
import { getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const useStaffStore = defineStore('staff', () => {
  const staffList = ref<Staff[]>([]);
  const loading = ref(false);

  async function fetchStaff() {
    loading.value = true;
    const snap = await getDocs(staffCollection);
    staffList.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Staff));
    loading.value = false;
  }

  async function addStaff(data: Staff) {
    await addDoc(staffCollection, data);
    await fetchStaff();
  }

  async function updateStaff(id: string, data: Partial<Staff>) {
    await updateDoc(doc(staffCollection, id), data);
    await fetchStaff();
  }

  async function deleteStaff(id: string) {
    await deleteDoc(doc(staffCollection, id));
    await fetchStaff();
  }

  return { staffList, loading, fetchStaff, addStaff, updateStaff, deleteStaff };
});
