import * as moment from 'moment'

export abstract class Mission {
    private name: string = ""

    constructor(
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: string[] = [],
        private students: string[] = [],
        private currentModule?: number | undefined
    ) {}

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getStartDate(): moment.Moment {
        return this.startDate
    }

    public getEndDate(): moment.Moment {
        return this.endDate
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule
    }

    public addTeacher(teacher: string) {
        this.teachers.push(teacher)
    }

    public addStudent(student: string) {
        this.students.push(student)
    }

    public setName(name: string) {
        this.name = name
    }
}