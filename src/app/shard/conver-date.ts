import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'convertToHijriDate',
  standalone: true
})
export class ConvertToHijriDate implements PipeTransform {


    transform(value: any, ...args: any[]) {
        if(value.length>=10){
            return 'Error please iput valid date'
        }
       if(args[0]=='d'){
        return value.split('-')[2];
       }
       if(args[0]=='y'){
        return value.split('-')[0];
       }
       else 
       return 'please valid argumants'
    }


}
