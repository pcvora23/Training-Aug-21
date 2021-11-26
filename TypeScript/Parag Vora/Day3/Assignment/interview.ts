import {Ivacancy} from './assignment';

enum status
{
    done,
    pending
}
export class Interview implements Ivacancy
{
    interviewerId:number;
    vacId: number;
    vacName: string;
    vacNumber: number;
    vacQualification: string;
    interviewstatus:status;
    constructor(interviewerId:number,vacId: number,vacName: string,vacNumber: number,vacQualification: string,interviewstatus:status)
    {
        this.interviewerId = interviewerId;
        this.vacId = vacId;
        this.vacName = vacName;
        this.vacNumber = vacNumber;
        this.vacQualification = vacQualification;
        this.interviewstatus = interviewstatus;
    }
    addInterview(intarr:Array<Interview>):void
    {
        var interviewlist = new Interview(this.interviewerId,this.vacId,this.vacName,this.vacNumber,this.vacQualification,this.interviewstatus);
        intarr.push(interviewlist);
    }
}
