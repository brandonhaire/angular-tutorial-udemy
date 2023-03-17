import { tap } from 'rxjs';
import { HttpEventType, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';

export class LoggingInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing request');
        console.log(req.url);
        console.log(req.headers);
        return next.handle(req).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log('Incoming Response: ');
                console.log(event.body);
            }
        }));
    }
}