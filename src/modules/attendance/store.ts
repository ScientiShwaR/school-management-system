// modules/attendance/store.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { AttendanceRecord } from './types';
import { attendanceCollection } from './firebase';
import { getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const useAttendanceStore = defineStore('attendance', () => {
  const records = ref<AttendanceRecord[]>([]);
  const loading = ref(false);

  async function fetchAttendance() {
    loading.value = true;
    const snap = await getDocs(attendanceCollection);
    records.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as AttendanceRecord));
    loading.value = false;
  }

  async function addAttendance(data: AttendanceRecord) {
    await addDoc(attendanceCollection, data);
    await fetchAttendance();
  }

  async function updateAttendance(id: string, data: Partial<AttendanceRecord>) {
    await updateDoc(doc(attendanceCollection, id), data);
    await fetchAttendance();
  }

  async function deleteAttendance(id: string) {
    await deleteDoc(doc(attendanceCollection, id));
    await fetchAttendance();
  }

  return { records, loading, fetchAttendance, addAttendance, updateAttendance, deleteAttendance };
});
