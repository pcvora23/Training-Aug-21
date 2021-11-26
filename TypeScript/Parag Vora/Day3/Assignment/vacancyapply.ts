import {Iapplicantapply} from './applicant';
export class Vacancy implements Iapplicantapply {
    id: number;
    name: string;
    position: string;
    experience: number;

    constructor(id: number, name: string, position: string, experience: number) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.experience = experience;
    }
    addVacancy(vacancyarr: Array<Vacancy>): void {
        var vacancylist = new Vacancy(this.id, this.name, this.position, this.experience);
        vacancyarr.push(vacancylist);
    }
}

