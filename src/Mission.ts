import * as moment from "moment";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export abstract class Mission {
  private name: string = "";

  constructor(
    private id: string,
    private startDate: moment.Moment,
    private endDate: moment.Moment,
    private teachers: Teacher[] = [],
    private students: Student[] = [],
    private currentModule?: number | undefined
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getStartDate(): moment.Moment {
    return this.startDate;
  }

  public getEndDate(): moment.Moment {
    return this.endDate;
  }

  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
    console.log("Professor Adicionado");
  }

  public addStudent(student: Student) {
    this.students.push(student);
    console.log("Estudante Adicionado");
  }

  public setName(name: string) {
    this.name = name;
  }
}
