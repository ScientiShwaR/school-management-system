// modules/fees/firebase.ts
import { db } from '@/firebase';
import { collection } from 'firebase/firestore';
export const feeCollection = collection(db, 'fees');
