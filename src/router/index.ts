// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { useAuthStore } from '@/modules/auth/store';

const routes = [
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'dashboard', component: () => import('@/modules/dashboard/pages/Dashboard.vue') },
      { path: 'students', name: 'students', component: () => import('@/modules/student/pages/StudentList.vue') },
      { path: 'students/:id', name: 'studentDetails', component: () => import('@/modules/student/pages/StudentForm.vue') },
      { path: 'fees', name: 'fees', component: () => import('@/modules/fees/pages/FeeList.vue') },
      { path: 'attendance', name: 'attendance', component: () => import('@/modules/attendance/pages/AttendanceView.vue') },
      { path: 'staff', name: 'staff', component: () => import('@/modules/staff/pages/StaffList.vue') }
    ]
  },
  {
    path: '/login',
    component: AuthLayout,
    children: [
      { path: '', name: 'login', component: () => import('@/modules/auth/Login.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
