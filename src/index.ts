import { Student } from "./Student";
import { Mission } from "./Mission";
import moment from "moment";
import { FullTimeMission } from "./FullTimeMission";

const studantMello: Student = new Student(
  "10",
  "Gandalf",
  "gandalf@gandalf.com",
  moment("18/04/1990", "DD/MM/YYYY"),
  ["jogar", "dormir", "estudar"]
);

const fullTimeMission: FullTimeMission = new FullTimeMission(
  "100",
  moment("18/04/2019", "DD/MM/YYYY"),
  moment("18/10/2020", "DD/MM/YYYY"),
  [],
  []
);

fullTimeMission.addStudent(studantMello);
//console.log(studantMello);
console.log(fullTimeMission);
