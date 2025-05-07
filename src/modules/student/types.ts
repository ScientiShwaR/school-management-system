export interface Student {
  id?: string; // Firestore ID
  fullName: string | null;
  rollNumber: string | null;
  admissionNumber: string | null;
  gender: 'Male' | 'Female' | null;
  dateOfBirth: string | null; // ISO date string
  contact: {
    phone: string | null;
    email: string | null;
    address: string | null;
  } | null;
  guardian: {
    name: string | null;
    phone: string | null;
    relation: string | null;
  } | null;
  admissionDate: string | null;
  status: 'Active' | 'Inactive' | 'Transferred' | 'Left' | null;
  classId: string | null;     // Reference to Class (can be null if unassigned)
  sectionId: string | null;   // Reference to Section (can be null if unassigned)
  currentSession: string | null; // 2024–2025 etc.
  enrollmentHistory?: EnrollmentEntry[] | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface EnrollmentEntry {
  session: string | null;
  classId: string | null;
  sectionId: string | null;
  joinedOn: string | null;
  leftOn?: string | null;
  reason?: string | null;
}
