import { Iapplicantapply } from './applicant';

export class interview implements Iapplicantapply {
    InterviewDate: Date = new Date();
    id: number;
    name: string;
    ScheduleInterview(): string {
        var dd = this.InterviewDate.getDate();
        var mm = this.InterviewDate.getMonth();
        var yy = this.InterviewDate.getFullYear();
        var result = `hello ${this.name} ,your interview is on ${dd}-${mm}-${yy}}`;
        return result;
    }

    storingResult(): void {
        const marks = 60
        if(marks>50)
        {
            console.log('congratulations..')
        }
        else
        {
            console.log('try next time..')
        }
    }
}
