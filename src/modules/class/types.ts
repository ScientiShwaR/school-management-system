export interface Subject {
  name: string;
  teacherId?: string;
}

export interface Section {
  name: string;
  classTeacherId?: string;
  subjects: Subject[];
}

export interface ClassData {
  id?: string;
  name: string;
  academicYear: string;
  sections: Section[];
}
