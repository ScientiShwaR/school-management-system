// modules/fees/types.ts
export interface FeeRecord {
  id?: string;
  studentId: string;
  amount: number;
  method: 'cash' | 'upi';
  date: string; // ISO date
  notes?: string;
}
