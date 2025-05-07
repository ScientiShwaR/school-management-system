// modules/staff/firebase.ts
import { db } from '@/firebase';
import { collection } from 'firebase/firestore';

export const staffCollection = collection(db, 'staff');
