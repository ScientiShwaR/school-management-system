import { ref } from "vue";
import type { Student } from "./types";
import { defineStore } from "pinia";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const useStudentStore = defineStore('student', () => {
  const students = ref<Student[]>([]);
  const loading = ref(false);

  async function fetchStudents() {
    loading.value = true;
    const snap = await getDocs(collection(db, 'students'));
    students.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Student));
    loading.value = false;
  }

  async function addStudent(data: Student) {
    await addDoc(collection(db, 'students'), data);
    await fetchStudents();
  }

  async function updateStudent(id: string, data: Partial<Student>) {
    await updateDoc(doc(db, 'students', id), data);
    await fetchStudents();
  }

  async function deleteStudent(id: string) {
    await deleteDoc(doc(db, 'students', id));
    await fetchStudents();
  }

  return { students, loading, fetchStudents, addStudent, updateStudent, deleteStudent };
});
