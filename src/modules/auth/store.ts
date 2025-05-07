// src/modules/auth/store.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<{ uid: string; email: string | null; role: string } | null>(null);
  const loading = ref(false);

  const login = async (email: string, password: string) => {
    loading.value = true;
    const res = await signInWithEmailAndPassword(auth, email, password);
    currentUser.value = {
      uid: res.user.uid,
      email: res.user.email,
      role: 'admin' // This can be extended by fetching role from Firestore
    };
    loading.value = false;
  };

  const logout = async () => {
    await signOut(auth);
    currentUser.value = null;
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser.value = {
        uid: user.uid,
        email: user.email,
        role: 'admin' // To be extended
      };
    } else {
      currentUser.value = null;
    }
  });

  return { currentUser, loading, login, logout };
});
