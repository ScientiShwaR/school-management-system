// modules/student/firebase.ts
import { db } from '@/firebase';
import { collection } from 'firebase/firestore';
export const studentCollection = collection(db, 'fees');
