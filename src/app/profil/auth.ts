import { of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Auth {
    isAuthenticated() {
        return of(true)
    }

    canAccessProduct() {
        return of(false)
    }
}