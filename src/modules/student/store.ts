import { defineStore } from "pinia";
import { ref } from "vue";
import type { Student } from "./types";
import { studentCollection } from './firebase';
import { addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

export const useStudentStore = defineStore('student', () => {
  const students = ref<Student[]>([]);
  const loading = ref(false);

  async function fetchStudents() {
    loading.value = true;
    const snap = await getDocs(studentCollection);
    students.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Student));
    loading.value = false;
  }

  async function addStudent(data: Student) {
    await addDoc(studentCollection, data);
    await fetchStudents();
  }

  async function updateStudent(id: string, data: Partial<Student>) {
    await updateDoc(doc(studentCollection, id), data);
    await fetchStudents();
  }

  async function deleteStudent(id: string) {
    await deleteDoc(doc(studentCollection, id));
    await fetchStudents();
  }

  return { students, loading, fetchStudents, addStudent, updateStudent, deleteStudent };
});
