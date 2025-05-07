// modules/attendance/firebase.ts
import { db } from '@/firebase';
import { collection } from 'firebase/firestore';

export const attendanceCollection = collection(db, 'attendance');
