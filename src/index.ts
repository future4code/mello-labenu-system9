import { Student } from "./Student";
import { Mission } from "./Mission";
import moment from "moment";
import { FullTimeMission } from "./FullTimeMission";
import { Teacher } from "./Teacher";
import { TEACHER_SKILLS } from "./Teacher";

const studantMello: Student = new Student(
  "10",
  "Gandalf",
  "gandalf@gandalf.com",
  moment("18/04/1990", "DD/MM/YYYY"),
  ["jogar", "dormir", "estudar"]
);

const teacherMello: Teacher = new Teacher("20", "Mateus", "mateus@mateus.com", [
  TEACHER_SKILLS.TYPESCRIPT,
  TEACHER_SKILLS.BACKEND,
]);

const fullTimeMission: FullTimeMission = new FullTimeMission(
  "100",
  moment("18/04/2019", "DD/MM/YYYY"),
  moment("18/10/2020", "DD/MM/YYYY"),
  [],
  []
);

fullTimeMission.addStudent(studantMello);
fullTimeMission.addTeacher(teacherMello);
console.log("Aluno:", studantMello);
console.log("Professor:", teacherMello);
console.log("FullTimeMission:", fullTimeMission);

console.log(studantMello.getAge());
