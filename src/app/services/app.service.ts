import {Injectable} from '@angular/core';

@Injectable()

export class AppService {
    formArray = [
      { position: '', name: 'Tikhon', dob: '10.12.1993', sex: 'мужской', snils: '555' },
      { position: '1', name: 'Tikhon', dob: '10.12.1993', sex: 'мужской', snils: '555' }
    ];
}

