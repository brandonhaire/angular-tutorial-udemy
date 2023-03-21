import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // if (req.url){}   way to block requests from certian URLs 
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        });
        return next.handle(modifiedRequest);
    }
}