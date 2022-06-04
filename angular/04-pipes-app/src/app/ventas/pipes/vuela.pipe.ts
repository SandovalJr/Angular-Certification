import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'vuela'
})


export class VuelaPipe implements PipeTransform {

    transform(value: boolean) {
        // console.log(value);

        return (value) ? 'vuela' : 'no vuela'


    }


}