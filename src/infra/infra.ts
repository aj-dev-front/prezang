import { Observable } from 'rxjs';

export abstract class Infra<T> {
    abstract get(): Observable<T[]>
}