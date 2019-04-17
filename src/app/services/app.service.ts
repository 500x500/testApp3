import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class AppService {
    public formArray$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    ]);
public addRow(value: {[key: string]: string}[]) {
    let current = this.formArray$.value.slice();
    let objToAdd = value.reduce((acc, item) => {
        Object.keys(item).forEach(k => {
            acc[k] = item[k];
        });
        console.log(acc);
        return acc;
    }, {});
    current.push(objToAdd);
    this.formArray$.next(current);
    }
}
