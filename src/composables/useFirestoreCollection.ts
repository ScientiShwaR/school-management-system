import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

export function useFirestoreCollection<T>(collectionPath: string) {
  const items = ref<T[]>([]);
  const loading = ref(false);

  const fetchAll = async () => {
    loading.value = true;
    const snap = await getDocs(collection(db, collectionPath));
    items.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
    loading.value = false;
  };

  return { items, loading, fetchAll };
}
