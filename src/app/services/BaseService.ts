import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export class BaseService {
    public baseUrl : String ='http://localhost:1337/LMS';
    public errorHandler(error : Response) {
        return Observable.throw( error ); 
    }
    public extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}