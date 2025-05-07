// modules/attendance/types.ts
export interface AttendanceRecord {
  id?: string;
  date: string; // ISO Date string
  classId: string;
  sectionId: string;
  subjectId?: string;
  teacherId: string;
  students: {
    studentId: string;
    status: 'present' | 'absent' | 'half-day';
  }[];
  remarks?: string;
}
