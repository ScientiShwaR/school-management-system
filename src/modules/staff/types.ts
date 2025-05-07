// modules/staff/types.ts
export interface Staff {
  id?: string;
  fullName: string;
  role: 'Teacher' | 'Admin' | 'Support';
  subjectSpecialization?: string;
  mobile: string;
  email?: string;
  joiningDate: string;
  status: 'Active' | 'Inactive';
  photoURL?: string;
}
