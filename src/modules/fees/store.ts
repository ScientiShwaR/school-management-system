// modules/fees/store.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { FeeRecord } from './types';
import { feeCollection } from './firebase';
import { getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const useFeeStore = defineStore('fee', () => {
  const fees = ref<FeeRecord[]>([]);
  const loading = ref(false);

  const fetchFees = async () => {
    loading.value = true;
    const snap = await getDocs(feeCollection);
    fees.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as FeeRecord));
    loading.value = false;
  };

  const addFee = async (data: FeeRecord) => {
    await addDoc(feeCollection, data);
    await fetchFees();
  };

  const updateFee = async (id: string, data: Partial<FeeRecord>) => {
    await updateDoc(doc(feeCollection, id), data);
    await fetchFees();
  };

  const deleteFee = async (id: string) => {
    await deleteDoc(doc(feeCollection, id));
    await fetchFees();
  };

  return { fees, loading, fetchFees, addFee, updateFee, deleteFee };
});
