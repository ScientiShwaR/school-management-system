import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '@/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import type { ClassData } from './types';

export const useClassStore = defineStore('class', () => {
  const classes = ref<ClassData[]>([]);
  const loading = ref(false);

  async function fetchClasses() {
    loading.value = true;
    const snap = await getDocs(collection(db, 'classes'));
    classes.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as ClassData));
    loading.value = false;
  }

  async function addClass(data: ClassData) {
    await addDoc(collection(db, 'classes'), data);
    await fetchClasses();
  }

  async function updateClass(id: string, data: Partial<ClassData>) {
    await updateDoc(doc(db, 'classes', id), data);
    await fetchClasses();
  }

  async function deleteClass(id: string) {
    await deleteDoc(doc(db, 'classes', id));
    await fetchClasses();
  }

  return { classes, loading, fetchClasses, addClass, updateClass, deleteClass };
});
