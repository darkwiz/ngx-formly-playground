import { Shopping } from './Shopping';
import { Service } from './Service';

export class RequestToConcierge {
    constructor(
        public cardId: string = '',
        public cardToken: string = '',
        public orderType: string = 'SHOPPINGS',
        public acceptTerms: boolean = false,
        public phoneNo: number = null,
        public email: string = null,
        public shoppings: Shopping[] = [ new Shopping() ],
        public services: Service[]  = [ new Service() ],
        public comments?: string
    ) { }
}
