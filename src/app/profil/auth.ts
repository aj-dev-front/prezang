import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class Auth {
    isAuthenticated() {
        return of(true)
    }

    canAccessProduct() {
        return of(false)
    }
}