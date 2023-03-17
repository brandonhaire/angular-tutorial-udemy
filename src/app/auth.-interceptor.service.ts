import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        //     throw new Error("Method not implemented.");
        // if (req.url){}   way to block requests from certian URLs 
        console.log('Request is on its way');
        console.log(req);
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        });
        return next.handle(modifiedRequest).pipe(
            tap(event => {
                if (event.type === HttpEventType.Response) {
                    console.log('Response arrived, body data: ');
                    console.log(event.body);
                }
            })
        );
    }
}