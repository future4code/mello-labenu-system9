import { Student } from "./Student";
import { Mission } from "./Mission";
import moment from "moment";
import { FullTimeMission } from "./FullTimeMission";
import { Teacher } from "./Teacher";
import { TEACHER_SKILLS } from "./Teacher";

const studantMello: Student = new Student(
  10,
  "Gandalf",
  "gandalf@gandalf.com",
  moment("18/04/1990", "DD/MM/YYYY"),
  ["jogar", "dormir", "estudar"]
);

const studantMello2: Student = new Student(
  30,
  "Aragorn",
  "aragorn@aragorn.com",
  moment("18/04/2000", "DD/MM/YYYY"),
  ["jogar", "dormir", "estudar"]
);

const teacherMello: Teacher = new Teacher(20, "Mateus", "mateus@mateus.com", [
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

const idDigitado: number = Number(process.argv[2]);

const students = fullTimeMission.getStudents();

const ageById = (id: number): number | void => {
  try {
    const singleStudent: any[] = [];
    const student: any = students.find((data: any) => data.id === id);
    console.log(student);
    if (student === undefined) {
      return console.log("Id não encontrado");
    } else {
      singleStudent.push(student);
      let date;
      singleStudent.forEach((element) => {
        date = element.birthDate;
      });
      const age = moment().diff(date, "years");
      return console.log("Idade do aluno", age, "anos");
    }
  } catch (error) {
    console.log(error.message);
  }
};

fullTimeMission.addStudent(studantMello);
fullTimeMission.addStudent(studantMello2);
fullTimeMission.addTeacher(teacherMello);
// console.log("Aluno:", studantMello);
// console.log("Professor:", teacherMello);
// console.log("FullTimeMission:", fullTimeMission);

//console.log("Estudante:", students);
ageById(idDigitado);
