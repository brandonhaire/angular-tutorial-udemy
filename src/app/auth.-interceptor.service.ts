import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        //     throw new Error("Method not implemented.");
        // if (req.url){}   way to block requests from certian URLs 
        console.log('Request is on its way');
        return next.handle(req);
    }
}