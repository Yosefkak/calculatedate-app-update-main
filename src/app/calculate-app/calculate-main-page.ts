import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConvertToHijriDate } from "../shard/conver-date";

@Component({
    selector: "app-calculate",
    standalone: true,
    imports: [FormsModule, ConvertToHijriDate],
    templateUrl: "./calculate-main-page.html"
})
export class CalculateDate {


    private _FullDate: string = '';

    
    private _FullDateHijri : string='';
    public get FullDateHijri() : string {
        return this._FullDateHijri;
    }
    public set FullDateHijri(v : string) {
        this._FullDateHijri = v;
    }
    
    public get FullDate(): string {
        this._FullDate = this._year + '-' + this.month + '-' + this.day;
        return this._FullDate;
    }
    public set FullDate(value:string) {
         this._FullDate=value;
    }

    gregorianToHijri(date: Date) {
        const hijriStart = new Date(622, 6, 16);
        const daysInYear = 354.367; 

        const differenceInDays = Math.floor((date.getTime() - hijriStart.getTime()) / (1000 * 60 * 60 * 24));

        const hijriYear = Math.floor(differenceInDays / daysInYear) + 1;

        const daysInHijriYear = Math.floor(differenceInDays % daysInYear);

        const hijriMonth = Math.floor(daysInHijriYear / 29.5) + 1;
        const hijriDay = Math.floor(daysInHijriYear % 29.5) + 1;
        this.FullDateHijri= hijriYear.toString()+'-'+hijriMonth.toString()+'-'+hijriDay.toString();


    }
    ConvertToHijri(){
        console.log(this.FullDateHijri)
        this.gregorianToHijri(new Date(this.FullDate));
    }
    private _year: string = "2024";//defulat value

    private _month: string = "02";//defulat value

    private _day: string = "01";//defulat value
    public get day(): string {
        return this._day;
    }
    public set day(v: string) {
        this._day = v;
    }

    public get month(): string {
        return this._month;
    }
    public set month(v: string) {
        this._month = v;
    }

    public get year(): string {
        return this._year;
    }
    public set year(v: string) {
        this._year = v;
    }

}