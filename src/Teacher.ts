import { User } from "./User";

enum TEACHER_SKILLS {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public skills: TEACHER_SKILLS[]
  ) {}
}
